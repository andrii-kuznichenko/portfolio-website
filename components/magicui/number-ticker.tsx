"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";
import { cn } from "@/lib/utils";

interface NumberTickerProps {
  value: number;
  direction?: "up" | "down";
  delay?: number;
  className?: string;
  decimalPlaces?: number;
}

export function NumberTicker({
  value,
  direction = "up",
  delay = 0,
  className,
  decimalPlaces = 0,
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px" });
  const [rendered, setRendered] = useState(
    direction === "down" ? value : 0
  );

  useEffect(() => {
    if (!inView) return;
    const from = direction === "down" ? value : 0;
    const to = direction === "down" ? 0 : value;
    const controls = animate(from, to, {
      duration: 1.5,
      delay,
      ease: "easeOut",
      onUpdate: (v) => setRendered(parseFloat(v.toFixed(decimalPlaces))),
    });
    return () => controls.stop();
  }, [inView, value, direction, delay, decimalPlaces]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {rendered.toFixed(decimalPlaces)}
    </span>
  );
}
