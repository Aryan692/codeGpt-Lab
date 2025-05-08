// import { callOpenRouterAPI } from "@/lib/openrouter";
import { callOpenRouterAPI } from "@/lib/openRouter";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { messages } = await req.json();
  const reply = await callOpenRouterAPI(messages);
  return NextResponse.json({ reply });
}