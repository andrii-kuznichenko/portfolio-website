"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { BlurFade } from "@/components/magicui/blur-fade";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { projects } from "@/lib/projects";
import type { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

const STATUS_BADGE: Record<Project["status"], string> = {
  live: "border border-p-green/30 bg-p-green/10 text-p-green",
  wip: "border border-p-amber/30 bg-p-amber/10 text-p-amber",
  planned: "border border-border bg-muted text-muted-foreground",
};

const PREVIEW_IDS = ["marketplace", "jim-stanes", "restaurant-saas"];

export function ProjectsPreview() {
  const t = useTranslations("projectsPreview");
  const tp = useTranslations("projects");

  const previewProjects = projects.filter((p) => PREVIEW_IDS.includes(p.id));

  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 py-12">
      <BlurFade delay={0.05}>
        <div className="flex items-center justify-between mb-8">
          <p className="font-mono text-xs text-muted-foreground tracking-widest">
            {t("label")}
          </p>
          <Link
            href="/projects"
            className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("viewAll")}
          </Link>
        </div>
      </BlurFade>

      <div className="grid gap-4 lg:grid-cols-2">
        {previewProjects.map((project, i) => {
          const id = project.id as Parameters<typeof tp>[0];
          const title = tp(`${id}.title` as Parameters<typeof tp>[0]);
          const description = tp(`${id}.description` as Parameters<typeof tp>[0]);
          const statusLabel = tp(`labels.status.${project.status}` as Parameters<typeof tp>[0]);
          const featured = i === 0;

          return (
            <BlurFade
              key={project.id}
              delay={0.1 + i * 0.05}
              className={cn(featured && "lg:row-span-2")}
            >
              <div
                className={cn(
                  "relative rounded-xl border border-border bg-card overflow-hidden group h-full",
                  featured ? "p-6" : "p-5"
                )}
              >
                {featured && <BorderBeam size={250} duration={10} />}

                <div className="flex items-start justify-between mb-4">
                  <span className="font-mono text-xs text-muted-foreground">{project.number}</span>
                  <Badge
                    variant="secondary"
                    className={cn("font-mono text-xs", STATUS_BADGE[project.status])}
                  >
                    {statusLabel}
                  </Badge>
                </div>

                <h3 className={cn("font-semibold text-foreground mb-2", featured && "text-xl")}>
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {description}
                </p>

                {featured && (
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
                )}

                <div className="flex gap-3">
                  {project.links.live !== undefined && (
                    <button className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors">
                      <ExternalLink className="h-3 w-3" />
                      {tp("labels.liveDemo")}
                    </button>
                  )}
                  {project.links.github !== undefined && (
                    <button className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors">
                      <GithubIcon className="h-3 w-3" />
                      {tp("labels.github")}
                    </button>
                  )}
                </div>
              </div>
            </BlurFade>
          );
        })}
      </div>
    </section>
  );
}
