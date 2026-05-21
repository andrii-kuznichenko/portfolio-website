"use client";

import { motion } from "framer-motion";
import { ExternalLink, CheckCircle2, Circle } from "lucide-react";
import { useTranslations } from "next-intl";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/projects";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

const STATUS_STYLES: Record<Project["status"], { border: string; badge: string }> = {
  live: {
    border: "border-p-green/20",
    badge: "border border-p-green/30 bg-p-green/10 text-p-green",
  },
  wip: {
    border: "border-p-amber/20",
    badge: "border border-p-amber/30 bg-p-amber/10 text-p-amber",
  },
  planned: {
    border: "border-border",
    badge: "border border-border bg-muted text-muted-foreground",
  },
};

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const t = useTranslations("projects");
  const style = STATUS_STYLES[project.status];
  const isPlanned = project.status === "planned";

  const id = project.id as Parameters<typeof t>[0];
  const title = t(`${id}.title` as Parameters<typeof t>[0]);
  const subtitle = t(`${id}.subtitle` as Parameters<typeof t>[0]);
  const description = t(`${id}.description` as Parameters<typeof t>[0]);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "relative rounded-xl border bg-card overflow-hidden",
        style.border,
        isPlanned && "opacity-60",
        featured && "lg:col-span-2"
      )}
    >
      {featured && project.status === "wip" && (
        <BorderBeam size={300} duration={10} />
      )}

      <div className={cn("p-6", isPlanned && "filter grayscale-[0.4]")}>
        <div className="flex items-start justify-between mb-4">
          <span className="font-mono text-xs text-muted-foreground">{project.number}</span>
          <Badge variant="secondary" className={cn("font-mono text-[11px]", style.badge)}>
            {t(`labels.status.${project.status}` as Parameters<typeof t>[0])}
          </Badge>
        </div>

        <h2 className="text-xl font-semibold text-foreground mb-1">{title}</h2>
        <p className="font-mono text-xs text-muted-foreground mb-3">{subtitle}</p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-5">{description}</p>

        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[10px] border border-border text-muted-foreground rounded px-1.5 py-0.5"
            >
              {tech}
            </span>
          ))}
        </div>

        {(project.done.length > 0 || project.nextUp.length > 0) && (
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {project.done.length > 0 && (
              <div>
                <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-2">
                  {t("labels.done")}
                </p>
                <ul className="space-y-1">
                  {project.done.map((item) => (
                    <li key={item} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <CheckCircle2 className="h-3 w-3 shrink-0 text-p-green" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {project.nextUp.length > 0 && (
              <div>
                <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-2">
                  {t("labels.nextUp")}
                </p>
                <ul className="space-y-1">
                  {project.nextUp.map((item) => (
                    <li key={item} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Circle className="h-3 w-3 shrink-0 text-muted-foreground/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            {project.links.live !== undefined && (
              <a
                href={project.links.live || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                <ExternalLink className="h-3 w-3" />
                {t("labels.liveDemo")}
              </a>
            )}
            {project.links.github !== undefined && (
              <a
                href={project.links.github || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                <GithubIcon className="h-3 w-3" />
                {t("labels.github")}
              </a>
            )}
          </div>
          <span className="font-mono text-[10px] text-muted-foreground">{project.period}</span>
        </div>
      </div>
    </motion.article>
  );
}
