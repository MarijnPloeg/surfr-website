"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { HOW_IT_WORKS } from "@/lib/constants";
import { Download, Activity, TrendingUp } from "lucide-react";

const iconMap = {
  Download,
  Activity,
  TrendingUp,
} as const;

export function HowItWorks() {
  return (
    <Section>
      <SectionHeader
        badge="How It Works"
        title="From beach to leaderboard in 3 steps"
        description="Surfr makes it effortless to track every session and see exactly how you're progressing."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-3 md:gap-12">
        {HOW_IT_WORKS.map((step, i) => {
          const Icon = iconMap[step.icon];
          return (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-accent-tint)]">
                <Icon
                  size={28}
                  className="text-[var(--color-primary)]"
                  strokeWidth={1.5}
                />
              </div>
              <span className="text-sm font-bold text-[var(--color-primary)]">
                {step.step}
              </span>
              <h3 className="mt-2">{step.title}</h3>
              <p className="mt-3 text-[var(--color-secondary)]">
                {step.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
