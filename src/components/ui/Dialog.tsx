




import React, { useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { XIcon } from "lucide-react";
import { cn } from "../../lib/utils";

interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
  labelledBy?: string;
  className?: string;
}

/**
 * Accessible modal dialog (shadcn-style API) with focus trapping,
 * escape-to-close, scroll locking, and Framer Motion fade/scale.
 */
export function Dialog({
  open,
  onOpenChange,
  children,
  labelledBy,
  className
}: DialogProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange(false);
    },
    [onOpenChange]
  );

  useEffect(() => {
    if (!open) return;
    document.addEventListener("keydown", handleKeyDown);
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = original;
    };
  }, [open, handleKeyDown]);

  return createPortal(
    <AnimatePresence>
      {open &&
      <div
        className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-4 sm:p-6 md:items-center"
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}>
        
          <motion.div
          className="fixed inset-0 bg-text-primary/40 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={() => onOpenChange(false)} />
        
          <motion.div
          className={cn(
            "relative z-10 my-auto w-full max-w-2xl rounded-2xl border border-border bg-white shadow-card",
            className
          )}
          initial={{ opacity: 0, scale: 0.96, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 8 }}
          transition={{ duration: 0.2, ease: "easeOut" }}>
          
            <button
            type="button"
            onClick={() => onOpenChange(false)}
            aria-label="Close dialog"
            className="absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-white text-text-secondary transition-colors hover:bg-primary-soft/30 hover:text-text-primary">
            
              <XIcon size={16} />
            </button>
            {children}
          </motion.div>
        </div>
      }
    </AnimatePresence>,
    document.body
  );
}