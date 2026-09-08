"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp, MessageSquare, Phone } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
      {/* Quick Consultation Bubble */}
      <Link
        href="/contact-us"
        title="Konsultasi Proyek Cepat"
        className="w-12 h-12 rounded-full bg-gold-500 text-white flex items-center justify-center shadow-lg hover:bg-gold-600 transition-all hover:scale-110 active:scale-95 group relative"
      >
        <MessageSquare className="w-5 h-5" />
        <span className="absolute right-14 whitespace-nowrap bg-brown-900 text-white text-xs font-semibold py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
          Konsultasi Tim Ahli
        </span>
      </Link>

      {/* Back to Top Button */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Kembali ke atas"
        className={cn(
          "w-11 h-11 rounded-full bg-white border border-brown-300 text-brown-900 flex items-center justify-center shadow-md transition-all duration-300 hover:bg-brown-100 hover:scale-105 active:scale-95",
          showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        )}
      >
        <ArrowUp className="w-4 h-4 text-brown-700" />
      </button>
    </div>
  );
}