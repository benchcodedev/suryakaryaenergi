"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface GalleryImage {
  id: number;
  imageUrl: string;
  caption?: string | null;
}

interface ProjectGalleryProps {
  coverImage?: string | null;
  title: string;
  images: GalleryImage[];
}

export function ProjectGallery({ coverImage, title, images }: ProjectGalleryProps) {
  const allImages = [
    ...(coverImage ? [{ id: 0, imageUrl: coverImage, caption: "Foto Utama Dokumentasi Proyek" }] : []),
    ...images,
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  if (allImages.length === 0) {
    return (
      <div className="aspect-[16/10] w-full rounded-3xl bg-surface border border-brown-200 flex items-center justify-center text-sm text-brown-500">
        Dokumentasi visual sedang diperbarui.
      </div>
    );
  }

  const current = allImages[activeIndex] || allImages[0];

  return (
    <div className="space-y-4">
      {/* Main Image View */}
      <div className="relative aspect-[16/10] w-full rounded-3xl overflow-hidden border border-brown-200/80 bg-brown-100 shadow-2xl">
        <Image
          src={current.imageUrl}
          alt={current.caption || title}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 65vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20 pointer-events-none" />
        {current.caption && (
          <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md text-white px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium border border-white/20">
            {current.caption}
          </div>
        )}
      </div>

      {/* Thumbnail Selector */}
      {allImages.length > 1 && (
        <div className="grid grid-cols-4 sm:grid-cols-6 gap-3 pt-2">
          {allImages.map((img, idx) => (
            <button
              key={img.id}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={cn(
                "relative aspect-[16/10] rounded-xl overflow-hidden border-2 transition-all duration-300 shadow-sm",
                activeIndex === idx
                  ? "border-gold-500 ring-4 ring-gold-500/25 scale-[1.03]"
                  : "border-transparent opacity-70 hover:opacity-100 hover:border-brown-200"
              )}
            >
              <Image
                src={img.imageUrl}
                alt={img.caption || `Thumbnail ${idx + 1}`}
                fill
                sizes="140px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}