"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { WATCH_OPTIONS } from "@/lib/constants";

export function WatchOptions() {
  return (
    <Section id="watch-options" alternate>
      <SectionHeader
        eyebrow="Watch options"
        title={
          <>
            Apple, Wear OS, or <em>Garmin</em>.
          </>
        }
        description="Surfr runs on all three. Compatibility varies by model."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-3 md:gap-6 lg:gap-8">
        {WATCH_OPTIONS.map((option, i) => (
          <motion.article
            key={option.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex flex-col rounded-(--radius-lg) border border-(--color-divider) bg-(--color-page) p-7 transition-colors hover:border-(--color-ink-25)"
          >
            <h3 className="text-[20px] leading-[1.2] font-bold text-(--color-ink)">
              {option.name}
            </h3>
            <p className="mt-4 text-[14px] leading-relaxed text-(--color-ink-75)">
              {option.compatibility}
            </p>
            <div className="mt-5 flex-1" />
            <p className="border-t border-(--color-divider) pt-4 text-[13px] leading-relaxed text-(--color-ink-60)">
              {option.note}
            </p>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
