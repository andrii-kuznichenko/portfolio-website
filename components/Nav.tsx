"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { Link } from "@/i18n/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const LOCALES = ["en", "de", "ua", "ru"] as const;

interface NavProps {
  locale: string;
}

export function Nav({ locale }: NavProps) {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/projects", label: t("projects") },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="pulse-dot h-2 w-2 rounded-full bg-p-green" />
          <span className="font-mono text-sm font-medium text-foreground group-hover:text-p-green transition-colors">
            andrii.kuznichenko
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "text-sm transition-colors",
                pathname === href
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {label}
            </Link>
          ))}

          {/* Language switcher */}
          <div className="flex items-center gap-1 ml-2">
            {LOCALES.map((loc) => (
              <Link
                key={loc}
                href={pathname}
                locale={loc}
                className={cn(
                  "rounded px-2 py-0.5 font-mono text-xs uppercase transition-all",
                  loc === locale
                    ? "border border-foreground/30 text-foreground"
                    : "border border-transparent text-muted-foreground hover:text-foreground"
                )}
              >
                {loc}
              </Link>
            ))}
          </div>

          <ThemeToggle />
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex sm:hidden flex-col gap-1.5 p-1"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span
            className={cn(
              "block h-px w-5 bg-foreground/60 transition-transform duration-200",
              mobileOpen && "translate-y-2 rotate-45"
            )}
          />
          <span
            className={cn(
              "block h-px w-5 bg-foreground/60 transition-opacity duration-200",
              mobileOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "block h-px w-5 bg-foreground/60 transition-transform duration-200",
              mobileOpen && "-translate-y-2 -rotate-45"
            )}
          />
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden border-b border-border sm:hidden"
          >
            <div className="flex flex-col gap-4 px-4 py-4">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "text-sm transition-colors",
                    pathname === href
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {label}
                </Link>
              ))}
              <div className="flex items-center gap-1 pt-1">
                {LOCALES.map((loc) => (
                  <Link
                    key={loc}
                    href={pathname}
                    locale={loc}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "rounded px-2 py-0.5 font-mono text-xs uppercase transition-all",
                      loc === locale
                        ? "border border-foreground/30 text-foreground"
                        : "border border-transparent text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {loc}
                  </Link>
                ))}
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
