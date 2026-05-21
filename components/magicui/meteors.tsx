"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Meteor {
  id: number;
  top: string;
  left: string;
  width: number;
  size: number;
  delay: string;
  duration: string;
}

interface MeteorsProps {
  number?: number;
  className?: string;
}

export function Meteors({ number = 12, className }: MeteorsProps) {
  const [meteors, setMeteors] = useState<Meteor[]>([]);

  useEffect(() => {
    setMeteors(
      Array.from({ length: number }, (_, i) => ({
        id: i,
        top: `${Math.random() * 60}%`,
        left: `${Math.random() * 100}%`,
        width: 80 + Math.random() * 120,
        size: Math.random() * 1 + 0.5,
        delay: `${Math.random() * 3}s`,
        duration: `${Math.random() * 4 + 3}s`,
      }))
    );
  }, [number]);

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      {meteors.map((meteor) => (
        <span
          key={meteor.id}
          className="absolute block h-px bg-linear-to-r from-foreground/40 via-foreground/15 to-transparent opacity-0"
          style={{
            top: meteor.top,
            left: meteor.left,
            width: `${meteor.width}px`,
            height: `${meteor.size}px`,
            animationName: "meteor",
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            animationDelay: meteor.delay,
            animationDuration: meteor.duration,
          }}
        />
      ))}
    </div>
  );
}
