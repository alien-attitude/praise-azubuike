















import React from "react";
import { MailIcon, ArrowRightIcon } from "lucide-react";
import type { Profile } from "../types/portfolio";

interface FooterProps {
  profile: Profile;
}

export function Footer({ profile }: FooterProps) {
  return (
    <footer className="mt-4 rounded-2xl border border-border bg-primary-soft/15 p-8 text-center sm:p-10">
      <h2 className="text-2xl font-bold tracking-tight text-text-primary">
        Let's work together
      </h2>
      <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-text-secondary">
        I'm always open to discussing new projects, creative ideas, or
        opportunities to be part of your vision.
      </p>

      <a
        href={profile.contact.email ? `mailto:${profile.contact.email}` : undefined}
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90">
        
        <MailIcon size={16} />
        Say Hello
        <ArrowRightIcon size={15} />
      </a>

      <p className="mt-8 text-xs text-text-secondary">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
    </footer>);

}