import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-[8px] text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brown-500 disabled:pointer-events-none disabled:opacity-50 min-h-[44px] min-w-[44px] px-4 py-2",
  {
    variants: {
      variant: {
        default: "bg-brown-700 text-white hover:bg-brown-900 active:bg-brown-900 shadow-sm",
        gold: "bg-gold-500 text-white hover:bg-[#b07d24] active:bg-[#996b1c] font-semibold shadow-sm",
        outline: "border border-brown-300 bg-transparent text-brown-900 hover:bg-brown-100 hover:border-brown-500",
        secondary: "bg-brown-100 text-brown-900 hover:bg-brown-300/60 border border-brown-300",
        ghost: "hover:bg-brown-100 text-brown-900",
        link: "text-brown-700 underline-offset-4 hover:underline p-0 min-h-0 min-w-0",
        destructive: "bg-red-600 text-white hover:bg-red-700",
        sage: "bg-sage-600 text-white hover:bg-[#5b6b47]",
      },
      size: {
        default: "h-11 px-5 py-2.5",
        sm: "h-9 rounded-[8px] px-3 text-xs min-h-[36px] min-w-[36px]",
        lg: "h-12 rounded-[8px] px-7 text-base min-h-[48px]",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };