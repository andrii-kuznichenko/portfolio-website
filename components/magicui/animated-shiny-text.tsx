"use client";

import { cn } from "@/lib/utils";

interface AnimatedShinyTextProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedShinyText({
  children,
  className,
}: AnimatedShinyTextProps) {
  return (
    <span
      className={cn("inline-block", className)}
      style={{
        backgroundImage: "var(--shiny-text-gradient)",
        backgroundSize: "200% 100%",
        animation: "shine 3s linear infinite",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {children}
    </span>
  );
}
