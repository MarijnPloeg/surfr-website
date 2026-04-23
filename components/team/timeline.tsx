"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";

const milestones = [
  {
    year: "2019",
    title: "Founded",
    description:
      "Surfr launched as the first app to accurately track kitesurfing jump heights using just a phone.",
  },
  {
    year: "2021",
    title: "10K Users",
    description:
      "Reached 10,000 active riders and launched Apple Watch support for wrist-only tracking.",
  },
  {
    year: "2023",
    title: "50K Users",
    description:
      "Became the official tracking app for the Big Air Kite League and GKA competitions.",
  },
  {
    year: "2024",
    title: "100K Users",
    description:
      "Hit 100,000 active riders across 120+ countries with 1M+ sessions tracked.",
  },
  {
    year: "2026",
    title: "Surfr 4.0",
    description:
      "Complete redesign with social feeds, new Discover tab, WearOS 2.0, and smart wind intelligence.",
  },
] as const;

export function TeamTimeline() {
  return (
    <Section alternate>
      <SectionHeader
        badge="Our Journey"
        title="From side project to global community"
      />

      <div className="mx-auto mt-16 max-w-2xl">
        {milestones.map((milestone, i) => (
          <motion.div
            key={milestone.year}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="relative flex gap-6 pb-10 last:pb-0"
          >
            {/* Timeline line */}
            <div className="flex flex-col items-center">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-xs font-bold text-white">
                {milestone.year.slice(2)}
              </div>
              {i < milestones.length - 1 && (
                <div className="w-px grow bg-[var(--color-border)]" />
              )}
            </div>

            {/* Content */}
            <div className="pb-2 pt-1.5">
              <h3 className="text-base">
                {milestone.year} — {milestone.title}
              </h3>
              <p className="mt-1 text-sm text-[var(--color-secondary)]">
                {milestone.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
