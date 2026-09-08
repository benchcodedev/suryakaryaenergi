import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-[8px] border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-brown-500 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-brown-100 text-brown-900",
        outline: "border-brown-300 text-brown-700 bg-white",
        gold: "border-transparent bg-gold-500/15 text-[#8c6013] border-gold-500/30",
        sage: "border-transparent bg-[#eef3eb] text-sage-600 border-sage-600/30",
        brown: "border-transparent bg-brown-700 text-white",
        success: "border-transparent bg-emerald-100 text-emerald-800",
        warning: "border-transparent bg-amber-100 text-amber-800",
        secondary: "border-brown-300 bg-paper text-brown-900",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };