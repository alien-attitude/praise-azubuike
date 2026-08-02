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

  const displayName = profile.name.split(" ")[0].toUpperCase();
  const displaySection = activeLabel?.replace(/s$/i, "").toUpperCase()

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

      <div className="fixed left-0 right-0 top-6 z-40 hidden pointer-events-none lg:block">
        <div className="grid max-w-6xl grid-cols-[280px_1fr] gap-10 px-5 sm:px-8 lg:ml-8 lg:mr-auto xl:ml-12">
          <div className="pointer-events-auto rounded-3xl border border-border bg-white/90 p-5 shadow-soft backdrop-blur-md">
            <div className="flex items-center gap-3">
              <SparkleIcon size={18} className="text-primary" fill="currentColor" />
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-text-primary">
                {displayName}
                <span className="mx-2 text-text-secondary">/</span>
                <span className="text-primary">{displaySection}</span>
              </p>
            </div>
          </div>

          <div />
        </div>
      </div>

      <div className="grid max-w-6xl grid-cols-1 gap-10 px-5 py-8 sm:px-8 lg:ml-8 lg:mr-auto lg:grid-cols-[280px_1fr] lg:gap-10 lg:py-16 lg:pt-32 xl:ml-12">
        {/* Sticky sidebar desktop / profile section mobile */}
        <aside className="lg:sticky lg:top-32 lg:h-fit lg:self-start">
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