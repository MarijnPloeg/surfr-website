"use client";

import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { COMPARE_TABLE } from "@/lib/constants";
import { CapabilityScorecard } from "@/components/compare/capability-scorecard";

type CompareCell = boolean | "partial" | string;

function Cell({ value }: { value: CompareCell }) {
  if (value === true) {
    return (
      <span
        className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-(--color-cyan-15) text-(--color-cyan-ink)"
        aria-label="Yes"
      >
        <Check size={16} strokeWidth={2.5} />
      </span>
    );
  }
  if (value === false) {
    return (
      <span
        className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-(--color-ink-15) text-(--color-ink-50)"
        aria-label="No"
      >
        <X size={16} strokeWidth={2} />
      </span>
    );
  }
  if (value === "partial") {
    return (
      <span
        className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-(--color-ink-15) text-(--color-ink-75)"
        aria-label="Partial"
      >
        <Minus size={16} strokeWidth={2.5} />
      </span>
    );
  }
  return (
    <span className="text-[13px] font-medium text-(--color-ink-90)">
      {value}
    </span>
  );
}

export function CompetitiveTable() {
  return (
    <Section id="vs-others" alternate>
      <SectionHeader
        eyebrow="vs the alternatives"
        title={
          <>
            Side by side, <em>honestly</em>.
          </>
        }
        description="What Surfr does on its own, and where the alternatives still earn their place."
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="mx-auto mt-12 max-w-4xl overflow-x-auto"
      >
        <table className="w-full min-w-[560px] border-collapse text-left">
          <thead>
            <tr className="border-b border-(--color-divider)">
              <th className="py-4 pr-4 font-[family-name:var(--font-roboto-condensed)] text-[12px] font-bold uppercase tracking-[0.18em] text-(--color-ink-60)">
                Capability
              </th>
              {COMPARE_TABLE.competitors.map((c) => (
                <th
                  key={c.id}
                  className={`py-4 px-3 text-center text-[14px] font-bold ${
                    c.id === "surfr"
                      ? "text-(--color-cyan-ink)"
                      : "text-(--color-ink)"
                  }`}
                >
                  {c.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {COMPARE_TABLE.rows.map((row) => (
              <tr
                key={row.label}
                className="border-b border-(--color-divider) last:border-b-0"
              >
                <th
                  scope="row"
                  className="py-4 pr-4 text-[14px] font-medium text-(--color-ink-90)"
                >
                  {row.label}
                  {row.note && (
                    <span className="ml-1 block text-[12px] font-normal text-(--color-ink-50)">
                      {row.note}
                    </span>
                  )}
                </th>
                {COMPARE_TABLE.competitors.map((c) => (
                  <td
                    key={c.id}
                    className="py-4 px-3 text-center"
                    style={
                      c.id === "surfr"
                        ? { backgroundColor: "var(--color-cyan-15)" }
                        : undefined
                    }
                  >
                    <Cell value={row.cells[c.id]} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      <CapabilityScorecard />
    </Section>
  );
}
