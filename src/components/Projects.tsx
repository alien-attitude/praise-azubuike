import { useState } from "react";
import { FolderIcon } from "lucide-react";
import { Section } from "./ui/Section";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import type { Project } from "../types/portfolio";

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  const [selected, setSelected] = useState<Project | null>(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (project: Project) => {
    setSelected(project);
    setOpen(true);
  };

  return (
    <Section id="projects" title="Projects" icon={FolderIcon}>
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) =>
        <ProjectCard key={project.id} project={project} onOpen={handleOpen} />
        )}
      </div>

      <ProjectModal project={selected} open={open} onOpenChange={setOpen} />
    </Section>);

}