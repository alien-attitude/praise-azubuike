import React from 'react';
import { SparkleIcon } from "lucide-react";
import { Sidebar } from "../components/Sidebar";
import { Navigation } from "../components/Navigation";
import { useActiveSection } from "../hooks/useActiveSection";
import { useSmoothScroll } from "../hooks/useSmoothScroll";
import type { Profile, NavItem } from "../types/portfolio";

interface PortfolioLayoutProps {
  profile: Profile;
  navItems: NavItem[];
  children: React.ReactNode;
}

export function PortfolioLayout({
  profile,
  navItems,
  children
}: PortfolioLayoutProps) {
  const sectionIds = navItems.map((n) => n.id);
  const activeId = useActiveSection(sectionIds);
  const scrollTo = useSmoothScroll();

  const activeLabel =
  navItems.find((n) => n.id === activeId)?.label ?? navItems[0]?.label;

  return (
    <div className="min-h-full w-full bg-background text-text-primary">
      {/* Mobile top bar */}
      <header className="sticky top-0 z-40 border-b border-border bg-white/90 backdrop-blur-md lg:hidden">
        <div className="flex items-center gap-2 px-4 py-3">
          <SparkleIcon size={18} className="text-primary" fill="currentColor" />
          <span className="text-sm font-bold tracking-tight text-text-primary">
            {profile.name.split(" ")[0]}
          </span>
          <span className="text-text-secondary">/</span>
          <span className="text-sm font-medium uppercase tracking-wide text-text-secondary">
            {activeLabel}
          </span>
        </div>
        <div className="border-t border-border px-4 py-2">
          <Navigation
            items={navItems}
            activeId={activeId}
            onNavigate={scrollTo}
            orientation="horizontal" />
          
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 py-8 sm:px-8 lg:grid-cols-[300px_1fr] lg:gap-16 lg:py-16">
        {/* Sticky sidebar (desktop) / top section (mobile) */}
        <aside className="lg:sticky lg:top-16 lg:h-fit lg:self-start">
          <Sidebar
            profile={profile}
            navItems={navItems}
            activeId={activeId}
            onNavigate={scrollTo} />
          
        </aside>

        {/* Right content column */}
        <main className="flex flex-col gap-16 lg:gap-20">{children}</main>
      </div>
    </div>);

}