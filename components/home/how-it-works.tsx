"use client";

import { motion } from "framer-motion";
import { Download, Activity, TrendingUp } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { HOW_IT_WORKS } from "@/lib/constants";

const iconMap = {
  Download,
  Activity,
  TrendingUp,
} as const;

export function HowItWorks() {
  return (
    <Section>
      <SectionHeader
        eyebrow="How it works"
        title={
          <>
            From beach to feed in <em>three steps</em>.
          </>
        }
        description="No setup. No fiddling. Surfr starts the moment you ride and stops when you're done."
      />

      <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
        {HOW_IT_WORKS.map((step, i) => {
          const Icon = iconMap[step.icon];
          return (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-(--radius-md) bg-(--color-cyan-15) text-(--color-cyan-ink)">
                <Icon size={22} strokeWidth={1.75} />
              </div>
              <span className="mt-5 inline-block font-[family-name:var(--font-roboto-condensed)] text-[12px] font-bold tracking-[0.18em] text-(--color-cyan-ink)">
                {step.step}
              </span>
              <h3 className="mt-2 text-[22px] leading-[1.2]">{step.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-(--color-ink-75)">
                {step.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
