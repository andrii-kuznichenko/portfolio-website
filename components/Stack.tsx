"use client";

import { useTranslations } from "next-intl";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Marquee } from "@/components/magicui/marquee";

const STACK_ITEMS = [
  { name: "Next.js", icon: "▲" },
  { name: "React", icon: "⚛" },
  { name: "TypeScript", icon: "TS" },
  { name: "Tailwind", icon: "🌊" },
  { name: "Framer", icon: "F" },
  { name: "Node.js", icon: "⬡" },
  { name: "Postgres", icon: "🐘" },
  { name: "Prisma", icon: "◆" },
  { name: "Vercel", icon: "▲" },
  { name: "Auth.js", icon: "🔐" },
];

function StackPill({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="inline-flex items-center gap-2 border border-border bg-card rounded-lg px-4 py-2 font-mono text-sm text-muted-foreground select-none hover:border-foreground/20 hover:text-foreground transition-all duration-300">
      <span className="text-base">{icon}</span>
      <span>{name}</span>
    </div>
  );
}

export function Stack() {
  const t = useTranslations("stack");

  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 py-12 overflow-hidden">
      <BlurFade delay={0.05}>
        <p className="font-mono text-xs text-muted-foreground mb-8 tracking-widest">
          {t("label")}
        </p>
      </BlurFade>

      <BlurFade delay={0.1}>
        <div className="relative">
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 bg-linear-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 bg-linear-to-l from-background to-transparent z-10" />

          <Marquee gap="0.75rem" repeat={3} pauseOnHover className="py-2">
            {STACK_ITEMS.map((item) => (
              <StackPill key={item.name} {...item} />
            ))}
          </Marquee>
        </div>
      </BlurFade>
    </section>
  );
}
