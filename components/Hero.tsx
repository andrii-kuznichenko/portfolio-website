"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { Meteors } from "@/components/magicui/meteors";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { DotPattern } from "@/components/magicui/dot-pattern";
import Image from "next/image";

export function Hero() {
  const t = useTranslations("hero");

  const tags = [
    t('tags.masters'),
    t('tags.english'),
    t('tags.german'),
    t('tags.ukrainian'),
    t('tags.russian'),
    t('tags.location_first'),
    t('tags.location_second'),
    t('tags.location_third'),
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-4 sm:px-6">
      {/* Backgrounds */}
      <DotPattern className="fill-neutral-400/30" cr={1} />
      <Meteors number={10} />

      <div className="relative z-10 mx-auto w-full max-w-5xl pt-24 pb-16">
        <div className="flex flex-col-reverse lg:flex-row items-start gap-12">
          {/* Left — content */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Status label */}
            <div className="inline-flex items-center gap-2">
              <span className="pulse-dot h-2 w-2 rounded-full bg-p-green" />
              <AnimatedShinyText className="font-mono text-xs tracking-widest">
                {t("status")}
              </AnimatedShinyText>
            </div>

            {/* Heading */}
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-none">
                <TypingAnimation text={t("heading")} duration={80} />
              </h1>
              <p className="mt-2 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-muted-foreground leading-none">
                {t("subheading")}
              </p>
            </div>

            {/* Body */}
            <p className="max-w-lg text-muted-foreground leading-relaxed">
              {t("body")}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Link href="/projects">
                <ShimmerButton
                  background="rgba(10,10,10,0.95)"
                  className="px-5 py-2.5 text-sm font-medium"
                >
                  {t("viewProjects")}
                </ShimmerButton>
              </Link>
              <a href="mailto:andriikuznichenko@gmail.com">
                <button className="rounded-lg border border-border bg-transparent px-5 py-2.5 text-sm font-medium text-foreground/70 transition-all hover:border-foreground/30 hover:text-foreground">
                  {t("getInTouch")}
                </button>
              </a>
            </div>

            {/* Tags row */}
            <div className="flex flex-wrap gap-2 pt-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs text-muted-foreground border border-border rounded px-2 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right — photo (desktop) */}
          <div className="hidden lg:flex flex-col items-end gap-2 shrink-0">
            <div className="relative w-56 h-64 rounded-xl border border-border overflow-hidden">
              <Image
                src="/pic2.jpg"
                alt="Andrii Kuznichenko"
                fill
                className="object-cover object-[50%_23%]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
