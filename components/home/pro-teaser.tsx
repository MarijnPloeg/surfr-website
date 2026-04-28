"use client";

import { motion } from "framer-motion";
import { Wind, BarChart3, MapPin, Watch, Headphones, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionHeading } from "@/components/ui/headings";
import { PhoneMockup } from "@/components/ui/phone-mockup";
import { PRICING_TEASER } from "@/lib/constants";

const plusHighlights = [
  { icon: Wind, label: "Wind forecasts & alerts" },
  { icon: BarChart3, label: "Full session analytics" },
  { icon: MapPin, label: "Live Map & spot statistics" },
] as const;

const proHighlights = [
  { icon: Watch, label: "Watch tracking" },
  { icon: Headphones, label: "On-board coaching" },
  { icon: Navigation, label: "Downwinder navigation" },
] as const;

export function ProTeaser() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 lg:py-32">
      {/* Subtle cyan corner-glow — quieter than Wind Games band */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-32 h-[420px] w-[420px] rounded-full bg-(--color-cyan) opacity-[0.10] blur-[120px]"
      />
      <div className="relative mx-auto max-w-[1200px] px-6 md:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="flex justify-center lg:order-2 lg:justify-end"
        >
          <PhoneMockup
            // screenshot="/screenshots/pro-insights.png"
            alt="Surfr PRO Insights. Per-jump score with POP chart"
            fallbackDescribes="PRO Insights screen · per-jump score with POP chart"
            className="w-[280px]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
          className="lg:order-1"
        >
          <Eyebrow>{PRICING_TEASER.eyebrow}</Eyebrow>
          <SectionHeading className="mt-5">
            <span
              dangerouslySetInnerHTML={{ __html: PRICING_TEASER.headlineHtml }}
            />
          </SectionHeading>
          <p className="mt-5 max-w-[55ch] text-[17px] leading-relaxed text-(--color-ink-75)">
            {PRICING_TEASER.description}
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {/* Plus column */}
            <div>
              <span className="font-[family-name:var(--font-roboto-condensed)] text-[12px] font-bold uppercase tracking-[0.18em] text-(--color-tier-plus)">
                Plus
              </span>
              <ul className="mt-3 space-y-2.5">
                {plusHighlights.map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="flex items-center gap-2.5 text-[14px] text-(--color-ink-90)"
                  >
                    <Icon size={15} className="shrink-0 text-(--color-tier-plus)" />
                    {label}
                  </li>
                ))}
              </ul>
            </div>

            {/* PRO column */}
            <div>
              <span className="font-[family-name:var(--font-roboto-condensed)] text-[12px] font-bold uppercase tracking-[0.18em] text-(--color-cyan-ink)">
                PRO
              </span>
              <ul className="mt-3 space-y-2.5">
                {proHighlights.map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="flex items-center gap-2.5 text-[14px] text-(--color-ink-90)"
                  >
                    <Icon size={15} className="shrink-0 text-(--color-cyan-ink)" />
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-9">
            <Button href="/pro" variant="primary" size="lg">
              {PRICING_TEASER.cta}
            </Button>
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  );
}
