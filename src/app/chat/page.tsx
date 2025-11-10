import { ChatInterface } from "@/components/chat/chat-interface";
import { auth } from "@/server/auth";
import { redirect } from "next/navigation";

export default async function ChatPage() {
  const session = await auth();

  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <div className="container mx-auto max-w-4xl h-screen">
      <div className="flex flex-col h-full">
        <header className="border-b p-4 bg-gradient-to-r from-blue-50 to-orange-50">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Aruba Relocation Assistant</h1>
              <p className="text-sm text-muted-foreground">
                Get instant answers to your relocation questions
              </p>
            </div>
            <div className="text-sm text-muted-foreground">
              {session.user?.email}
            </div>
          </div>
        </header>
        <ChatInterface />
      </div>
    </div>
  );
}
