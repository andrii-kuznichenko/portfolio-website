import { cn } from "@/lib/utils";

interface DotPatternProps {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  cx?: number;
  cy?: number;
  cr?: number;
  className?: string;
  gapX?: number;
  gapY?: number;
}

export function DotPattern({
  width = 16,
  height = 16,
  x = 0,
  y = 0,
  cx = 1,
  cy = 1,
  cr = 1,
  className,
  gapX,
  gapY,
  ...props
}: DotPatternProps) {
  const patternWidth = gapX ? width + gapX : width;
  const patternHeight = gapY ? height + gapY : height;

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-neutral-400/20",
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id="dot-pattern"
          width={patternWidth}
          height={patternHeight}
          patternUnits="userSpaceOnUse"
          patternTransform={`translate(${x} ${y})`}
        >
          <circle cx={cx} cy={cy} r={cr} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dot-pattern)" />
    </svg>
  );
}
