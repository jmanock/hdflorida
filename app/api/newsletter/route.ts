import { mkdir, appendFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function csvEscape(value: string) {
  return `"${value.replace(/"/g, '""')}"`;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { email?: string; source?: string };
    const email = body.email?.trim().toLowerCase() ?? "";
    const source = body.source?.trim() || "hoteldealsflorida.org";

    if (!EMAIL_PATTERN.test(email)) {
      return NextResponse.json({ ok: false, error: "Valid email is required" }, { status: 400 });
    }

    const createdAt = new Date().toISOString();
    const leadsDir = path.join(process.cwd(), ".data");
    const leadsPath = path.join(leadsDir, "hotel-newsletter-signups.csv");

    await mkdir(leadsDir, { recursive: true });
    await appendFile(
      leadsPath,
      `${csvEscape(email)},${csvEscape(source)},${csvEscape(createdAt)}\n`,
      "utf8"
    );

    return NextResponse.json({ ok: true, email, source, createdAt });
  } catch {
    return NextResponse.json({ ok: false, error: "Unable to save signup" }, { status: 500 });
  }
}
