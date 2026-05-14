"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";

// Copy sourced strictly from existing materials:
// - "Recording your session" (support article): "Place your phone in a
//   waterproof pouch and tuck it into your wetsuit. Volume up!"
// - "What is the best way to track a Surfr. session?" (support article):
//   "If you're just starting out, you can use your phone for free to measure
//   your jumps with impressive accuracy." / "Taking a watch on the water is
//   the simplest and most effective way to track your session. You'll see
//   your jump height instantly on the screen."
// - Live thesurfr.app/compare page: "100% FREE tracking" / "Just take the
//   device you already have" / "Quick, easy while supporting almost most
//   features".
const SETUPS = [
  {
    id: "pouch",
    name: "Phone in a wetsuit pouch",
    price: "100% FREE",
    headline: "Just take the device you already have.",
    description:
      "Place your phone in a waterproof pouch and tuck it into your wetsuit. Volume up. Audio feedback for jump height while you ride.",
    bestFor:
      "If you're just starting out, you can use your phone for free to measure your jumps with impressive accuracy.",
  },
  {
    id: "watch",
    name: "Smartwatch on the wrist",
    price: "Apple Watch, Wear OS, Garmin",
    headline: "Leave the phone on the beach.",
    description:
      "Taking a watch on the water is the simplest and most effective way to track your session. You'll see your jump height instantly on the screen.",
    bestFor:
      "For the best experience, we recommend using an Apple or Android watch.",
  },
] as const;

export function SetupDecision() {
  return (
    <Section id="setup-decision">
      <SectionHeader
        eyebrow="Pick your setup"
        title={
          <>
            Two ways to track. <em>Same Surfr.AI</em>.
          </>
        }
      />

      {/*
        Subgrid keeps each row (name / headline / description / cost / bestFor)
        aligned across both cards regardless of text length. Falls back to
        independent flex per card on browsers without subgrid support.
      */}
      <div className="mt-14 grid gap-6 md:grid-cols-2 md:grid-rows-[auto_auto_1fr_auto_auto] md:gap-8">
        {SETUPS.map((setup, i) => (
          <motion.article
            key={setup.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex flex-col rounded-(--radius-lg) border border-(--color-divider) bg-(--color-page) p-8 transition-colors hover:border-(--color-ink-25) md:grid md:[grid-template-rows:subgrid] md:row-span-5"
          >
            <span className="font-[family-name:var(--font-roboto-condensed)] text-[11px] font-bold uppercase tracking-[0.18em] text-(--color-cyan-ink)">
              {setup.name}
            </span>
            <h3 className="mt-3 text-[26px] leading-[1.2] font-bold md:mt-3">
              {setup.headline}
            </h3>
            <p className="mt-4 text-[16px] leading-relaxed text-(--color-ink-75)">
              {setup.description}
            </p>

            <div className="mt-7 border-t border-(--color-divider) pt-5 md:mt-0 md:self-end">
              <div className="text-[13px] font-medium text-(--color-ink-50)">
                Cost
              </div>
              <div className="mt-1 text-[16px] font-semibold text-(--color-ink)">
                {setup.price}
              </div>
            </div>

            <p className="mt-5 text-[13px] leading-relaxed text-(--color-ink-60) md:mt-5">
              {setup.bestFor}
            </p>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
