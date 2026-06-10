import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Project } from "@/types/project";
import { TechBadge } from "@/components/shared/tech-badge";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <div
      className={cn(
        "bg-card rounded-lg shadow-lg overflow-hidden flex flex-col p-4 gap-4",
        className
      )}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md shrink-0">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      <div className="flex flex-col flex-1 gap-3">
        <div>
          <h3 className="text-xl font-semibold mb-1.5">{project.title}</h3>
          {project.featured && (
            <div className="inline-block rounded-full bg-primary/10 px-2 py-1 text-xs text-primary mb-1.5">
              Featured Project
            </div>
          )}
          <p className="text-muted-foreground text-sm leading-relaxed">
            {project.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <TechBadge key={tech} name={tech} size="sm" />
          ))}
        </div>
        <div className="flex gap-4 mt-auto">
          {project.links.github && (
            <Button variant="outline" asChild>
              <Link
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Link>
            </Button>
          )}
          {project.links.live && (
            <Button asChild>
              <Link
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </Link>
            </Button>
          )}
          {project.links.demo && (
            <Button asChild>
              <Link
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
