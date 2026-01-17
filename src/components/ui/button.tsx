import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden group",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl hover:shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-lg hover:shadow-destructive/20",
        outline: "border-2 border-primary bg-white text-primary hover:bg-muted hover:border-primary/70",
        secondary: "bg-white text-primary border-2 border-primary hover:bg-accent hover:text-accent-foreground hover:border-accent shadow-lg hover:shadow-accent/20 hover:scale-[1.02] active:scale-[0.98]",
        ghost: "text-muted-foreground hover:bg-muted hover:text-foreground",
        link: "text-secondary underline-offset-4 hover:underline",
        // Primary CTA with Electric Cyan
        hero: "bg-secondary text-secondary-foreground font-semibold shadow-lg shadow-secondary/20 hover:bg-accent hover:shadow-2xl hover:shadow-accent/40 hover:scale-[1.03] active:scale-[0.98]",
        // Secondary outline CTA - White with Deep Navy border
        heroOutline: "border-2 border-primary bg-white text-primary hover:bg-accent hover:text-accent-foreground hover:border-accent font-semibold hover:shadow-lg hover:shadow-accent/20 hover:scale-[1.02] active:scale-[0.98]",
        // CYXOR Blue button
        cyxor: "btn-gradient-cyxor text-cyxor-foreground font-semibold shadow-lg shadow-cyxor/20 hover:shadow-2xl hover:shadow-cyxor/40 hover:scale-[1.03] active:scale-[0.98] border border-white/10",
        // CYXOR outline
        cyxorOutline: "border-2 border-cyxor/40 bg-cyxor/5 backdrop-blur-sm text-cyxor hover:bg-cyxor hover:text-cyxor-foreground font-semibold hover:shadow-lg hover:shadow-cyxor/20 hover:scale-[1.02] active:scale-[0.98]",
        // Defantra with Mint Tech Green
        defantra: "bg-accent text-accent-foreground font-semibold shadow-lg shadow-accent/20 hover:bg-secondary hover:text-secondary-foreground hover:shadow-2xl hover:shadow-secondary/40 hover:scale-[1.03] active:scale-[0.98]",
        // On dark backgrounds
        heroDark: "bg-white text-primary font-semibold shadow-lg shadow-white/20 hover:bg-accent hover:text-accent-foreground hover:shadow-2xl hover:shadow-accent/30 hover:scale-[1.03] active:scale-[0.98]",
        heroOutlineDark: "border-2 border-white/30 bg-white/5 backdrop-blur-sm text-white hover:bg-white hover:text-primary font-semibold hover:shadow-lg hover:shadow-white/20 hover:scale-[1.02] active:scale-[0.98]",
      },
      size: {
        default: "h-11 px-5 py-2",
        sm: "h-9 rounded-lg px-4 text-sm",
        lg: "h-13 rounded-xl px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-base tracking-wide",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };