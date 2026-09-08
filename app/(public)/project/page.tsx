import { FALLBACK_PROJECTS } from "@/lib/fallback-data";
import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import prisma from "@/lib/prisma";
import { ChevronRight } from "lucide-react";
import { ProjectCatalog } from "@/components/sections/project-catalog";
import { ProjectCardData } from "@/components/shared/project-card";

export const metadata: Metadata = {
  title: "Portofolio Proyek Rekayasa & EPC Energi",
  description: "Daftar rekam jejak proyek PLTS Atap, pembangkit surya utilitas ground-mounted, gardu induk, dan pemeliharaan O&M PT Surya Karya Energi.",
};

export const revalidate = 60;

async function getAllProjects() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: [{ isFeatured: "desc" }, { year: "desc" }, { createdAt: "desc" }],
    });
    if (projects && projects.length > 0) return projects as ProjectCardData[];
    return FALLBACK_PROJECTS as ProjectCardData[];
  } catch {
    return FALLBACK_PROJECTS as ProjectCardData[];
  }
}

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <div className="flex flex-col">
      {/* 1. CINEMATIC HERO BANNER */}
      <section className="relative min-h-[50vh] lg:min-h-[55vh] flex items-center justify-center overflow-hidden bg-brown-900 text-white pt-28 pb-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=2000&q=80"
            alt="Project Portfolio"
            fill
            priority
            className="object-cover brightness-[0.68]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brown-950/85 via-brown-900/65 to-brown-950/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-brown-950/90 via-transparent to-brown-950/40" />
        </div>

        <div className="container relative z-10 text-center max-w-4xl mx-auto space-y-4">
          <nav className="flex items-center justify-center gap-2 text-xs text-white/70 mb-2">
            <Link href="/" className="hover:text-white transition-colors">
              Beranda
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gold-400 font-semibold">Portofolio Proyek</span>
          </nav>

          <span className="inline-block text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-gold-500/20 text-gold-300 border border-gold-500/40 backdrop-blur-md">
            Rekam Jejak Rekayasa & Konstruksi
          </span>

          <h1 className="text-3xl sm:text-5xl font-bold font-heading text-white leading-tight">
            Portofolio Rekayasa & Solusi Energi
          </h1>

          <p className="text-base sm:text-lg text-white/85 leading-relaxed max-w-2xl mx-auto font-normal">
            Jelajahi rekam jejak pembangunan pembangkit listrik tenaga surya, interkoneksi transmisi gardu induk, dan pemeliharaan O&M kami di seluruh Indonesia.
          </p>
        </div>
      </section>

      {/* 2. CATALOG & FILTERING */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container">
          <ProjectCatalog initialProjects={projects} />
        </div>
      </section>
    </div>
  );
}