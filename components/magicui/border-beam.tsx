"use client";

import { cn } from "@/lib/utils";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
}

export function BorderBeam({
  className,
  size = 200,
  duration = 12,
  colorFrom = "#4ade80",
  colorTo = "#22c55e",
  delay = 0,
}: BorderBeamProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden",
        className
      )}
    >
      <div
        className="absolute inset-0 rounded-[inherit]"
        style={
          {
            "--border-beam-size": `${size}px`,
            "--border-beam-duration": `${duration}s`,
            "--border-beam-color-from": colorFrom,
            "--border-beam-color-to": colorTo,
            "--border-beam-delay": `${delay}s`,
          } as React.CSSProperties
        }
      >
        <div
          className="absolute inset-[-1px] rounded-[inherit]"
          style={{
            background: `conic-gradient(from 0deg, transparent 0%, ${colorFrom} 10%, ${colorTo} 20%, transparent 30%)`,
            animation: `spin ${duration}s linear infinite`,
            animationDelay: `${delay}s`,
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            padding: "1px",
          }}
        />
      </div>
    </div>
  );
}
