import { NextRequest, NextResponse } from "next/server";

type Lead = {
  name?: string;
  email?: string;
  segment?: string;
  volume?: string;
  pain?: string;
};

function isEmail(value: unknown) {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: NextRequest) {
  let body: Lead;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!body.name || !isEmail(body.email)) {
    return NextResponse.json({ error: "Name and valid email are required" }, { status: 400 });
  }

  const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
  const telegramChatId = process.env.TELEGRAM_CHAT_ID;

  if (!telegramToken || !telegramChatId) {
    return NextResponse.json(
      {
        error: "No lead destination configured yet",
        nextAction: "Set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID or use mailto fallback",
      },
      { status: 503 }
    );
  }

  const text = [
    "Yeni TeklifJet pilot lead 🚀",
    `Revenue at risk: ₺499 pilot`,
    `Next action: 15 dk teklif örneği çıkar`,
    `Name: ${body.name}`,
    `Email: ${body.email}`,
    `Segment: ${body.segment || "-"}`,
    `Volume: ${body.volume || "-"}`,
    `Pain: ${body.pain || "-"}`,
  ].join("\n");

  const response = await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ chat_id: telegramChatId, text }),
  });

  if (!response.ok) {
    return NextResponse.json({ error: "Telegram delivery failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
