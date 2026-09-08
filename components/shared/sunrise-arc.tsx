import React from "react";
import { cn } from "@/lib/utils";

interface SunriseArcProps {
  className?: string;
  variant?: "divider" | "hero";
}

export function SunriseArc({ className, variant = "divider" }: SunriseArcProps) {
  if (variant === "hero") {
    return (
      <div className={cn("relative pointer-events-none select-none overflow-hidden", className)}>
        <svg
          viewBox="0 0 1000 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto text-gold-500/40"
        >
          {/* Subtle concentric solar engineering orbits */}
          <path
            d="M 50 300 A 450 250 0 0 1 950 300"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeDasharray="4 6"
            className="opacity-60"
          />
          <path
            d="M 150 300 A 350 190 0 0 1 850 300"
            stroke="#C6902E"
            strokeWidth="1.5"
          />
          <circle cx="500" cy="110" r="4" fill="#C6902E" />
          <circle cx="500" cy="110" r="10" stroke="#C6902E" strokeWidth="1" opacity="0.4" />
        </svg>
      </div>
    );
  }

  return (
    <div className={cn("w-full flex items-center justify-center my-8 select-none", className)}>
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-brown-300 to-transparent" />
      <div className="mx-4 flex items-center space-x-1">
        <div className="w-1.5 h-1.5 rounded-full bg-gold-500" />
        <svg width="32" height="12" viewBox="0 0 32 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 2 10 Q 16 0 30 10" stroke="#C6902E" strokeWidth="1.5" fill="none" />
        </svg>
        <div className="w-1.5 h-1.5 rounded-full bg-gold-500" />
      </div>
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-brown-300 to-transparent" />
    </div>
  );
}