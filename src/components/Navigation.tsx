


import React from "react";
import { motion } from "framer-motion";
import type { NavItem } from "../types/portfolio";
import { cn } from "../lib/utils";

interface NavigationProps {
  items: NavItem[];
  activeId: string;
  onNavigate: (id: string) => void;
  /** Horizontal layout is used for the mobile top bar. */
  orientation?: "vertical" | "horizontal";
}

export function Navigation({
  items,
  activeId,
  onNavigate,
  orientation = "vertical"
}: NavigationProps) {
  const isHorizontal = orientation === "horizontal";

  return (
    <nav
      aria-label="Section navigation"
      className={cn(
        isHorizontal ?
        "flex gap-1 overflow-x-auto pb-1" :
        "flex flex-col gap-0.5"
      )}>
      
      {items.map((item) => {
        const isActive = activeId === item.id;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onNavigate(item.id)}
            aria-current={isActive ? "true" : undefined}
            className={cn(
              "relative whitespace-nowrap text-left text-sm font-medium transition-colors",
              isHorizontal ?
              "rounded-full px-3.5 py-1.5" :
              "rounded-lg px-3 py-2",
              isActive ?
              isHorizontal ?
              "bg-primary text-white" :
              "text-text-primary" :
              "text-text-secondary hover:text-text-primary"
            )}>
            
            {!isHorizontal && isActive &&
            <motion.span
              layoutId="nav-indicator"
              className="absolute left-0 top-1/2 h-4 w-0.5 -translate-y-1/2 rounded-full bg-primary"
              transition={{ type: "spring", stiffness: 400, damping: 30 }} />

            }
            <span className={cn(!isHorizontal && "pl-2")}>{item.label}</span>
          </button>);

      })}
    </nav>);

}