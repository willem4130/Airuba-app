"use client";

import { useChat } from "@ai-sdk/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Send, Loader2 } from "lucide-react";
import { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface ChatInterfaceProps {
  chatId?: string;
}

export function ChatInterface({ chatId }: ChatInterfaceProps) {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    error,
    setInput,
  } = useChat({
    api: "/api/chat",
    body: {
      chatId,
    },
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col">
      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && (
          <div className="flex h-full items-center justify-center">
            <div className="text-center max-w-2xl px-4">
              <h2 className="text-3xl font-semibold mb-2">
                Welcome to Your Aruba Relocation Assistant
              </h2>
              <p className="text-muted-foreground mb-8">
                I&apos;m here to help answer your questions about moving to
                Aruba. Ask me anything about visas, housing, employment, or
                island life!
              </p>
              <div className="grid gap-3 text-left">
                <button
                  onClick={() =>
                    setInput(
                      "What visa requirements do I need to move to Aruba?"
                    )
                  }
                  className="p-4 text-sm border rounded-lg hover:bg-accent text-left transition-colors"
                >
                  📋 What visa requirements do I need to move to Aruba?
                </button>
                <button
                  onClick={() =>
                    setInput("What's the cost of living in Aruba?")
                  }
                  className="p-4 text-sm border rounded-lg hover:bg-accent text-left transition-colors"
                >
                  💰 What&apos;s the cost of living in Aruba?
                </button>
                <button
                  onClick={() => setInput("How do I find housing in Aruba?")}
                  className="p-4 text-sm border rounded-lg hover:bg-accent text-left transition-colors"
                >
                  🏠 How do I find housing in Aruba?
                </button>
                <button
                  onClick={() =>
                    setInput(
                      "What are the job opportunities for expats in Aruba?"
                    )
                  }
                  className="p-4 text-sm border rounded-lg hover:bg-accent text-left transition-colors"
                >
                  💼 What are the job opportunities for expats in Aruba?
                </button>
              </div>
            </div>
          </div>
        )}

        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <Card
              className={`max-w-[80%] p-4 ${
                message.role === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted"
              }`}
            >
              <div className="prose prose-sm dark:prose-invert max-w-none">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {message.content}
                </ReactMarkdown>
              </div>
            </Card>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <Card className="max-w-[80%] p-4 bg-muted">
              <Loader2 className="h-4 w-4 animate-spin" />
            </Card>
          </div>
        )}

        {error && (
          <div className="flex justify-center">
            <Card className="max-w-[80%] p-4 bg-destructive/10 border-destructive">
              <p className="text-sm text-destructive">Error: {error.message}</p>
            </Card>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Form */}
      <div className="border-t p-4">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Type your message..."
            disabled={isLoading}
            className="flex-1"
          />
          <Button type="submit" disabled={isLoading || !input.trim()}>
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}
