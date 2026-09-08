import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getCurrentAdmin } from "@/lib/auth";
import { slugify } from "@/lib/utils";
import { z } from "zod";

const createProjectSchema = z.object({
  title: z.string().min(3, "Judul proyek minimal 3 karakter"),
  slug: z.string().optional(),
  category: z.string().min(2, "Kategori harus dipilih"),
  location: z.string().optional().nullable(),
  client: z.string().optional().nullable(),
  capacity: z.string().optional().nullable(),
  year: z.coerce.number().int().min(1990).max(2100).optional().nullable(),
  status: z.enum(["Perencanaan", "Berjalan", "Selesai"]).default("Selesai"),
  isFeatured: z.boolean().default(false),
  coverImage: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  images: z.array(z.object({
    imageUrl: z.string().min(1),
    caption: z.string().optional().nullable(),
    sortOrder: z.number().int().optional().default(0),
  })).optional(),
});

// GET: Public list of projects
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const featured = searchParams.get("featured");
    const search = searchParams.get("search");
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "12", 10);
    const skip = (page - 1) * limit;

    const where: any = {};

    if (category && category !== "Semua") {
      where.category = { contains: category };
    }

    if (featured === "true") {
      where.isFeatured = true;
    }

    if (search) {
      where.OR = [
        { title: { contains: search } },
        { location: { contains: search } },
        { client: { contains: search } },
      ];
    }

    const [total, projects] = await Promise.all([
      prisma.project.count({ where }),
      prisma.project.findMany({
        where,
        include: {
          images: {
            orderBy: { sortOrder: "asc" },
          },
        },
        orderBy: [{ isFeatured: "desc" }, { year: "desc" }, { createdAt: "desc" }],
        skip,
        take: limit,
      }),
    ]);

    return NextResponse.json({
      success: true,
      projects,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    console.error("GET /api/projects error:", error);
    return NextResponse.json({ error: "Gagal mengambil daftar proyek." }, { status: 500 });
  }
}

// POST: Create project (Admin Only)
export async function POST(request: Request) {
  try {
    const admin = await getCurrentAdmin();
    if (!admin) {
      return NextResponse.json({ error: "Akses tidak diizinkan. Silakan login terlebih dahulu." }, { status: 401 });
    }

    const body = await request.json();
    const parsed = createProjectSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0].message }, { status: 400 });
    }

    const data = parsed.data;

    // Generate or format slug
    let baseSlug = data.slug ? slugify(data.slug) : slugify(data.title);
    if (!baseSlug) baseSlug = `proyek-${Date.now()}`;

    // Ensure slug uniqueness
    let finalSlug = baseSlug;
    let counter = 1;
    while (await prisma.project.findUnique({ where: { slug: finalSlug } })) {
      finalSlug = `${baseSlug}-${counter}`;
      counter++;
    }

    const { images, ...projectFields } = data;

    const newProject = await prisma.project.create({
      data: {
        ...projectFields,
        slug: finalSlug,
        images: images && images.length > 0 ? {
          create: images.map((img, idx) => ({
            imageUrl: img.imageUrl,
            caption: img.caption || null,
            sortOrder: img.sortOrder ?? idx,
          })),
        } : undefined,
      },
      include: {
        images: true,
      },
    });

    return NextResponse.json({ success: true, project: newProject }, { status: 201 });
  } catch (error) {
    console.error("POST /api/projects error:", error);
    return NextResponse.json({ error: "Gagal menambahkan proyek baru." }, { status: 500 });
  }
}