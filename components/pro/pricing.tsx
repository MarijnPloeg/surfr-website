"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { COMPARISON_TABLE, type ComparisonValue } from "@/lib/constants";

function CellValue({ value }: { value: ComparisonValue }) {
  if (value === true) {
    return <Check size={16} className="mx-auto text-(--color-cyan-ink)" />;
  }
  if (value === false) {
    return <X size={16} className="mx-auto text-(--color-ink-25)" />;
  }
  return (
    <span className="text-[12px] font-medium text-(--color-ink-75)">
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
    <Section id="comparison" alternate>
      <SectionHeader
        eyebrow="Full comparison"
        title={
          <>
            Every feature, <em>every plan</em>.
          </>
        }
        description="See exactly what's in Free, Plus, and PRO."
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto mt-12 max-w-3xl overflow-x-auto"
      >
        <div className="min-w-[520px] overflow-hidden rounded-(--radius-md) border border-(--color-card-border) bg-(--color-card)">
          {/* Header row */}
          <div className="grid grid-cols-[1fr_72px_72px_72px] border-b border-(--color-divider) px-5 py-4 sm:grid-cols-[1fr_84px_84px_84px]">
            <div className="text-[13px] font-semibold text-(--color-ink)">
              Feature
            </div>
            <div className="text-center text-[13px] font-semibold text-(--color-ink-60)">
              Free
            </div>
            <div className="text-center text-[13px] font-semibold text-(--color-tier-plus)">
              Plus
            </div>
            <div className="text-center text-[13px] font-semibold text-(--color-cyan-ink)">
              PRO
            </div>
          </div>

          {categories.map((category) => {
            const rows = COMPARISON_TABLE.filter(
              (r) => r.category === category,
            );
            return (
              <div key={category}>
                <div className="border-b border-(--color-divider) bg-(--color-card-alt) px-5 py-2.5">
                  <span className="font-[family-name:var(--font-roboto-condensed)] text-[11px] font-bold uppercase tracking-[0.18em] text-(--color-ink-60)">
                    {category}
                  </span>
                </div>
                {rows.map((row) => (
                  <div
                    key={row.feature}
                    className="grid grid-cols-[1fr_72px_72px_72px] border-b border-(--color-divider) px-5 py-3 last:border-b-0 sm:grid-cols-[1fr_84px_84px_84px]"
                  >
                    <div className="text-[14px] text-(--color-ink-90)">
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
