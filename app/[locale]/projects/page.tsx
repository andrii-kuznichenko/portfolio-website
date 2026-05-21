"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { FilterTabs } from "@/components/projects/FilterTabs";
import { projects } from "@/lib/projects";
import type { ProjectStatus } from "@/lib/projects";
import { useParams } from "next/navigation";

type Filter = "all" | ProjectStatus;

export default function ProjectsPage() {
  const t = useTranslations("projectsPage");
  const params = useParams<{ locale: string }>();
  const locale = params.locale;
  const [filter, setFilter] = useState<Filter>("all");

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.status === filter);

  return (
    <>
      <Nav locale={locale} />
      <main className="mx-auto max-w-5xl px-4 sm:px-6 pt-28 pb-16">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            {t("heading")}
          </h1>
          <FilterTabs active={filter} onChange={setFilter} />
        </div>

        {/* Cards grid */}
        <motion.div
          layout
          className="grid gap-4 lg:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {filtered.length === 0 ? (
              <motion.p
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-2 py-12 text-center font-mono text-sm text-zinc-600"
              >
                {t("noProjects")}
              </motion.p>
            ) : (
              filtered.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  featured={i === 0 && filter === "all"}
                />
              ))
            )}
          </AnimatePresence>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
