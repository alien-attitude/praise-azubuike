import { GraduationCapIcon } from "lucide-react";
import { Section } from "./ui/Section";
import type { Education } from "../types/portfolio";

interface EducationCardsProps {
  education: Education[];
}

export function EducationCards({ education }: EducationCardsProps) {
  return (
    <Section id="education" title="Education" icon={GraduationCapIcon}>
      <div className="grid gap-4 sm:grid-cols-2">
        {education.map((item) =>
        <article
          key={item.id}
          className="rounded-2xl border border-border bg-white p-5 shadow-soft">
          
            <h3 className="text-base font-semibold text-text-primary">
              {item.institution}
            </h3>
            <p className="mt-1 text-sm font-medium text-primary">
              {item.degree}
            </p>
            <p className="mt-2 text-xs font-medium text-text-secondary">
              {item.duration}
            </p>
            {item.description &&
          <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                {item.description}
              </p>
          }
          </article>
        )}
      </div>
    </Section>);

}