"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { PhoneMockup } from "@/components/ui/phone-mockup";
import { CORE_FEATURES } from "@/lib/constants";
import { Zap, Wind, Compass, Radio, Users, Trophy, Check } from "lucide-react";

const iconMap = {
  Zap,
  Wind,
  Compass,
  Radio,
  Users,
  Trophy,
} as const;

const gradients = [
  "from-[var(--color-primary)] to-[#0d8fa8]",
  "from-[#065f73] to-[#0d8fa8]",
  "from-[#0d8fa8] to-[#065f73]",
  "from-[#6366f1] to-[#4338ca]",
  "from-[#8b5cf6] to-[#6d28d9]",
  "from-[#f59e0b] to-[#d97706]",
] as const;

export function FeaturesDeepDive() {
  return (
    <>
      {CORE_FEATURES.map((feature, i) => {
        const Icon = iconMap[feature.icon];
        const isReversed = i % 2 !== 0;

        return (
          <Section key={feature.title} alternate={i % 2 === 0}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
                isReversed ? "lg:[direction:rtl]" : ""
              }`}
            >
              {/* Text */}
              <div className={isReversed ? "lg:[direction:ltr]" : ""}>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-accent-tint)]">
                    <Icon size={20} className="text-[var(--color-primary)]" />
                  </div>
                  <span className="text-sm font-semibold uppercase tracking-wider text-[var(--color-primary)]">
                    {feature.title}
                  </span>
                </div>

                <h2 className="mt-4">{feature.headline}</h2>

                <p className="mt-4 text-lg text-[var(--color-secondary)]">
                  {feature.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {feature.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-3 text-[var(--color-body)]"
                    >
                      <Check
                        size={18}
                        className="mt-0.5 shrink-0 text-[var(--color-primary)]"
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Phone mockup */}
              <div
                className={`flex justify-center ${isReversed ? "lg:[direction:ltr]" : ""}`}
              >
                <PhoneMockup
                  size="lg"
                  placeholder={
                    <div
                      className={`flex h-full w-full flex-col items-center justify-center bg-gradient-to-b ${gradients[i]}`}
                    >
                      <Icon size={40} className="text-white/80" />
                      <span className="mt-3 text-sm font-medium text-white/60">
                        {feature.title}
                      </span>
                    </div>
                  }
                />
              </div>
            </motion.div>
          </Section>
        );
      })}
    </>
  );
}
