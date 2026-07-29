










import React from "react";
import { QuoteIcon } from "lucide-react";
import type { Testimonial } from "../types/portfolio";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const hasAttribution =
  testimonial.name || testimonial.position || testimonial.company;

  return (
    <figure className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-soft">
      <QuoteIcon
        aria-hidden="true"
        size={28}
        className="mb-4 text-primary-soft"
        fill="currentColor" />
      
      <blockquote className="flex-1 text-sm leading-relaxed text-text-primary">
        "{testimonial.quote}"
      </blockquote>

      <figcaption className="mt-5 border-t border-border pt-4">
        {hasAttribution ?
        <>
            <p className="text-sm font-semibold text-text-primary">
              {testimonial.name || "—"}
            </p>
            <p className="text-xs text-text-secondary">
              {[testimonial.position, testimonial.company].
            filter(Boolean).
            join(", ")}
            </p>
          </> :

        <p className="text-xs italic text-text-secondary/70">
            Attribution to be added
          </p>
        }
      </figcaption>
    </figure>);

}