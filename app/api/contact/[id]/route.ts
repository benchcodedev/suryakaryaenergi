import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getCurrentAdmin } from "@/lib/auth";

// PATCH: Toggle or set read status
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const admin = await getCurrentAdmin();
    if (!admin) {
      return NextResponse.json({ error: "Akses tidak diizinkan." }, { status: 401 });
    }

    const messageId = parseInt(params.id, 10);
    if (isNaN(messageId)) {
      return NextResponse.json({ error: "ID pesan tidak valid." }, { status: 400 });
    }

    const body = await request.json();
    const isRead = typeof body.isRead === "boolean" ? body.isRead : true;

    const updated = await prisma.contactMessage.update({
      where: { id: messageId },
      data: { isRead },
    });

    return NextResponse.json({ success: true, message: updated });
  } catch (error) {
    console.error("PATCH /api/contact/[id] error:", error);
    return NextResponse.json({ error: "Gagal memperbarui status pesan." }, { status: 500 });
  }
}

// DELETE: Delete single message
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const admin = await getCurrentAdmin();
    if (!admin) {
      return NextResponse.json({ error: "Akses tidak diizinkan." }, { status: 401 });
    }

    const messageId = parseInt(params.id, 10);
    if (isNaN(messageId)) {
      return NextResponse.json({ error: "ID pesan tidak valid." }, { status: 400 });
    }

    await prisma.contactMessage.delete({
      where: { id: messageId },
    });

    return NextResponse.json({ success: true, message: "Pesan berhasil dihapus." });
  } catch (error) {
    console.error("DELETE /api/contact/[id] error:", error);
    return NextResponse.json({ error: "Gagal menghapus pesan." }, { status: 500 });
  }
}