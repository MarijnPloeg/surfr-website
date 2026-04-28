interface EyebrowProps {
  children: React.ReactNode;
  noBar?: boolean;
  className?: string;
}

/**
 * Eyebrow — small condensed-uppercase label above a heading.
 * Includes a 24px cyan hairline by default. Use `noBar` to suppress.
 *
 * Pattern:
 *   <Eyebrow>Features</Eyebrow>
 *   <SectionHeading>Know <em>it</em> happened.</SectionHeading>
 *   <Lede>...</Lede>
 */
export function Eyebrow({ children, noBar = false, className = "" }: EyebrowProps) {
  return (
    <span
      className={`inline-flex items-center gap-[10px] font-[family-name:var(--font-roboto-condensed)] text-[12px] font-bold uppercase tracking-[0.18em] text-(--color-cyan-ink) ${className}`}
    >
      {!noBar && (
        <span
          aria-hidden
          className="inline-block h-[2px] w-8 rounded-full bg-(--color-cyan) shadow-[0_0_8px_rgba(1,188,215,0.5)]"
        />
      )}
      {children}
    </span>
  );
}
