import React from "react";
import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import { ProjectForm } from "@/components/admin/project-form";

interface EditPageProps {
  params: { id: string };
}

export const revalidate = 0;

export default async function AdminProjectEditPage({ params }: EditPageProps) {
  const projectId = parseInt(params.id, 10);
  if (isNaN(projectId)) notFound();

  const project = await prisma.project.findUnique({
    where: { id: projectId },
    include: {
      images: {
        orderBy: { sortOrder: "asc" },
      },
    },
  });

  if (!project) notFound();

  return <ProjectForm initialData={project as any} isEdit={true} />;
}