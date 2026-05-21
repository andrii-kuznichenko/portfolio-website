"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TypingAnimationProps {
  text: string;
  duration?: number;
  className?: string;
  as?: React.ElementType;
  startOnView?: boolean;
}

export function TypingAnimation({
  text,
  duration = 100,
  className,
  as: Component = "span",
  startOnView = false,
}: TypingAnimationProps) {
  const [displayed, setDisplayed] = useState(startOnView ? "" : "");
  const [started, setStarted] = useState(!startOnView);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, duration);
    return () => clearInterval(interval);
  }, [text, duration, started]);

  return (
    <Component
      className={cn("inline-block", className)}
      onAnimationStart={() => setStarted(true)}
    >
      {displayed}
      <span className="animate-pulse">|</span>
    </Component>
  );
}
