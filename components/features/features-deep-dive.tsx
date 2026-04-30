"use client";

import { motion } from "framer-motion";
import { Check, Zap, Wind, Compass, Radio, Users, Trophy } from "lucide-react";
import { Section } from "@/components/ui/section";
import { FeatureHeading } from "@/components/ui/headings";
import { PhoneMockup } from "@/components/ui/phone-mockup";
import { JumpGraphCard } from "@/components/features/visuals/jump-graph-card";
import { JumpWatchFace } from "@/components/features/visuals/jump-watch-face";
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

/**
 * Each feature gets its own Section, alternating background.
 * Note: same source data as homepage CORE_FEATURES — but rendered with
 * one feature per section instead of stacked, so the page reads as a
 * deeper dive rather than a repeat.
 *
 * TODO when real screenshots arrive: pair each feature with 1–2 phone
 * screens showing the relevant in-app screen, plus a small "behind the
 * scenes" detail (e.g. for Session Tracking, the jump-arc graphic with
 * the algorithm's confidence interval drawn over it).
 */
export function FeaturesDeepDive() {
  return (
    <>
      {CORE_FEATURES.map((feature, i) => {
        const Icon = iconMap[feature.icon];
        const isReversed = i % 2 !== 0;
        const accent = ACCENTS[feature.accent];

        return (
          <Section key={feature.eyebrow} alternate={i % 2 === 1}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
                isReversed ? "lg:[direction:rtl]" : ""
              }`}
            >
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

              <div
                className={`flex justify-center ${isReversed ? "lg:[direction:ltr]" : ""}`}
              >
                {feature.eyebrow === "Session Tracking" ? (
                  <div className="relative inline-block">
                    <div className="relative inline-block">
                      <div style={{ filter: `drop-shadow(${accent.glow})` }}>
                        <PhoneMockup
                          screenshot={
                            "screenshot" in feature
                              ? feature.screenshot
                              : undefined
                          }
                          alt="Surfr session detail screen"
                          className="w-[280px]"
                        />
                      </div>
                      <div
                        className="absolute z-20 w-[120px]"
                        style={{ bottom: "10%", right: "-92px" }}
                      >
                        <JumpWatchFace className="w-full" />
                      </div>
                    </div>
                    <div
                      className="hidden lg:block"
                      style={{
                        position: "absolute",
                        top: "18%",
                        left: "-218px",
                        width: 260,
                        zIndex: 10,
                        transform: "scale(0.8)",
                        transformOrigin: "top right",
                      }}
                    >
                      <JumpGraphCard />
                    </div>
                    <div className="mx-auto mt-6 w-[260px] max-w-full lg:hidden">
                      <JumpGraphCard />
                    </div>
                  </div>
                ) : (
                  <div
                    className="relative inline-block"
                    style={{ filter: `drop-shadow(${accent.glow})` }}
                  >
                    <PhoneMockup
                      screenshot={
                        "screenshot" in feature ? feature.screenshot : undefined
                      }
                      alt={feature.eyebrow}
                      fallbackDescribes={feature.screenshotDesc}
                      className="w-[300px]"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          </Section>
        );
      })}
    </>
  );
}
