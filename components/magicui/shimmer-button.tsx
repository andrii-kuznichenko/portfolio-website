"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children: React.ReactNode;
}

export function ShimmerButton({
  shimmerColor = "#ffffff",
  shimmerSize = "0.1em",
  shimmerDuration = "1.5s",
  borderRadius = "8px",
  background = "rgba(0,0,0,0.9)",
  className,
  children,
  ...props
}: ShimmerButtonProps) {
  return (
    <button
      style={
        {
          "--shimmer-color": shimmerColor,
          "--radius": borderRadius,
          "--shimmer-size": shimmerSize,
          "--speed": shimmerDuration,
          "--bg": background,
          borderRadius,
          background: "var(--bg)",
        } as React.CSSProperties
      }
      className={cn(
        "group relative z-0 flex cursor-pointer items-center justify-center gap-2 overflow-hidden whitespace-nowrap border border-white/10 px-5 py-2.5 text-white",
        "text-sm font-medium",
        "transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px",
        className
      )}
      {...props}
    >
      {/* Shimmer layer */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ borderRadius }}
      >
        <div
          className="absolute -inset-[200%] animate-[spin_3s_linear_infinite]"
          style={{
            background: `conic-gradient(from 0deg, transparent 0deg 270deg, var(--shimmer-color) 360deg)`,
            opacity: 0.12,
          }}
        />
      </div>
      {/* Highlight */}
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          borderRadius,
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.08) 0%, transparent 70%)",
        }}
      />
      <span className="relative z-10">{children}</span>
    </button>
  );
}
