












import React from "react";
import { MessageSquareQuoteIcon } from "lucide-react";
import { Section } from "./ui/Section";
import { TestimonialCard } from "./TestimonialCard";
import type { Testimonial } from "../types/portfolio";

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <Section id="testimonials" title="Testimonials" icon={MessageSquareQuoteIcon}>
      <div className="grid gap-4 sm:grid-cols-2">
        {testimonials.map((testimonial) =>
        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        )}
      </div>
    </Section>);

}