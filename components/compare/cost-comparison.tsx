"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";

// Year-one cost ladder. Vertical column chart for impact.
// Hardware sensor pricing is approximate. Verify before any public claim.
// Last review: 2026-04-30.
const COSTS = [
  {
    name: "Surfr Free",
    cost: 0,
    label: "€0",
    note: "Track everything on phone or watch.",
    highlight: true,
  },
  {
    name: "Surfr Plus",
    cost: 25,
    label: "≈ €25",
    note: "€24.99 / year, billed yearly.",
    highlight: true,
  },
  {
    name: "Hardware sensor",
    cost: 229,
    label: "≈ €229",
    note: "Sensor required. App is free.",
    highlight: false,
  },
] as const;

const MAX = Math.max(...COSTS.map((c) => c.cost));
const CHART_HEIGHT = 280; // px
const MIN_BAR = 6; // px so the €0 column reads as "exists"

export function CostComparison() {
  return (
    <Section>
      <SectionHeader
        eyebrow="First year"
        title={
          <>
            What it costs to start <em>tracking</em>.
          </>
        }
        description="Year-one ballpark. Hardware trackers front-load the cost. Surfr lets you start free and upgrade only if you want more."
      />

      <div
        className="mx-auto mt-16 flex w-full max-w-[640px] items-end justify-center gap-10 px-6 sm:gap-16"
        style={{ height: CHART_HEIGHT + 80 }}
      >
        {COSTS.map((item, i) => {
          const heightPx =
            item.cost === 0
              ? MIN_BAR
              : Math.max(MIN_BAR, (item.cost / MAX) * CHART_HEIGHT);

          return (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="flex flex-1 flex-col items-center"
            >
              {/* Amount label, sits just above the bar */}
              <span
                className={`mb-3 text-[18px] font-bold tabular-nums ${
                  item.highlight
                    ? "text-(--color-cyan-ink)"
                    : "text-(--color-ink)"
                }`}
              >
                {item.label}
              </span>

              {/* The bar itself */}
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: heightPx }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.7,
                  delay: 0.15 + i * 0.1,
                  ease: "easeOut",
                }}
                className={`w-full max-w-[100px] rounded-t-(--radius-md) ${
                  item.highlight
                    ? "bg-(--color-cyan)"
                    : "bg-(--color-ink-75)"
                }`}
                style={{
                  boxShadow: item.highlight
                    ? "0 8px 24px -6px rgba(1,188,215,0.45)"
                    : "0 8px 24px -6px rgba(20,34,51,0.20)",
                }}
                aria-label={`${item.name}: ${item.label}`}
              />

              {/* Baseline tick — visually anchors all bars to the same line */}
              <div className="h-px w-full bg-(--color-divider)" />

              {/* Name + note below */}
              <div className="mt-4 text-center">
                <div
                  className={`text-[14px] font-bold ${
                    item.highlight
                      ? "text-(--color-cyan-ink)"
                      : "text-(--color-ink)"
                  }`}
                >
                  {item.name}
                </div>
                <div className="mt-1 max-w-[14ch] text-[12px] leading-snug text-(--color-ink-50) mx-auto">
                  {item.note}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
