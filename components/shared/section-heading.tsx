import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  badge?: string;
  badgeVariant?: "default" | "gold" | "sage";
  underline?: boolean;
}

export function SectionHeading({
  title,
  description,
  align = "left",
  className,
  badge,
  badgeVariant = "default",
  underline = true,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  const badgeStyles = {
    default: "bg-brown-100 text-brown-900 border-brown-300/80 shadow-sm",
    gold: "bg-gold-500/15 text-gold-600 border-gold-500/40 shadow-sm",
    sage: "bg-[#eef3eb] text-sage-600 border-sage-600/40 shadow-sm",
  };

  return (
    <div
      className={cn(
        "mb-12 sm:mb-16",
        isCenter ? "text-center mx-auto max-w-3xl" : "text-left max-w-3xl",
        className
      )}
    >
      {badge && (
        <span
          className={cn(
            "inline-block text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border mb-4",
            badgeStyles[badgeVariant]
          )}
        >
          {badge}
        </span>
      )}

      <div>
        <h2
          className={cn(
            "text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-brown-900 leading-tight",
            underline && (isCenter ? "heading-underline-center" : "heading-underline")
          )}
        >
          {title}
        </h2>
      </div>

      {description && (
        <p
          className={cn(
            "text-base sm:text-lg text-brown-600/90 leading-relaxed max-w-prose",
            underline ? "mt-6" : "mt-3.5"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}