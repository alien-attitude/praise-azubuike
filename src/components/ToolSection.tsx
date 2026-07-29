









import React from "react";
import { WrenchIcon } from "lucide-react";
import { Section } from "./ui/Section";
import { Badge } from "./ui/Badge";
import type { ToolCategory } from "../types/portfolio";

interface ToolSectionProps {
  tools: ToolCategory[];
}

export function ToolSection({ tools }: ToolSectionProps) {
  return (
    <Section id="tools" title="Tools & Tech" icon={WrenchIcon}>
      <div className="grid gap-4 sm:grid-cols-2">
        {tools.map((group) =>
        <div
          key={group.id}
          className="rounded-2xl border border-border bg-white p-5 shadow-soft">
          
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-secondary">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {group.tools.map((tool) =>
            <Badge key={tool} variant="outline">
                  {tool}
                </Badge>
            )}
            </div>
          </div>
        )}
      </div>
    </Section>);

}