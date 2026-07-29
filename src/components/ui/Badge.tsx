


import React from "react";
import { cn } from "../../lib/utils";

type BadgeVariant = "default" | "soft" | "outline";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variants: Record<BadgeVariant, string> = {
  default:
  "bg-primary/10 text-text-primary border border-primary/20",
  soft: "bg-primary-soft/40 text-text-primary border border-primary-soft",
  outline: "bg-white text-text-secondary border border-border"
};

export function Badge({ children, variant = "outline", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium whitespace-nowrap transition-colors",
        variants[variant],
        className
      )}>
      
      {children}
    </span>);

}