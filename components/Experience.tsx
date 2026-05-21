"use client";

import { useTranslations } from "next-intl";
import { BlurFade } from "@/components/magicui/blur-fade";

export function Experience() {
  const t = useTranslations("experience");

  const items = [
    {
      title: t('university.title'),
      company: t('university.company'),
      period: t('university.period'),
      description: t('university.description'),
    },
    {
      title: t('fullstack.title'),
      company: t('fullstack.company'),
      period: t('fullstack.period'),
      description: t('fullstack.description'),
    },
    {
      title: t('frontend.title'),
      company: t('frontend.company'),
      period: t('frontend.period'),
      description: t('frontend.description'),
    },
    {
      title: t('animator.title'),
      company: t('animator.company'),
      period: t('animator.period'),
      description: t('animator.description'),
    },
  ];

  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 py-12">
      <BlurFade delay={0.05}>
        <p className="font-mono text-xs text-muted-foreground mb-8 tracking-widest">
          {t("label")}
        </p>
      </BlurFade>

      <div className="flex flex-col gap-8 border-l border-border pl-6">
        {items.map((item, i) => (
          <BlurFade key={item.title} delay={0.1 + i * 0.1}>
            <div className="relative">
              <span className="absolute -left-6.5 top-1 h-2 w-2 rounded-full border border-border bg-background" />
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                <h3 className="text-foreground font-medium">{item.title}</h3>
                <span className="font-mono text-xs text-muted-foreground">
                  {item.period}
                </span>
              </div>
              <p className="font-mono text-xs text-p-green mb-1">{item.company}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
