"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PhoneMockup } from "@/components/ui/phone-mockup";
import { PRICING_TEASER } from "@/lib/constants";
import { Wind, BarChart3, MapPin, Watch, Headphones, Navigation, Zap } from "lucide-react";

const plusHighlights = [
  { icon: Wind, label: "Wind forecasts & alerts" },
  { icon: BarChart3, label: "Full session details" },
  { icon: MapPin, label: "Spot statistics" },
] as const;

const proHighlights = [
  { icon: Watch, label: "Watch tracking" },
  { icon: Headphones, label: "On-board coaching" },
  { icon: Navigation, label: "Downwinder navigation" },
] as const;

export function ProTeaser() {
  return (
    <Section>
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Left: Phone mockup */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <PhoneMockup
            size="lg"
            placeholder={
              <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-b from-[var(--color-dark)] to-[var(--color-dark-surface)]">
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-primary)]">
                  PRO
                </span>
                <Zap
                  size={48}
                  className="mt-4 text-[var(--color-primary)]"
                  strokeWidth={1}
                />
              </div>
            }
          />
        </motion.div>

        {/* Right: Copy */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Badge>{PRICING_TEASER.badge}</Badge>
          <h2 className="mt-4">{PRICING_TEASER.headline}</h2>
          <p className="mt-4 text-lg text-[var(--color-secondary)]">
            {PRICING_TEASER.description}
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {/* Plus highlights */}
            <div>
              <span className="text-sm font-semibold text-[var(--color-plus)]">
                Plus
              </span>
              <div className="mt-3 space-y-3">
                {plusHighlights.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2.5">
                    <Icon size={15} className="shrink-0 text-[var(--color-plus)]" />
                    <span className="text-sm text-[var(--color-body)]">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* PRO highlights */}
            <div>
              <span className="text-sm font-semibold text-[var(--color-primary)]">
                PRO
              </span>
              <div className="mt-3 space-y-3">
                {proHighlights.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2.5">
                    <Icon
                      size={15}
                      className="shrink-0 text-[var(--color-primary)]"
                    />
                    <span className="text-sm text-[var(--color-body)]">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Button href="/pro" variant="primary" size="lg">
              {PRICING_TEASER.cta}
            </Button>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
