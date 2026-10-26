import { NextRequest, NextResponse } from "next/server";

const DIFY_API_KEY = process.env.DIFY_API_KEY || "app-2ZoX3zqys8MzVj3MysUxauaH";
const DIFY_API_URL = process.env.DIFY_API_URL || "https://api.dify.ai/v1";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { query, conversation_id, user } = body;

    if (!query || typeof query !== "string" || !query.trim()) {
      return NextResponse.json({ error: "Query is required" }, { status: 400 });
    }

    const response = await fetch(`${DIFY_API_URL}/chat-messages`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${DIFY_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs: {},
        query: query.trim(),
        response_mode: "blocking",
        user: user || "rcs-web-visitor",
        conversation_id: conversation_id || "",
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Dify API error:", response.status, errorData);
      return NextResponse.json(
        { error: errorData.message || `Dify API error: ${response.status}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json({
      answer: data.answer,
      conversation_id: data.conversation_id,
      created_at: data.created_at,
    });
  } catch (err: unknown) {
    console.error("Chat API route error:", err);
    return NextResponse.json(
      { error: "Failed to connect to chatbot service" },
      { status: 500 }
    );
  }
}
