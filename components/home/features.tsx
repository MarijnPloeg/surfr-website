"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Wind, Compass, Radio, Users, Trophy } from "lucide-react";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { PhoneMockup } from "@/components/ui/phone-mockup";
import { CORE_FEATURES } from "@/lib/constants";
import { ACCENTS } from "@/lib/accents";

const iconMap = {
  Zap,
  Wind,
  Compass,
  Radio,
  Users,
  Trophy,
} as const;

// Three teaser cards on the homepage. The other features live on /features.
// Edit this list to swap which features get a homepage spot.
const HOMEPAGE_FEATURE_EYEBROWS: readonly string[] = [
  "Session Tracking",
  "Wind & Forecasts",
  "Live on the Water",
];

export function Features() {
  const featured = HOMEPAGE_FEATURE_EYEBROWS.map((eyebrow) =>
    CORE_FEATURES.find((f) => f.eyebrow === eyebrow),
  ).filter((f): f is (typeof CORE_FEATURES)[number] => f !== undefined);

  return (
    <Section id="features" alternate>
      <SectionHeader
        eyebrow="Features"
        title={
          <>
            Built for the people <em>actually</em> on the water.
          </>
        }
        description="A few things Surfr does well. The full story lives on the features page."
      />

      <div className="mt-16 grid gap-14 md:grid-cols-3 md:gap-8 lg:gap-12">
        {featured.map((feature, i) => {
          const Icon = iconMap[feature.icon];
          const accent = ACCENTS[feature.accent];
          const screenshot =
            "screenshot" in feature ? feature.screenshot : undefined;
          const teaser =
            "teaser" in feature ? feature.teaser : feature.description;

          return (
            <motion.article
              key={feature.eyebrow}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col"
            >
              <div className="flex justify-center">
                <div
                  className="relative inline-block"
                  style={{ filter: `drop-shadow(${accent.glow})` }}
                >
                  <PhoneMockup
                    screenshot={screenshot}
                    alt={feature.eyebrow}
                    fallbackDescribes={feature.screenshotDesc}
                    className="w-[220px]"
                  />
                </div>
              </div>

              <div className="mt-8">
                <div className="flex items-center gap-2.5">
                  <div
                    className="flex h-8 w-8 items-center justify-center rounded-(--radius-sm)"
                    style={{ backgroundColor: accent.bg, color: accent.fg }}
                  >
                    <Icon size={16} strokeWidth={1.75} />
                  </div>
                  <span
                    className="font-[family-name:var(--font-roboto-condensed)] text-[12px] font-bold uppercase tracking-[0.18em]"
                    style={{ color: accent.fg }}
                  >
                    {feature.eyebrow}
                  </span>
                </div>

                <h3 className="mt-3 text-[24px] leading-[1.15] font-bold">
                  {feature.headline}
                </h3>

                <p className="mt-3 text-[15px] leading-relaxed text-(--color-ink-75)">
                  {teaser}
                </p>

                <Link
                  href="/features"
                  className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-(--color-cyan-ink) transition-colors hover:text-(--color-cyan-ink-hover)"
                >
                  Learn more
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.article>
          );
        })}
      </div>

      <div className="mt-16 flex justify-center">
        <Button href="/features" size="lg" variant="ghost">
          See all features
        </Button>
      </div>
    </Section>
  );
}
