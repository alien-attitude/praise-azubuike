







import React, { useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { XIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

interface ImageLightboxProps {
  images: string[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

/**
 * Fullscreen image viewer with dark overlay, close button, arrow navigation,
 * and escape / arrow-key support.
 */
export function ImageLightbox({
  images,
  index,
  onClose,
  onNavigate
}: ImageLightboxProps) {
  const isOpen = index !== null;

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (index === null) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && index < images.length - 1)
      onNavigate(index + 1);
      if (e.key === "ArrowLeft" && index > 0) onNavigate(index - 1);
    },
    [index, images.length, onClose, onNavigate]
  );

  useEffect(() => {
    if (!isOpen) return;
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, handleKey]);

  return createPortal(
    <AnimatePresence>
      {isOpen && index !== null &&
      <motion.div
        className="fixed inset-0 z-[60] flex items-center justify-center bg-text-primary/90 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        role="dialog"
        aria-modal="true"
        aria-label="Image viewer"
        onClick={onClose}>
        
          <button
          type="button"
          onClick={onClose}
          aria-label="Close image viewer"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20">
          
            <XIcon size={20} />
          </button>

          {index > 0 &&
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(index - 1);
          }}
          aria-label="Previous image"
          className="absolute left-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20">
          
              <ChevronLeftIcon size={22} />
            </button>
        }

          <motion.img
          key={index}
          src={images[index]}
          alt={`Enlarged view ${index + 1}`}
          className="max-h-[85vh] max-w-full rounded-lg object-contain"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()} />
        

          {index < images.length - 1 &&
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(index + 1);
          }}
          aria-label="Next image"
          className="absolute right-4 bottom-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:right-4 md:top-1/2 md:bottom-auto">
          
              <ChevronRightIcon size={22} />
            </button>
        }

          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1 text-xs text-white">
            {index + 1} / {images.length}
          </span>
        </motion.div>
      }
    </AnimatePresence>,
    document.body
  );
}