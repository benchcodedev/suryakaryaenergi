import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getCurrentAdmin } from "@/lib/auth";
import { slugify } from "@/lib/utils";
import { z } from "zod";

const updateProjectSchema = z.object({
  title: z.string().min(3).optional(),
  slug: z.string().optional(),
  category: z.string().min(2).optional(),
  location: z.string().optional().nullable(),
  client: z.string().optional().nullable(),
  capacity: z.string().optional().nullable(),
  year: z.coerce.number().int().optional().nullable(),
  status: z.enum(["Perencanaan", "Berjalan", "Selesai"]).optional(),
  isFeatured: z.boolean().optional(),
  coverImage: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  images: z.array(z.object({
    id: z.number().optional(),
    imageUrl: z.string().min(1),
    caption: z.string().optional().nullable(),
    sortOrder: z.number().int().optional().default(0),
  })).optional(),
});

// GET: Single project detail
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id, 10);
    const where = isNaN(id) ? { slug: params.id } : { id };

    const project = await prisma.project.findUnique({
      where,
      include: {
        images: {
          orderBy: { sortOrder: "asc" },
        },
      },
    });

    if (!project) {
      return NextResponse.json({ error: "Proyek tidak ditemukan." }, { status: 404 });
    }

    return NextResponse.json({ success: true, project });
  } catch (error) {
    console.error("GET /api/projects/[id] error:", error);
    return NextResponse.json({ error: "Gagal memuat proyek." }, { status: 500 });
  }
}

// PUT: Update project (Admin Only)
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const admin = await getCurrentAdmin();
    if (!admin) {
      return NextResponse.json({ error: "Akses tidak diizinkan." }, { status: 401 });
    }

    const projectId = parseInt(params.id, 10);
    if (isNaN(projectId)) {
      return NextResponse.json({ error: "ID proyek tidak valid." }, { status: 400 });
    }

    const body = await request.json();
    const parsed = updateProjectSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0].message }, { status: 400 });
    }

    const data = parsed.data;

    // Slug update verification if changed
    let slugToUpdate = data.slug ? slugify(data.slug) : undefined;
    if (slugToUpdate) {
      const existing = await prisma.project.findFirst({
        where: {
          slug: slugToUpdate,
          id: { not: projectId },
        },
      });
      if (existing) {
        slugToUpdate = `${slugToUpdate}-${Date.now().toString().slice(-4)}`;
      }
    }

    const { images, ...fields } = data;

    const updated = await prisma.$transaction(async (tx) => {
      // Update core project fields
      const p = await tx.project.update({
        where: { id: projectId },
        data: {
          ...fields,
          ...(slugToUpdate ? { slug: slugToUpdate } : {}),
        },
      });

      // If images are provided in the payload, recreate them
      if (images !== undefined) {
        await tx.projectImage.deleteMany({ where: { projectId } });
        if (images.length > 0) {
          await tx.projectImage.createMany({
            data: images.map((img, idx) => ({
              projectId,
              imageUrl: img.imageUrl,
              caption: img.caption || null,
              sortOrder: img.sortOrder ?? idx,
            })),
          });
        }
      }

      return p;
    });

    const refreshed = await prisma.project.findUnique({
      where: { id: projectId },
      include: { images: true },
    });

    return NextResponse.json({ success: true, project: refreshed });
  } catch (error) {
    console.error("PUT /api/projects/[id] error:", error);
    return NextResponse.json({ error: "Gagal memperbarui data proyek." }, { status: 500 });
  }
}

// DELETE: Delete project (Admin Only)
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const admin = await getCurrentAdmin();
    if (!admin) {
      return NextResponse.json({ error: "Akses tidak diizinkan." }, { status: 401 });
    }

    const projectId = parseInt(params.id, 10);
    if (isNaN(projectId)) {
      return NextResponse.json({ error: "ID proyek tidak valid." }, { status: 400 });
    }

    await prisma.project.delete({
      where: { id: projectId },
    });

    return NextResponse.json({ success: true, message: "Proyek berhasil dihapus." });
  } catch (error) {
    console.error("DELETE /api/projects/[id] error:", error);
    return NextResponse.json({ error: "Gagal menghapus proyek." }, { status: 500 });
  }
}