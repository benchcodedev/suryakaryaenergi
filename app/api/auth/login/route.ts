import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { verifyPassword, signAdminToken, AUTH_COOKIE_NAME } from "@/lib/auth";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = loginSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Format email atau password tidak valid." }, { status: 400 });
    }

    const { email, password } = parsed.data;

    const user = await prisma.adminUser.findUnique({
      where: { email: email.toLowerCase().trim() },
    });

    if (!user) {
      return NextResponse.json({ error: "Kredensial login tidak cocok." }, { status: 401 });
    }

    const isMatch = await verifyPassword(password, user.passwordHash);
    if (!isMatch) {
      return NextResponse.json({ error: "Kredensial login tidak cocok." }, { status: 401 });
    }

    const token = signAdminToken({
      id: user.id,
      name: user.name,
      email: user.email,
    });

    const response = NextResponse.json({
      success: true,
      user: { id: user.id, name: user.name, email: user.email },
    });

    response.cookies.set({
      name: AUTH_COOKIE_NAME,
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60, // 7 days
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "Terjadi kesalahan server saat login." }, { status: 500 });
  }
}