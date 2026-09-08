import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { MapPin, Zap, Calendar, ArrowRight } from "lucide-react";

export interface ProjectCardData {
  id: number;
  title: string;
  slug: string;
  category: string;
  location?: string | null;
  capacity?: string | null;
  year?: number | null;
  status: "Perencanaan" | "Berjalan" | "Selesai";
  coverImage?: string | null;
  description?: string | null;
}

interface ProjectCardProps {
  project: ProjectCardData;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const statusVariantMap = {
    Perencanaan: "warning",
    Berjalan: "gold",
    Selesai: "success",
  } as const;

  const imageSrc =
    project.coverImage ||
    "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1000&q=80";

  return (
    <div className="group rounded-2xl border border-brown-200/80 bg-white overflow-hidden flex flex-col shadow-card hover-lift transition-all duration-300">
      {/* Visual Container */}
      <Link
        href={`/project/${project.slug}`}
        className="relative block aspect-[16/10] w-full overflow-hidden bg-brown-100"
      >
        <Image
          src={imageSrc}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-600 ease-out group-hover:scale-108 opacity-95 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

        {/* Floating Category Tag */}
        <div className="absolute top-3.5 left-3.5">
          <span className="inline-block text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-md bg-black/50 text-white border border-white/25 shadow-sm">
            {project.category}
          </span>
        </div>

        {/* Floating Status Tag */}
        <div className="absolute top-3.5 right-3.5">
          <Badge variant={statusVariantMap[project.status] || "default"} className="font-semibold shadow-md">
            {project.status}
          </Badge>
        </div>

        {/* Capacity overlay on bottom right of image */}
        {project.capacity && (
          <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg backdrop-blur-md bg-white/90 text-brown-900 border border-white/50 text-xs font-bold shadow-md">
            <Zap className="w-3.5 h-3.5 text-gold-500 fill-gold-500" />
            <span>{project.capacity}</span>
          </div>
        )}
      </Link>

      {/* Content Container */}
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-lg font-bold font-heading text-brown-900 line-clamp-2 leading-snug group-hover:text-gold-600 transition-colors">
            <Link href={`/project/${project.slug}`}>{project.title}</Link>
          </h3>

          {project.description && (
            <p className="mt-2.5 text-xs sm:text-sm text-brown-500 line-clamp-2 leading-relaxed">
              {project.description}
            </p>
          )}
        </div>

        <div className="mt-5 pt-4 border-t border-brown-200/60 space-y-3">
          <div className="grid grid-cols-2 gap-2 text-xs text-brown-500">
            {project.location && (
              <div className="flex items-center gap-1.5 truncate">
                <MapPin className="w-3.5 h-3.5 text-brown-400 shrink-0" />
                <span className="truncate font-medium text-brown-700">{project.location}</span>
              </div>
            )}
            {project.year && (
              <div className="flex items-center gap-1.5 truncate justify-end">
                <Calendar className="w-3.5 h-3.5 text-brown-400 shrink-0" />
                <span>Tahun: <strong className="text-brown-700">{project.year}</strong></span>
              </div>
            )}
          </div>

          <div className="pt-1">
            <Link
              href={`/project/${project.slug}`}
              className="text-xs sm:text-sm font-bold text-brown-700 group-hover:text-gold-600 inline-flex items-center gap-1.5 transition-colors"
            >
              <span>Lihat Rincian Teknis</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}