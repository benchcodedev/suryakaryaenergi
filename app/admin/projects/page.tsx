import React from "react";
import prisma from "@/lib/prisma";
import { ProjectsTable } from "@/components/admin/projects-table";
import { FALLBACK_PROJECTS } from "@/lib/fallback-data";

export const revalidate = 0; // Fresh in admin

export default async function AdminProjectsPage() {
  let projects: any[] = [];

  try {
    projects = await prisma.project.findMany({
      orderBy: [{ createdAt: "desc" }],
    });
    if (projects.length === 0) {
      projects = FALLBACK_PROJECTS;
    }
  } catch (error) {
    console.warn("Database unreachable in AdminProjectsPage, using fallback:", error);
    projects = FALLBACK_PROJECTS;
  }

  return <ProjectsTable initialProjects={projects as any} />;
}
