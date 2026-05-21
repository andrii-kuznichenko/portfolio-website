"use client";

import { useTranslations } from "next-intl";
import { BlurFade } from "@/components/magicui/blur-fade";

export function About() {
  const t = useTranslations("about");

  const tags = [
    t("tags.cleanCode"),
    t("tags.motionDesign"),
    t("tags.uiux"),
    t("tags.fastShipping"),
  ];

  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 py-24">
      <BlurFade delay={0.1}>
        <p className="font-mono text-xs text-muted-foreground mb-6 tracking-widest">
          {t("label")}
        </p>
        <p className="max-w-2xl text-foreground/70 leading-relaxed text-lg">
          {t("text")}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs border border-border text-muted-foreground rounded px-2.5 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
      </BlurFade>
    </section>
  );
}
