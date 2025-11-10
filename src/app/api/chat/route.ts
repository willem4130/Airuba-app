import { streamText, convertToCoreMessages } from "ai";
import { auth } from "@/server/auth";
import { db } from "@/server/db";
import { getModel } from "@/lib/ai/provider";
import { DEFAULT_MODEL, type AIModelId } from "@/lib/ai/models";
import { nanoid } from "nanoid";

export const runtime = "edge";
export const maxDuration = 60;

export async function POST(req: Request) {
  try {
    const session = await auth();

    if (!session?.user) {
      return new Response("Unauthorized", { status: 401 });
    }

    const json = await req.json();
    const {
      messages,
      chatId,
      modelId = DEFAULT_MODEL,
    } = json as {
      messages: Array<{ role: string; content: string }>;
      chatId?: string;
      modelId?: AIModelId;
    };

    // Create or get chat
    let currentChatId = chatId;
    if (!currentChatId) {
      const title = messages[0]?.content.slice(0, 100) || "New Chat";
      const chat = await db.chat.create({
        data: {
          id: nanoid(),
          userId: session.user.id,
          title,
        },
      });
      currentChatId = chat.id;
    }

    // Save user message
    if (messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      if (lastMessage?.role === "user") {
        await db.message.create({
          data: {
            id: nanoid(),
            chatId: currentChatId,
            role: "user",
            content: lastMessage.content,
          },
        });
      }
    }

    // Get model and stream response
    const model = getModel(modelId);

    // Add system message for Aruba relocation context
    const systemMessage = {
      role: "system" as const,
      content: `You are an expert Aruba relocation assistant. Your role is to help people relocate to Aruba (One Happy Island) in the Caribbean.

Key information about Aruba:
- Official languages: Dutch and Papiamento (English and Spanish widely spoken)
- Currency: Aruban Florin (AWG), pegged to USD at 1.79 AWG = 1 USD
- Climate: Tropical, 82°F average year-round, outside hurricane belt
- Location: Southern Caribbean, 15 miles off Venezuela coast
- Population: ~110,000 residents
- Main industries: Tourism, oil refining, and offshore banking

You should provide accurate, helpful information about:
1. VISA & PERMITS: Residence permits through DIMAS, work permits, business licenses
2. HOUSING: Rental market ($1,200-$3,000/month), popular areas (Eagle Beach, Noord, Oranjestad)
3. EMPLOYMENT: Job market, work permit requirements, entrepreneurship opportunities
4. HEALTHCARE: AZV insurance system, Dr. Horacio E. Oduber Hospital, private clinics
5. COST OF LIVING: Higher than US/Europe, expensive imports, favorable tax structure
6. INTEGRATION: Cultural aspects, expat community, Dushi lifestyle
7. LOGISTICS: Shipping, banking, schools, transportation

Be friendly, informative, and practical. If you're unsure about specific requirements or recent changes, advise users to verify with official sources like DIMAS, the Chamber of Commerce (KvK), or the Aruba government website.`,
    };

    const result = streamText({
      model,
      system: systemMessage.content,
      messages: convertToCoreMessages(messages),
      async onFinish({ text }) {
        // Save assistant message
        await db.message.create({
          data: {
            id: nanoid(),
            chatId: currentChatId!,
            role: "assistant",
            content: text,
          },
        });
      },
    });

    return result.toDataStreamResponse({
      headers: {
        "X-Chat-Id": currentChatId,
      },
    });
  } catch (error) {
    console.error("Chat API Error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}

// Get chat messages
export async function GET(req: Request) {
  try {
    const session = await auth();

    if (!session?.user) {
      return new Response("Unauthorized", { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const chatId = searchParams.get("chatId");

    if (!chatId) {
      // Return user's chats
      const chats = await db.chat.findMany({
        where: {
          userId: session.user.id,
        },
        orderBy: {
          updatedAt: "desc",
        },
        take: 50,
      });

      return Response.json(chats);
    }

    // Get messages for a specific chat
    const chat = await db.chat.findUnique({
      where: {
        id: chatId,
        userId: session.user.id,
      },
      include: {
        messages: {
          orderBy: {
            createdAt: "asc",
          },
        },
      },
    });

    if (!chat) {
      return new Response("Chat not found", { status: 404 });
    }

    return Response.json(chat);
  } catch (error) {
    console.error("Chat GET Error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}

// Delete chat
export async function DELETE(req: Request) {
  try {
    const session = await auth();

    if (!session?.user) {
      return new Response("Unauthorized", { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const chatId = searchParams.get("chatId");

    if (!chatId) {
      return new Response("Chat ID required", { status: 400 });
    }

    const chat = await db.chat.findUnique({
      where: {
        id: chatId,
      },
    });

    if (!chat || chat.userId !== session.user.id) {
      return new Response("Forbidden", { status: 403 });
    }

    await db.chat.delete({
      where: {
        id: chatId,
      },
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Chat DELETE Error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
