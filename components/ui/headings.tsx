import type { ElementType, ReactNode } from "react";

interface HeadingProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
}

/**
 * Display heading — homepage hero, top-of-page moments.
 * Fluid: clamp(48px, 7vw, 96px). Use <em> for italic-cyan accent.
 */
export function DisplayHeading({ as: As = "h1", children, className = "" }: HeadingProps) {
  return (
    <As
      className={`text-[clamp(48px,7vw,96px)] font-bold leading-[0.98] tracking-[-0.035em] text-balance ${className}`}
    >
      {children}
    </As>
  );
}

/**
 * Section heading — opens a page-level section.
 * Fluid: clamp(36px, 5vw, 64px). Use <em> for italic-cyan accent.
 */
export function SectionHeading({ as: As = "h2", children, className = "" }: HeadingProps) {
  return (
    <As
      className={`text-[clamp(36px,5vw,64px)] font-bold leading-[1.02] tracking-[-0.03em] text-balance ${className}`}
    >
      {children}
    </As>
  );
}

/**
 * Feature heading — for individual feature blocks within a section.
 * Fluid: clamp(28px, 3.2vw, 44px).
 */
export function FeatureHeading({ as: As = "h3", children, className = "" }: HeadingProps) {
  return (
    <As
      className={`text-[clamp(28px,3.2vw,44px)] font-bold leading-[1.05] tracking-[-0.025em] ${className}`}
    >
      {children}
    </As>
  );
}

/**
 * Lede — the paragraph that immediately follows a Display/Section heading.
 * Sized larger than body, slightly muted, with a measure cap so it stays
 * readable at hero scale.
 */
export function Lede({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={`max-w-[60ch] text-[18px] leading-[1.5] text-(--color-ink-75) text-pretty ${className}`}
    >
      {children}
    </p>
  );
}
