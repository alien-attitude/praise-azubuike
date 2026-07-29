import { BriefcaseIcon } from "lucide-react";
import { Section } from "./ui/Section";
import type { Experience } from "../types/portfolio";

interface ExperienceTimelineProps {
  experience: Experience[];
}

export function ExperienceTimeline({ experience }: ExperienceTimelineProps) {
  return (
    <Section id="experience" title="Experience" icon={BriefcaseIcon}>
      <ol className="relative border-l border-border pl-6">
        {experience.map((item) =>
        <li key={item.id} className="relative mb-8 last:mb-0">
            {/* Timeline dot */}
            <span
            aria-hidden="true"
            className="absolute -left-[27px] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-primary ring-4 ring-primary-soft/40" />
          

            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-base font-semibold text-text-primary">
                {item.position}
              </h3>
              <span className="text-xs font-medium text-text-secondary sm:text-right">
                {item.period}
              </span>
            </div>
            <p className="text-sm font-medium text-primary">{item.company}</p>

            <ul className="mt-3 space-y-2">
              {item.responsibilities.map((resp, i) =>
            <li
              key={i}
              className="flex items-start gap-2 text-sm leading-relaxed text-text-secondary">
              
                  <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-text-secondary/50" />
                  {resp}
                </li>
            )}
            </ul>
          </li>
        )}
      </ol>
    </Section>);

}