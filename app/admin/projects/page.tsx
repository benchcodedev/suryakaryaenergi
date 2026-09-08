import React from "react";
import prisma from "@/lib/prisma";
import { ProjectsTable } from "@/components/admin/projects-table";

export const revalidate = 0; // Fresh in admin

export default async function AdminProjectsPage() {
  const projects = await prisma.project.findMany({
    orderBy: [{ createdAt: "desc" }],
  });

  return <ProjectsTable initialProjects={projects as any} />;
}