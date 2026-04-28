interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  /** A live/pulse cyan dot before the label — for "live" status, "now shipping", etc. */
  withDot?: boolean;
}

/**
 * Hero pill / inline badge.
 * Pattern: cyan-15 fill, cyan-30 border, cyan-ink text. Pill-shaped.
 */
export function Badge({ children, className = "", withDot = false }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 rounded-full bg-(--color-cyan-15) px-3.5 py-1.5 text-[12px] font-semibold text-(--color-cyan-ink) ring-1 ring-inset ring-(--color-cyan-30) ${className}`}
    >
      {withDot && (
        <span aria-hidden className="relative inline-flex h-1.5 w-1.5">
          <span className="absolute inset-0 rounded-full bg-(--color-cyan)" />
          <span className="absolute inset-0 animate-ping rounded-full bg-(--color-cyan-50)" />
        </span>
      )}
      {children}
    </span>
  );
}
