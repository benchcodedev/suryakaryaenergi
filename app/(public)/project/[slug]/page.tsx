import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProjectGallery } from "@/components/sections/project-gallery";
import { ProjectCard, ProjectCardData } from "@/components/shared/project-card";
import {
  ChevronRight,
  MapPin,
  Zap,
  Calendar,
  Building,
  CheckCircle,
  PhoneCall,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

interface PageProps {
  params: { slug: string };
}

export const revalidate = 60;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = await prisma.project.findUnique({
    where: { slug: params.slug },
  });

  if (!project) {
    return { title: "Proyek Tidak Ditemukan" };
  }

  return {
    title: `${project.title} — Spesifikasi Proyek`,
    description:
      project.description?.slice(0, 160) ||
      `Spesifikasi teknis proyek ${project.title} oleh PT Surya Karya Energi.`,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const project = await prisma.project.findUnique({
    where: { slug: params.slug },
    include: {
      images: {
        orderBy: { sortOrder: "asc" },
      },
    },
  });

  if (!project) notFound();

  const relatedProjects = (await prisma.project.findMany({
    where: { id: { not: project.id } },
    take: 3,
    orderBy: { createdAt: "desc" },
  })) as ProjectCardData[];

  const statusVariantMap = {
    Perencanaan: "warning",
    Berjalan: "gold",
    Selesai: "success",
  } as const;

  return (
    <div className="flex flex-col">
      {/* 1. CINEMATIC HERO BANNER */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-brown-900 text-white pt-28 pb-16">
        <div className="absolute inset-0 z-0">
          <Image
            src={project.coverImage || "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=2000&q=80"}
            alt={project.title}
            fill
            priority
            className="object-cover brightness-[0.68]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brown-950/85 via-brown-900/65 to-brown-950/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-brown-950/90 via-transparent to-brown-950/40" />
        </div>

        <div className="container relative z-10 max-w-4xl space-y-4">
          <nav className="flex items-center gap-2 text-xs text-white/70 mb-3 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">
              Beranda
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/project" className="hover:text-white transition-colors">
              Portofolio Proyek
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gold-400 font-semibold truncate max-w-xs sm:max-w-md">
              {project.title}
            </span>
          </nav>

          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-block text-xs font-bold px-3.5 py-1.5 rounded-full bg-gold-500/20 text-gold-300 border border-gold-500/40 backdrop-blur-md">
              {project.category}
            </span>
            <Badge variant={statusVariantMap[project.status] || "default"} className="font-semibold text-xs py-1 px-3">
              Status: {project.status}
            </Badge>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-heading text-white leading-tight">
            {project.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm text-white/80 pt-2">
            {project.location && (
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold-400" />
                {project.location}
              </span>
            )}
            {project.capacity && (
              <span className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-gold-400" />
                Kapasitas: <strong className="text-white">{project.capacity}</strong>
              </span>
            )}
            {project.year && (
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gold-400" />
                Tahun: {project.year}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTENT (GALLERY & SPECS) */}
      <section className="py-16 sm:py-24 bg-white border-b border-brown-200/60">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Interactive Gallery & Narrative */}
            <div className="lg:col-span-8 space-y-10">
              <ProjectGallery
                coverImage={project.coverImage}
                title={project.title}
                images={project.images}
              />

              <div className="space-y-5 pt-6 border-t border-brown-200/60">
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-brown-900 heading-underline">
                  Uraian Rekayasa & Lingkup Pekerjaan
                </h2>
                <div className="text-brown-700 text-sm sm:text-base leading-relaxed whitespace-pre-line pt-3">
                  {project.description || "Belum ada deskripsi rinci untuk proyek ini."}
                </div>
              </div>
            </div>

            {/* Right: Modern Specifications Card & CTA */}
            <div className="lg:col-span-4 space-y-8">
              <div className="rounded-3xl border border-brown-200/80 bg-surface p-8 space-y-6 shadow-card">
                <h3 className="font-heading font-bold text-lg text-brown-900 pb-3 border-b border-brown-200/60">
                  Spesifikasi Teknis
                </h3>

                <dl className="space-y-4 text-xs sm:text-sm">
                  <div className="pb-3 border-b border-brown-200/40">
                    <dt className="text-brown-500 text-xs">Kategori Solusi</dt>
                    <dd className="font-bold text-brown-900 mt-1">{project.category}</dd>
                  </div>
                  <div className="pb-3 border-b border-brown-200/40">
                    <dt className="text-brown-500 text-xs">Kapasitas Pembangkit</dt>
                    <dd className="font-bold text-gold-600 text-base mt-1">{project.capacity || "—"}</dd>
                  </div>
                  <div className="pb-3 border-b border-brown-200/40">
                    <dt className="text-brown-500 text-xs">Klien / Pemilik Fasilitas</dt>
                    <dd className="font-semibold text-brown-900 mt-1">{project.client || "—"}</dd>
                  </div>
                  <div className="pb-3 border-b border-brown-200/40">
                    <dt className="text-brown-500 text-xs">Lokasi Pengerjaan</dt>
                    <dd className="font-semibold text-brown-900 mt-1">{project.location || "—"}</dd>
                  </div>
                  <div className="pb-3 border-b border-brown-200/40">
                    <dt className="text-brown-500 text-xs">Tahun Penyelesaian</dt>
                    <dd className="font-semibold text-brown-900 mt-1">{project.year || "—"}</dd>
                  </div>
                  <div>
                    <dt className="text-brown-500 text-xs">Status Pelaksanaan</dt>
                    <dd className="font-semibold text-brown-900 mt-1">
                      <span className="inline-flex items-center gap-1.5 text-emerald-700 font-bold">
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                        {project.status}
                      </span>
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Consultation Card */}
              <div className="rounded-3xl border border-brown-200/80 bg-brown-900 text-white p-8 space-y-5 shadow-xl relative overflow-hidden">
                <div className="space-y-2">
                  <h4 className="font-heading font-bold text-xl text-white">
                    Tertarik Proyek Serupa?
                  </h4>
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                    Konsultasikan evaluasi struktur atap pabrik, studi kelayakan, atau desain gardu listrik bersama tim ahli kami.
                  </p>
                </div>
                <Button asChild size="lg" className="w-full bg-gold-500 hover:bg-gold-600 text-white font-bold rounded-xl shadow-glow-gold">
                  <Link
                    href={`/contact-us?project=${encodeURIComponent(project.title)}`}
                    className="flex items-center justify-center gap-2"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>Diskusikan Proyek Serupa</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. RELATED PROJECTS */}
      {relatedProjects.length > 0 && (
        <section className="py-20 bg-surface">
          <div className="container">
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-brown-900 heading-underline">
                Portofolio Rekayasa Terkait
              </h3>
              <Button asChild variant="outline" className="rounded-xl border-brown-700">
                <Link href="/project">Lihat Seluruh Portofolio</Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map((item) => (
                <ProjectCard key={item.id} project={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}