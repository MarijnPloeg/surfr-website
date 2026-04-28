"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

interface CountUpProps {
  /** Final value as it should display, e.g. "100K+", "1M+", "120+", "4.9". */
  value: string;
  /** Optional duration override in seconds. */
  duration?: number;
  className?: string;
}

interface ParsedStat {
  prefix: string;
  num: number;
  suffix: string;
  decimals: number;
}

/**
 * Pulls a leading-or-trailing-symbol number out of a marketing stat string.
 *   "100K+" → { num: 100, suffix: "K+", decimals: 0 }
 *   "1M+"   → { num: 1, suffix: "M+", decimals: 0 }
 *   "120+"  → { num: 120, suffix: "+", decimals: 0 }
 *   "4.9"   → { num: 4.9, suffix: "", decimals: 1 }
 *   "$3.99" → { prefix: "$", num: 3.99, suffix: "", decimals: 2 }
 */
function parseStat(v: string): ParsedStat {
  const match = v.match(/^([^\d-]*)(-?[\d.]+)([^\d.]*)$/);
  if (!match) return { prefix: "", num: 0, suffix: v, decimals: 0 };
  const [, prefix, numStr, suffix] = match;
  const num = parseFloat(numStr);
  const decimals = (numStr.split(".")[1] || "").length;
  return { prefix, num, suffix, decimals };
}

function format(parsed: ParsedStat, latest: number): string {
  return `${parsed.prefix}${latest.toFixed(parsed.decimals)}${parsed.suffix}`;
}

/**
 * CountUp — animates a stat string from 0 → final when it enters viewport.
 *
 *  • SSR-safe: server-renders the final value, so HTML is correct for
 *    SEO and no-JS users. Briefly drops to 0 and animates up on first
 *    intersect; tradeoff is acceptable for above-the-fold cases.
 *  • Respects prefers-reduced-motion via Framer's useReducedMotion.
 *  • Triggers once per mount.
 */
export function CountUp({ value, duration, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(value);
      return;
    }

    const parsed = parseStat(value);
    // Start the visible animation from zero
    setDisplay(format(parsed, 0));

    const controls = animate(0, parsed.num, {
      duration: duration ?? (parsed.num < 10 ? 1.4 : 1.2),
      ease: [0.16, 1, 0.3, 1], // expo-out — punchy entry, smooth landing
      onUpdate: (latest) => setDisplay(format(parsed, latest)),
      onComplete: () => setDisplay(value),
    });

    return () => controls.stop();
  }, [inView, value, duration, reduce]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
