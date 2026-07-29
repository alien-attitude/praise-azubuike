




import React from "react";
import { MailIcon, MapPinIcon, ClockIcon, UserRoundIcon } from "lucide-react";
import { Navigation } from "./Navigation";
import type { Profile, NavItem } from "../types/portfolio";

interface SidebarProps {
  profile: Profile;
  navItems: NavItem[];
  activeId: string;
  onNavigate: (id: string) => void;
}

export function Sidebar({ profile, navItems, activeId, onNavigate }: SidebarProps) {
  return (
    <div className="flex flex-col">
      {/* Profile image */}
      <div className="mb-6 h-44 w-44 overflow-hidden rounded-2xl border border-border bg-primary-soft/20 shadow-soft">
        {profile.profileImage ?
        <img
          src={profile.profileImage}
          alt={profile.name}
          className="h-full w-full object-cover" /> :


        <div className="flex h-full w-full flex-col items-center justify-center gap-1.5 text-text-secondary/50">
            <UserRoundIcon size={36} />
            <span className="text-[10px] uppercase tracking-wide">Photo</span>
          </div>
        }
      </div>

      <h1 className="text-2xl font-bold tracking-tight text-text-primary">
        {profile.name}
      </h1>
      <p className="mt-1 text-base font-medium text-primary">{profile.title}</p>

      <p className="mt-4 text-sm leading-relaxed text-text-secondary">
        {profile.tagline}
      </p>

      {/* Contact */}
      <div className="mt-6 space-y-2.5">
        <a
          href={profile.contact.email ? `mailto:${profile.contact.email}` : undefined}
          className="flex items-center gap-2.5 text-sm text-text-secondary transition-colors hover:text-primary">
          
          <MailIcon size={15} className="flex-shrink-0" />
          <span className="truncate">{profile.contact.email}</span>
        </a>
        <p className="flex items-center gap-2.5 text-sm text-text-secondary">
          <MapPinIcon size={15} className="flex-shrink-0" />
          {profile.contact.location}
        </p>
        <p className="flex items-center gap-2.5 text-sm text-text-secondary">
          <ClockIcon size={15} className="flex-shrink-0" />
          {profile.contact.availability}
        </p>
      </div>

      {/* Navigation — hidden on mobile (shown in top bar instead) */}
      <div className="mt-8 hidden lg:block">
        <Navigation items={navItems} activeId={activeId} onNavigate={onNavigate} />
      </div>
    </div>);

}