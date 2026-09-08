import { NextResponse } from "next/server";
import { getCurrentAdmin } from "@/lib/auth";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

export async function POST(request: Request) {
  try {
    const admin = await getCurrentAdmin();
    if (!admin) {
      return NextResponse.json({ error: "Akses tidak diizinkan." }, { status: 401 });
    }

    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "Tidak ada file yang diunggah." }, { status: 400 });
    }

    // Validate type
    const validMimes = ["image/jpeg", "image/png", "image/webp", "image/jpg"];
    if (!validMimes.includes(file.type)) {
      return NextResponse.json(
        { error: "Format file tidak didukung. Harap gunakan JPEG, PNG, atau WebP." },
        { status: 400 }
      );
    }

    // Max 10 MB
    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json(
        { error: "Ukuran file terlalu besar. Maksimal 10MB." },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Sanitize filename
    const ext = path.extname(file.name) || ".jpg";
    const cleanName = file.name
      .replace(ext, "")
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "-")
      .slice(0, 40);
    const uniqueName = `${Date.now()}-${cleanName}${ext}`;

    const uploadDir = path.join(process.cwd(), "public", "uploads");
    await mkdir(uploadDir, { recursive: true });

    const filePath = path.join(uploadDir, uniqueName);
    await writeFile(filePath, buffer);

    const publicUrl = `/uploads/${uniqueName}`;

    return NextResponse.json({
      success: true,
      url: publicUrl,
      fileName: uniqueName,
    });
  } catch (error) {
    console.error("POST /api/upload error:", error);
    return NextResponse.json({ error: "Gagal mengunggah gambar." }, { status: 500 });
  }
}