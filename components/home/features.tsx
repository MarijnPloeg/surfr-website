"use client";

import { motion } from "framer-motion";
import { Check, Zap, Wind, Compass, Radio, Users, Trophy } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { FeatureHeading } from "@/components/ui/headings";
import { PhoneMockup } from "@/components/ui/phone-mockup";
import { WatchMockup } from "@/components/ui/watch-mockup";
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

export function Features() {
  return (
    <Section id="features" alternate>
      <SectionHeader
        eyebrow="Features"
        title={
          <>
            Built for the people <em>actually</em> on the water.
          </>
        }
        description="Six things Surfr does well, and the technical detail behind why each one is honest."
      />

      <div className="mt-20 space-y-24 lg:space-y-28">
        {CORE_FEATURES.map((feature, i) => {
          const Icon = iconMap[feature.icon];
          const isReversed = i % 2 !== 0;
          const accent = ACCENTS[feature.accent];

          return (
            <motion.div
              key={feature.eyebrow}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
                isReversed ? "lg:[direction:rtl]" : ""
              }`}
            >
              {/* Copy */}
              <div className={isReversed ? "lg:[direction:ltr]" : ""}>
                <div className="mb-5 flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-(--radius-md)"
                    style={{ backgroundColor: accent.bg, color: accent.fg }}
                  >
                    <Icon size={20} strokeWidth={1.75} />
                  </div>
                  <span
                    className="font-[family-name:var(--font-roboto-condensed)] text-[12px] font-bold uppercase tracking-[0.18em]"
                    style={{ color: accent.fg }}
                  >
                    {feature.eyebrow}
                  </span>
                </div>

                <FeatureHeading>{feature.headline}</FeatureHeading>

                <p className="mt-5 max-w-[55ch] text-[17px] leading-relaxed text-(--color-ink-75)">
                  {feature.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {feature.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-3 text-[15px] text-(--color-ink-90)"
                    >
                      <Check
                        size={18}
                        className="mt-0.5 shrink-0"
                        style={{ color: accent.fg }}
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual — phone gets a colored halo matching the feature accent.
                  Session Tracking (the watch's killer feature) gets a watch
                  overlapping the phone's bottom-right, like the hero. */}
              <div
                className={`flex justify-center ${isReversed ? "lg:[direction:ltr]" : ""}`}
              >
                <div
                  className="relative inline-block"
                  style={{ filter: `drop-shadow(${accent.glow})` }}
                >
                  <PhoneMockup
                    alt={feature.eyebrow}
                    fallbackDescribes={feature.screenshotDesc}
                    className="w-[280px]"
                  />
                  {feature.icon === "Zap" && (
                    <div className="absolute -right-8 bottom-[14%] z-10 w-[120px]">
                      <WatchMockup
                        // screenshot="/screenshots/watch-jump.png"
                        alt="Apple Watch — jump detected with height"
                        fallbackDescribes="Apple Watch · jump detected with height number"
                        className="w-full"
                      />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
