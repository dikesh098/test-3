"use client";

import { useEffect, useRef, useState } from "react";
import { Bot, X, Send, Loader2 } from "lucide-react";
import { CONTACT, whatsappLink } from "@/lib/constants";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const GREETING: ChatMessage = {
  role: "assistant",
  content:
    "Hi! I'm the eSakha Assistant. Ask me about any service — GST, websites, social media, you name it — or let me know what you need help with and I'll point you in the right direction.",
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: ChatMessage = { role: "user", content: text };
    const nextMessages = [...messages, userMsg];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages.slice(-16) }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply || "Sorry, something went wrong. Please try again." },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I couldn't reach the server just now. Please try again, or message us on WhatsApp.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open eSakha AI Assistant"
        className="fixed bottom-[100px] right-7 z-[150] flex h-[58px] w-[58px] items-center justify-center rounded-full bg-brand text-white shadow-[0_4px_24px_rgba(15,122,74,0.4)] transition hover:scale-110"
      >
        {open ? <X size={24} /> : <Bot size={26} />}
      </button>

      {open && (
        <div className="fixed bottom-[168px] right-5 z-[160] flex h-[min(70vh,520px)] w-[min(92vw,380px)] flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-2xl">
          <div className="flex items-center gap-3 bg-gradient-to-br from-brand-dark to-brand px-5 py-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white">
              <Bot size={18} />
            </div>
            <div>
              <div className="font-display text-sm font-bold text-white">eSakha Assistant</div>
              <div className="text-[0.7rem] text-white/70">Usually replies instantly</div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="ml-auto flex h-7 w-7 items-center justify-center rounded-full text-white/80 hover:bg-white/15"
            >
              <X size={16} />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-surface-2 px-4 py-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-[0.85rem] leading-relaxed ${
                    m.role === "user"
                      ? "bg-brand text-white"
                      : "border border-line bg-white text-ink"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="flex items-center gap-2 rounded-2xl border border-line bg-white px-4 py-2.5 text-ink-3">
                  <Loader2 size={14} className="animate-spin" /> Typing...
                </div>
              </div>
            )}
          </div>

          <div className="border-t border-line bg-white p-3">
            <div className="flex items-end gap-2">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about a service, pricing, or documents..."
                rows={1}
                className="field-input max-h-24 min-h-[42px] flex-1 resize-none py-2.5"
              />
              <button
                onClick={sendMessage}
                disabled={loading || !input.trim()}
                aria-label="Send message"
                className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-xl bg-brand text-white transition hover:bg-brand-dark disabled:opacity-50"
              >
                <Send size={17} />
              </button>
            </div>
            <a
              href={whatsappLink("Hi, I was chatting with the AI assistant and need more help.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-center text-[0.72rem] text-ink-3 hover:text-brand"
            >
              Prefer a human? Chat with us on WhatsApp ({CONTACT.phoneDisplay})
            </a>
          </div>
        </div>
      )}
    </>
  );
}
