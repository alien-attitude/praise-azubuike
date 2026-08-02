import { ExternalLinkIcon, CheckCircle2Icon, UserRoundIcon } from "lucide-react";
import { Dialog } from "./ui/Dialog";
import { Badge } from "./ui/Badge";
import { ImageGallery } from "./ImageGallery";
import type { Project } from "../types/portfolio";

interface ProjectModalProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProjectModal({ project, open, onOpenChange }: ProjectModalProps) {
  if (!project) return null;

  const titleId = `${project.id}-modal-title`;

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
      labelledBy={titleId}
      className="max-h-[90vh] overflow-y-auto">
      
      <div className="p-6 sm:p-8">
        <header className="mb-6 pr-8">
          <h2
            id={titleId}
            className="text-2xl font-bold tracking-tight text-text-primary">
            
            {project.title}
          </h2>
          {project.categories.length > 0 &&
          <div className="mt-3 flex flex-wrap gap-2">
              {project.categories.map((cat) =>
            <Badge key={cat} variant="soft">
                  {cat}
                </Badge>
            )}
            </div>
          }
        </header>

        <p className="mb-8 text-sm leading-relaxed text-text-secondary">
          {project.description}
        </p>

        <div className="mb-8">
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-secondary">
            Gallery
          </h3>
          <ImageGallery images={project.images} />
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {project.roles.length > 0 &&
          <div>
              <h3 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-text-secondary">
                <UserRoundIcon size={14} /> Roles
              </h3>
              <ul className="space-y-2">
                {project.roles.map((role, i) =>
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-text-primary">
                
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    {role}
                  </li>
              )}
              </ul>
            </div>
          }

          {project.results.length > 0 &&
          <div>
              <h3 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-text-secondary">
                <CheckCircle2Icon size={14} /> Results
              </h3>
              <ul className="space-y-2">
                {project.results.map((result, i) =>
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-text-primary">
                
                    <CheckCircle2Icon
                  size={15}
                  className="mt-0.5 flex-shrink-0 text-primary" />
                
                    {result}
                  </li>
              )}
              </ul>
            </div>
          }
        </div>

        {project.technologies.length > 0 &&
        <div className="mt-8">
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-secondary">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) =>
            <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
            )}
            </div>
          </div>
        }

        <div className="mt-8 border-t border-border pt-6">
          <a
            href={project.projectUrl || undefined}
            target={project.projectUrl ? "_blank" : undefined}
            rel="noopener noreferrer"
            aria-disabled={!project.projectUrl}
            onClick={(e) => !project.projectUrl && e.preventDefault()}
            className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
            project.projectUrl ?
            "bg-primary text-white hover:bg-primary/90" :
            "cursor-not-allowed bg-primary-soft/40 text-text-secondary"}`
            }>

            View Project <ExternalLinkIcon size={15} />
          </a>

          {project.notionUrl &&
              <a
                  href={project.notionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 sm:mt-0 sm:ml-8  inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary/90">

                View Notion Project <ExternalLinkIcon size={15} />
              </a>
          }
        </div>


      </div>
    </Dialog>
  );
}