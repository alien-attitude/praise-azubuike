import { useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { PlusIcon } from "lucide-react";
import type { FAQ } from "../types/portfolio";
import { cn } from "../lib/utils";

interface FAQAccordionProps {
  faqs: FAQ[];
}

/**
 * Accessible single-open accordion. Only one item can be open at a time.
 * Keyboard operable via native button semantics.
 */
export function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-white shadow-soft">
      {faqs.map((faq) => {
        const isOpen = openId === faq.id;
        return (
          <div key={faq.id}>
            <h3>
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : faq.id)}
                aria-expanded={isOpen}
                aria-controls={`${faq.id}-panel`}
                id={`${faq.id}-trigger`}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-primary-soft/10">
                
                <span className="text-sm font-semibold text-text-primary sm:text-base">
                  {faq.question}
                </span>
                <span
                  className={cn(
                    "flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-border text-text-secondary transition-transform duration-300",
                    isOpen && "rotate-45 border-primary bg-primary-soft/30 text-primary"
                  )}>
                  
                  <PlusIcon size={14} />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen &&
              <motion.div
                id={`${faq.id}-panel`}
                role="region"
                aria-labelledby={`${faq.id}-trigger`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="overflow-hidden">
                
                  <p className="px-5 pb-5 text-sm leading-relaxed text-text-secondary">
                    {faq.answer}
                  </p>
                </motion.div>
              }
            </AnimatePresence>
          </div>);

      })}
    </div>);

}