import { useCallback } from "react";

/**
 * Returns a function that smoothly scrolls to a section by id,
 * accounting for the sticky mobile header offset.
 */
export function useSmoothScroll() {
  return useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const headerOffset = window.innerWidth < 1024 ? 72 : 24;
    const top =
    el.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({ top, behavior: "smooth" });
  }, []);
}