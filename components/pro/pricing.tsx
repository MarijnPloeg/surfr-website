"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Check, X, Minus } from "lucide-react";
import { COMPARISON_TABLE, type ComparisonValue } from "@/lib/constants";

function CellValue({ value }: { value: ComparisonValue }) {
  if (value === true) {
    return <Check size={16} className="mx-auto text-[var(--color-primary)]" />;
  }
  if (value === false) {
    return <X size={16} className="mx-auto text-[var(--color-muted)]/40" />;
  }
  return (
    <span className="text-xs font-medium text-[var(--color-secondary)]">
      {value}
    </span>
  );
}

const categories = [
  "Recording",
  "Session Details",
  "Wind",
  "Spots",
  "Social & Extras",
] as const;

export function Pricing() {
  return (
    <Section id="pricing" alternate>
      <SectionHeader
        badge="Full Comparison"
        title="Every feature, every plan"
        description="See exactly what's included in Free, Plus, and PRO."
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto mt-12 max-w-3xl overflow-x-auto"
      >
        <div className="min-w-[500px] overflow-hidden rounded-2xl bg-white shadow-[var(--shadow-md)]">
          {/* Header */}
          <div className="grid grid-cols-[1fr_70px_70px_70px] border-b border-[var(--color-border)] px-5 py-4 sm:grid-cols-[1fr_80px_80px_80px]">
            <div className="text-sm font-semibold text-[var(--color-dark)]">
              Feature
            </div>
            <div className="text-center text-sm font-semibold text-[var(--color-secondary)]">
              Free
            </div>
            <div className="text-center text-sm font-semibold text-[var(--color-plus)]">
              Plus
            </div>
            <div className="text-center text-sm font-semibold text-[var(--color-primary)]">
              PRO
            </div>
          </div>

          {/* Rows grouped by category */}
          {categories.map((category) => {
            const rows = COMPARISON_TABLE.filter(
              (r) => r.category === category
            );
            return (
              <div key={category}>
                {/* Category header */}
                <div className="border-b border-[var(--color-border)] bg-[var(--color-light-bg)] px-5 py-2.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">
                    {category}
                  </span>
                </div>
                {/* Feature rows */}
                {rows.map((row) => (
                  <div
                    key={row.feature}
                    className="grid grid-cols-[1fr_70px_70px_70px] border-b border-[var(--color-border)] px-5 py-3 last:border-b-0 sm:grid-cols-[1fr_80px_80px_80px]"
                  >
                    <div className="text-sm text-[var(--color-body)]">
                      {row.feature}
                    </div>
                    <div className="flex items-center justify-center">
                      <CellValue value={row.free} />
                    </div>
                    <div className="flex items-center justify-center">
                      <CellValue value={row.plus} />
                    </div>
                    <div className="flex items-center justify-center">
                      <CellValue value={row.pro} />
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </motion.div>
    </Section>
  );
}
