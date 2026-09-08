import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getCurrentAdmin } from "@/lib/auth";
import { z } from "zod";

// Basic in-memory rate limiting: IP -> [timestamps]
const rateLimitMap = new Map<string, number[]>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000; // 10 minutes
  const maxRequests = 10;

  const timestamps = rateLimitMap.get(ip) || [];
  const validTimestamps = timestamps.filter((t) => now - t < windowMs);

  if (validTimestamps.length >= maxRequests) {
    return false;
  }

  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);
  return true;
}

const contactSchema = z.object({
  name: z.string().min(2, "Nama minimal 2 karakter"),
  email: z.string().email("Format email tidak valid"),
  phone: z.string().optional().nullable(),
  subject: z.string().optional().nullable(),
  message: z.string().min(5, "Pesan minimal 5 karakter"),
});

// POST: Public submission of contact inquiries
export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "unknown-client";
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Terlalu banyak pengiriman pesan. Silakan coba lagi dalam beberapa menit." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0].message }, { status: 400 });
    }

    const created = await prisma.contactMessage.create({
      data: {
        name: parsed.data.name,
        email: parsed.data.email,
        phone: parsed.data.phone || null,
        subject: parsed.data.subject || null,
        message: parsed.data.message,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Pesan berhasil dikirimkan.",
      id: created.id,
    });
  } catch (error) {
    console.error("POST /api/contact error:", error);
    return NextResponse.json({ error: "Gagal menyimpan pesan kontak." }, { status: 500 });
  }
}

// GET: Admin view all contact messages
export async function GET() {
  try {
    const admin = await getCurrentAdmin();
    if (!admin) {
      return NextResponse.json({ error: "Akses tidak diizinkan." }, { status: 401 });
    }

    const messages = await prisma.contactMessage.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ success: true, messages });
  } catch (error) {
    console.error("GET /api/contact error:", error);
    return NextResponse.json({ error: "Gagal memuat pesan masuk." }, { status: 500 });
  }
}