"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { TEAM_TIMELINE } from "@/lib/constants";

export function TeamTimeline() {
  return (
    <Section alternate>
      <SectionHeader
        eyebrow="Timeline"
        title={
          <>
            From side project to <em>global community</em>.
          </>
        }
      />

      <div className="mx-auto mt-16 max-w-2xl">
        {TEAM_TIMELINE.map((m, i) => (
          <motion.div
            key={m.year}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="relative flex gap-6 pb-10 last:pb-0"
          >
            <div className="flex flex-col items-center">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-(--color-cyan) text-[12px] font-bold text-black shadow-[var(--shadow-cyan-soft)]">
                {m.year.slice(2)}
              </div>
              {i < TEAM_TIMELINE.length - 1 && (
                <div className="w-px grow bg-(--color-divider)" />
              )}
            </div>
            <div className="pb-2 pt-1.5">
              <h3 className="text-[18px]">
                {m.year} · {m.title}
              </h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-(--color-ink-75)">
                {m.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
