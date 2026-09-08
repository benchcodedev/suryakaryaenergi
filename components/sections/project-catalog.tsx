"use client";

import React, { useState, useMemo } from "react";
import { ProjectCard, ProjectCardData } from "@/components/shared/project-card";
import { Input } from "@/components/ui/input";
import { Search, FolderX } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCatalogProps {
  initialProjects: ProjectCardData[];
}

export function ProjectCatalog({ initialProjects }: ProjectCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    "Semua",
    "PLTS / Solar",
    "EPC",
    "Operation & Maintenance",
  ];

  const filteredProjects = useMemo(() => {
    return initialProjects.filter((project) => {
      const matchCategory =
        selectedCategory === "Semua" ||
        project.category.toLowerCase().includes(selectedCategory.toLowerCase());

      const query = searchQuery.toLowerCase().trim();
      const matchSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        (project.location && project.location.toLowerCase().includes(query)) ||
        (project.capacity && project.capacity.toLowerCase().includes(query));

      return matchCategory && matchSearch;
    });
  }, [initialProjects, selectedCategory, searchQuery]);

  return (
    <div className="space-y-10">
      {/* Controls Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-brown-300/60">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2.5">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 border shadow-sm",
                  isSelected
                    ? "bg-gold-500 text-white border-gold-500 shadow-glow-gold scale-[1.03]"
                    : "bg-white text-brown-700 border-brown-300/80 hover:bg-brown-100/70"
                )}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Search Input with Icon */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brown-400" />
          <Input
            type="text"
            placeholder="Cari judul proyek, lokasi..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-11 h-12 rounded-xl text-xs sm:text-sm bg-white border-brown-300/80 shadow-sm focus-visible:ring-gold-500"
          />
        </div>
      </div>

      {/* Results Count & Reset */}
      <div className="flex items-center justify-between text-xs sm:text-sm text-brown-500">
        <span>Menampilkan <strong>{filteredProjects.length}</strong> dari {initialProjects.length} portofolio proyek</span>
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="text-gold-600 font-semibold hover:underline"
          >
            Hapus filter pencarian
          </button>
        )}
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-brown-300/80 bg-surface p-12 sm:p-16 text-center max-w-lg mx-auto my-12 shadow-card">
          <div className="w-16 h-16 rounded-full bg-brown-100 flex items-center justify-center text-brown-500 mx-auto mb-5">
            <FolderX className="w-8 h-8" />
          </div>
          <h3 className="font-heading font-bold text-xl text-brown-900 mb-2">
            Belum ada proyek yang cocok
          </h3>
          <p className="text-xs sm:text-sm text-brown-500 mb-6 leading-relaxed">
            Tidak ditemukan proyek pada kategori &quot;{selectedCategory}&quot; dengan kata kunci pencarian Anda.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory("Semua");
              setSearchQuery("");
            }}
            className="px-5 py-2.5 rounded-xl bg-gold-500 text-white text-xs font-bold shadow-glow-gold hover:bg-gold-600 transition-colors"
          >
            Tampilkan Semua Portofolio
          </button>
        </div>
      )}
    </div>
  );
}