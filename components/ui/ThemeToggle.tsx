"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

function SunIconAnimation({
  children,
  isDark,
}: {
  children: React.ReactNode;
  isDark: boolean;
}) {
  return (
    <motion.span
      className="grid h-[1.2rem] w-[1.2rem] place-items-center"
      initial={false}
      animate={{ rotate: isDark ? 0 : 180 }}
      transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.span
        className="col-start-1 row-start-1 grid h-full w-full place-items-center"
        initial={false}
        animate={
          isDark
            ? { opacity: 0, rotate: 26, scaleX: 0.68, scaleY: 1.14 }
            : { opacity: 1, rotate: 0, scaleX: 1, scaleY: 1 }
        }
        transition={{ duration: isDark ? 0.28 : 0.52, ease: [0.22, 1, 0.36, 1] }}
        style={{ originX: "50%", originY: "50%" }}
      >
        <motion.span
          initial={false}
          animate={{ scale: isDark ? 0.92 : 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          className="grid h-full w-full place-items-center"
        >
          {children}
        </motion.span>
      </motion.span>
    </motion.span>
  );
}

function MoonIconAnimation({
  children,
  isDark,
}: {
  children: React.ReactNode;
  isDark: boolean;
}) {
  return (
    <motion.span
      className="ml-[-1.2rem] grid h-[1.2rem] w-[1.2rem] place-items-center"
      initial={false}
      animate={{ rotate: isDark ? 0 : 180 }}
      transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.span
        className="col-start-1 row-start-1 grid h-full w-full place-items-center"
        initial={false}
        animate={
          isDark
            ? { opacity: 1, rotate: 0, scaleX: 1, scaleY: 1 }
            : { opacity: 0, rotate: -24, scaleX: 0.8, scaleY: 1.08 }
        }
        transition={{
          duration: isDark ? 0.56 : 0.22,
          ease: [0.22, 1, 0.36, 1],
          delay: isDark ? 0.08 : 0,
        }}
        style={{ originX: "50%", originY: "50%" }}
      >
        <motion.span
          initial={false}
          animate={{ scale: isDark ? [0.86, 1.06, 1] : 0.86 }}
          transition={{ duration: 0.5, times: [0, 0.7, 1], delay: isDark ? 0.1 : 0 }}
          className="relative grid h-full w-full place-items-center"
        >
          {children}
        </motion.span>
      </motion.span>
    </motion.span>
  );
}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-8 w-8" />;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg border border-transparent text-muted-foreground transition-colors hover:border-border hover:text-foreground"
      aria-label="Toggle theme"
    >
      <SunIconAnimation isDark={isDark}>
        <svg
          width="1.2rem"
          height="1.2rem"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="4" />
          <line x1="12" y1="2" x2="12" y2="4" />
          <line x1="12" y1="20" x2="12" y2="22" />
          <line x1="4.93" y1="4.93" x2="6.34" y2="6.34" />
          <line x1="17.66" y1="17.66" x2="19.07" y2="19.07" />
          <line x1="2" y1="12" x2="4" y2="12" />
          <line x1="20" y1="12" x2="22" y2="12" />
          <line x1="6.34" y1="17.66" x2="4.93" y2="19.07" />
          <line x1="19.07" y1="4.93" x2="17.66" y2="6.34" />
        </svg>
      </SunIconAnimation>
      <MoonIconAnimation isDark={isDark}>
        <svg
          width="1.2rem"
          height="1.2rem"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="absolute"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </MoonIconAnimation>
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
