"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ProjectStatus } from "@/lib/projects";

type Filter = "all" | ProjectStatus;

const FILTERS: Filter[] = ["all", "live", "wip", "planned"];

interface FilterTabsProps {
  active: Filter;
  onChange: (filter: Filter) => void;
}

export function FilterTabs({ active, onChange }: FilterTabsProps) {
  const t = useTranslations("projectsPage.filter");

  const labels: Record<Filter, string> = {
    all: t("all"),
    live: t("live"),
    wip: t("wip"),
    planned: t("planned"),
  };

  return (
    <div className="flex gap-1 flex-wrap">
      {FILTERS.map((filter) => (
        <button
          key={filter}
          onClick={() => onChange(filter)}
          className={cn(
            "relative rounded-lg px-3 py-1.5 font-mono text-xs transition-colors",
            active === filter
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {active === filter && (
            <motion.span
              layoutId="filter-pill"
              className="absolute inset-0 rounded-lg border border-border bg-muted"
              transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
            />
          )}
          <span className="relative z-10">{labels[filter]}</span>
        </button>
      ))}
    </div>
  );
}
