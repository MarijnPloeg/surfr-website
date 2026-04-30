"use client";

import { motion } from "framer-motion";
import { COMPARE_TABLE } from "@/lib/constants";

type Cell = boolean | "partial" | string;

/**
 * Counts capability "wins" per competitor by walking the COMPARE_TABLE rows.
 * Boolean true                    → 1
 * "partial"                       → 0.5
 * String containing "Free"        → 1 (positive)
 * Anything else (paid / sensor)   → 0
 */
function scoreCell(value: Cell): number {
  if (value === true) return 1;
  if (value === false) return 0;
  if (value === "partial") return 0.5;
  if (typeof value === "string" && value.toLowerCase().includes("free")) {
    return 1;
  }
  return 0;
}

const TOTAL = COMPARE_TABLE.rows.length;

const SCORES = COMPARE_TABLE.competitors.map((c) => ({
  ...c,
  score: COMPARE_TABLE.rows.reduce(
    (sum, row) => sum + scoreCell(row.cells[c.id]),
    0,
  ),
}));

export function CapabilityScorecard() {
  return (
    <div className="mx-auto mt-14 max-w-2xl">
      <div className="space-y-4">
        {SCORES.map((c, i) => {
          const pct = (c.score / TOTAL) * 100;
          const isSurfr = c.id === "surfr";
          return (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="flex items-center gap-4"
            >
              <span
                className={`w-[140px] shrink-0 text-[14px] font-bold ${
                  isSurfr ? "text-(--color-cyan-ink)" : "text-(--color-ink)"
                }`}
              >
                {c.name}
              </span>
              <div className="relative h-3 flex-1 overflow-hidden rounded-full bg-(--color-ink-15)">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${pct}%` }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.7,
                    delay: 0.1 + i * 0.08,
                    ease: "easeOut",
                  }}
                  className={`h-full rounded-full ${
                    isSurfr ? "bg-(--color-cyan)" : "bg-(--color-ink-50)"
                  }`}
                />
              </div>
              <span className="w-[70px] shrink-0 text-right text-[13px] font-semibold tabular-nums text-(--color-ink-75)">
                {c.score % 1 === 0 ? c.score : c.score.toFixed(1)} / {TOTAL}
              </span>
            </motion.div>
          );
        })}
      </div>
      <p className="mt-6 text-center text-[13px] text-(--color-ink-50)">
        Capability count from the table above. Partial support counts as 0.5.
      </p>
    </div>
  );
}
