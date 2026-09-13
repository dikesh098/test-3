import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";
import { buildSystemPrompt, SAVE_LEAD_TOOL } from "@/lib/ai/systemPrompt";

export const runtime = "nodejs";

const MAX_HISTORY_MESSAGES = 16;
const MAX_MESSAGE_LENGTH = 1500;

interface ClientMessage {
  role: "user" | "assistant";
  content: string;
}

function getOpenAiClient(): OpenAI | null {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return null;
  return new OpenAI({ apiKey });
}

async function saveLead(args: {
  name: string;
  phone: string;
  email?: string;
  service?: string;
  message?: string;
}) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return { ok: false, reason: "Supabase not configured" };

  const supabase = createClient(url, key);
  const { error } = await supabase.from("leads").insert({
    name: args.name,
    phone: args.phone,
    email: args.email || null,
    service: args.service || null,
    message: args.message || null,
    source: "ai_assistant",
  });

  if (error) return { ok: false, reason: error.message };
  return { ok: true };
}

export async function POST(req: NextRequest) {
  const openai = getOpenAiClient();
  if (!openai) {
    return NextResponse.json(
      {
        reply:
          "The AI assistant isn't configured yet — add OPENAI_API_KEY to your environment to enable it. In the meantime, you can reach the team directly on WhatsApp!",
        configured: false,
      },
      { status: 200 }
    );
  }

  let body: { messages?: ClientMessage[] };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const incoming = Array.isArray(body.messages) ? body.messages : [];
  const trimmed = incoming
    .slice(-MAX_HISTORY_MESSAGES)
    .filter((m) => m && typeof m.content === "string" && (m.role === "user" || m.role === "assistant"))
    .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_MESSAGE_LENGTH) }));

  if (trimmed.length === 0) {
    return NextResponse.json({ error: "No messages provided" }, { status: 400 });
  }

  const model = process.env.OPENAI_MODEL || "gpt-4o-mini";

  try {
    const baseMessages: OpenAI.Chat.ChatCompletionMessageParam[] = [
      { role: "system", content: buildSystemPrompt() },
      ...trimmed,
    ];

    const first = await openai.chat.completions.create({
      model,
      messages: baseMessages,
      tools: [SAVE_LEAD_TOOL],
      tool_choice: "auto",
      temperature: 0.4,
      max_tokens: 400,
    });

    const choice = first.choices[0];
    const toolCalls = choice.message.tool_calls;

    if (toolCalls && toolCalls.length > 0) {
      const followUpMessages: OpenAI.Chat.ChatCompletionMessageParam[] = [
        ...baseMessages,
        choice.message,
      ];

      for (const call of toolCalls) {
        if (call.function.name === "save_lead") {
          let args: { name: string; phone: string; email?: string; service?: string; message?: string };
          try {
            args = JSON.parse(call.function.arguments);
          } catch {
            args = { name: "", phone: "" };
          }
          const result = await saveLead(args);
          followUpMessages.push({
            role: "tool",
            tool_call_id: call.id,
            content: JSON.stringify(result),
          });
        }
      }

      const second = await openai.chat.completions.create({
        model,
        messages: followUpMessages,
        temperature: 0.4,
        max_tokens: 300,
      });

      const finalReply =
        second.choices[0]?.message?.content?.trim() ||
        "Thanks! I've passed your details to the eSakha team — they'll reach out shortly.";

      return NextResponse.json({ reply: finalReply, leadSaved: true });
    }

    const reply = choice.message.content?.trim() || "Sorry, could you rephrase that?";
    return NextResponse.json({ reply });
  } catch (err) {
    console.error("[eSakha chat] OpenAI error:", err);
    return NextResponse.json(
      {
        reply:
          "I'm having trouble responding right now. Please try again in a moment, or reach the team directly on WhatsApp.",
      },
      { status: 200 }
    );
  }
}
