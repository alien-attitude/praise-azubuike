import React from "react";
import { cn } from "../../lib/utils";
import { BoxIcon } from "lucide-react";
interface SectionProps {
  id: string;
  title: string;
  icon?: BoxIcon;
  children: React.ReactNode;
  className?: string;
}
export function Section({
  id,
  title,
  icon: Icon,
  children,
  className
}: SectionProps) {
  return <section id={id} aria-labelledby={`${id}-heading`} className={cn("scroll-mt-24", className)}>
      <div className="mb-6 flex items-center gap-2.5">
        {Icon && <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-soft/40 text-primary">
            <Icon size={18} strokeWidth={2} />
          </span>}
        <h2 id={`${id}-heading`} className="text-xl font-bold tracking-tight text-text-primary">
          {title}
        </h2>
      </div>
      {children}
    </section>;
}