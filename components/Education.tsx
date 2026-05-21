"use client";

import { useTranslations } from "next-intl";
import { BlurFade } from "@/components/magicui/blur-fade";

const ITEMS = ["masters", "bachelor", "bootcamp"] as const;

export function Education() {
  const t = useTranslations("education");

  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 py-12">
      <BlurFade delay={0.05}>
        <p className="font-mono text-xs text-muted-foreground mb-8 tracking-widest">
          {t("label")}
        </p>
      </BlurFade>

      <div className="flex flex-col gap-6 border-l border-border pl-6">
        {ITEMS.map((key, i) => (
          <BlurFade key={key} delay={0.1 + i * 0.05}>
            <div className="relative">
              <span className="absolute -left-6.5 top-1 h-2 w-2 rounded-full border border-border bg-background" />
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                <h3 className="text-foreground font-medium">{t(`${key}.title`)}</h3>
                <span className="font-mono text-xs text-muted-foreground">
                  {t(`${key}.period`)}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{t(`${key}.institution`)}</p>
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
