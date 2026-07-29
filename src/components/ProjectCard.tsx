import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "lucide-react";
import { Badge } from "./ui/Badge";
import type { Project } from "../types/portfolio";

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <motion.button
      type="button"
      onClick={() => onOpen(project)}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      aria-label={`View details for ${project.title}`}
      className="group flex h-full w-full flex-col rounded-2xl border border-border bg-white p-5 text-left shadow-soft transition-colors hover:border-primary/40 hover:shadow-card focus-visible:border-primary">
      
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold text-text-primary transition-colors group-hover:text-primary">
          {project.title}
        </h3>
        <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-border text-text-secondary transition-all duration-200 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
          <ArrowUpRightIcon size={15} />
        </span>
      </div>

      <p className="mb-4 flex-1 text-sm leading-relaxed text-text-secondary">
        {project.shortDescription}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) =>
        <Badge key={tag} variant="outline">
            {tag}
          </Badge>
        )}
      </div>
    </motion.button>);

}