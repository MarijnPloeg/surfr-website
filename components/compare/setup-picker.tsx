"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { SURFR_SETUPS } from "@/lib/constants";

export function SetupPicker() {
  return (
    <Section id="pick-setup">
      <SectionHeader
        eyebrow="Pick your setup"
        title={
          <>
            Already chose Surfr? <em>Pick how you ride</em>.
          </>
        }
        description="Three ways to track. Switch later without losing data."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-3 md:gap-6 lg:gap-8">
        {SURFR_SETUPS.map((setup, i) => (
          <motion.article
            key={setup.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex flex-col rounded-(--radius-lg) border border-(--color-divider) bg-(--color-page) p-7 transition-colors hover:border-(--color-ink-25)"
          >
            <span className="font-[family-name:var(--font-roboto-condensed)] text-[11px] font-bold uppercase tracking-[0.18em] text-(--color-cyan-ink)">
              {setup.name}
            </span>
            <h3 className="mt-3 text-[22px] leading-[1.2] font-bold">
              {setup.headline}
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-(--color-ink-75)">
              {setup.description}
            </p>

            <div className="mt-6 flex-1" />

            <div className="border-t border-(--color-divider) pt-5">
              <div className="text-[13px] font-medium text-(--color-ink-50)">
                Cost
              </div>
              <div className="mt-1 text-[16px] font-semibold text-(--color-ink)">
                {setup.price}
              </div>
            </div>

            <p className="mt-5 text-[13px] leading-relaxed text-(--color-ink-60)">
              {setup.bestFor}
            </p>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
