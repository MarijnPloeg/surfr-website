"use client";

import { motion } from "framer-motion";
import { Quote, MapPin } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  return (
    <Section alternate>
      <SectionHeader
        eyebrow="Riders"
        title={
          <>
            What riders <em>actually</em> say.
          </>
        }
        description="Two real quotes from people we know personally. The third spot is open. See docs/INPUT_NEEDED.md."
      />

      <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-2">
        {TESTIMONIALS.map((t, i) => (
          <motion.figure
            key={t.author}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="rounded-(--radius-md) border border-(--color-card-border) bg-(--color-card) p-8 shadow-[var(--shadow-card)]"
          >
            <Quote
              size={28}
              className="text-(--color-cyan-ink)"
              strokeWidth={1.5}
            />
            <blockquote className="mt-4 text-[16px] leading-relaxed text-(--color-ink-90)">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3 border-t border-(--color-divider) pt-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-(--color-cyan-15) text-[13px] font-bold text-(--color-cyan-ink)">
                {t.author
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join("")}
              </div>
              <div>
                <p className="text-[14px] font-semibold text-(--color-ink)">
                  {t.author}
                </p>
                <p className="text-[12px] text-(--color-ink-60)">{t.role}</p>
              </div>
              {t.spot && (
                <span className="ml-auto inline-flex items-center gap-1 text-[12px] text-(--color-ink-50)">
                  <MapPin size={12} />
                  {t.spot}
                </span>
              )}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </Section>
  );
}
