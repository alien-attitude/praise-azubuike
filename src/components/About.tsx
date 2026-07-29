import { SparklesIcon } from "lucide-react";
import { Badge } from "./ui/Badge";
import type { Profile } from "../types/portfolio";

interface AboutProps {
  profile: Profile;
  gains: string[];
}

export function About({ profile, gains }: AboutProps) {
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-24">
      <h2 id="about-heading" className="sr-only">
        About
      </h2>

      <p className="text-lg leading-relaxed text-text-primary sm:text-xl">
        {profile.intro}
      </p>

      <p className="mt-4 leading-relaxed text-text-secondary">
        {profile.summary}
      </p>

      <div className="mt-8">
        <h3 className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-text-secondary">
          <SparklesIcon size={14} className="text-primary" /> Core Services
        </h3>
        <div className="flex flex-wrap gap-2">
          {profile.services.map((service) =>
          <Badge key={service} variant="soft">
              {service}
            </Badge>
          )}
        </div>
      </div>

      {gains.length > 0 &&
      <div className="mt-8 rounded-2xl border border-border bg-primary-soft/10 p-6">
          <h3 className="mb-4 text-sm font-semibold text-text-primary">
            What you gain when you work with me
          </h3>
          <ul className="grid gap-2.5 sm:grid-cols-2">
            {gains.map((gain, i) =>
          <li
            key={i}
            className="flex items-center gap-2.5 text-sm text-text-secondary">
            
                <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                {gain}
              </li>
          )}
          </ul>
        </div>
      }
    </section>);

}