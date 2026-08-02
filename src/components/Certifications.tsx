import { useEffect, useState } from "react";
import { AwardIcon, XIcon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Section } from "./ui/Section";
import type { Certifications as Certification } from "../types/portfolio";

interface CertificationsProps {
    certifications: Certification[];
}
interface CertificationModalProps {
  certification: Certification | null;
  onClose: () => void;
}

function CertificationModal({ certification, onClose }: CertificationModalProps) {
  const isOpen = certification !== null;

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {certification && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`${certification.name} certificate preview`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-text-primary/70 p-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-4xl rounded-2xl bg-white p-4 shadow-card"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.2 }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close certificate preview"
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-text-primary/80 text-white transition-colors hover:bg-text-primary"
            >
              <XIcon size={18} />
            </button>

            <div className="mb-4 pr-12">
              <h3 className="text-lg font-semibold text-text-primary">
                {certification.name}
              </h3>
              <p className="mt-1 text-sm text-text-secondary">
                {certification.issuer} • {certification.date}
              </p>
            </div>

            <img
              src={certification.images}
              alt={`${certification.name} certificate`}
              className="max-h-[75vh] w-full rounded-xl object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Certifications({ certifications }: CertificationsProps) {
  const [selectedCertification, setSelectedCertification] =
    useState<Certification | null>(null);

  return (
    <Section id="certifications" title="Certifications" icon={AwardIcon}>
      <div className="grid gap-4 sm:grid-cols-2">
        {certifications.map((certification) => (
          <motion.button
            key={certification.id}
            type="button"
            onClick={() => setSelectedCertification(certification)}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            aria-label={`View ${certification.name} certificate`}
            className="group rounded-2xl border border-border bg-white p-5 text-left shadow-soft transition-colors hover:border-primary/40 hover:shadow-card focus-visible:border-primary"
          >
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
                <AwardIcon size={18} />
              </span>

              <div>
                <h3 className="text-base font-semibold text-text-primary transition-colors group-hover:text-primary">
                  {certification.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-primary">
                  {certification.issuer}
                </p>
                <p className="mt-2 text-xs font-medium text-text-secondary">
                  {certification.date}
                </p>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <CertificationModal
        certification={selectedCertification}
        onClose={() => setSelectedCertification(null)}
      />
    </Section>
  );
}