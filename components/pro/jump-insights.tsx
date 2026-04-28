"use client";

import { motion } from "framer-motion";
import { TrendingUp, BarChart3, Award, Target } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionHeading } from "@/components/ui/headings";
import { PhoneMockup } from "@/components/ui/phone-mockup";

const insights = [
  {
    icon: TrendingUp,
    title: "Jump Formula",
    description:
      "A scoring algorithm developed with Mike MacDonald (GHWM). Evaluates height, hang time, and approach to give every jump a comprehensive score.",
  },
  {
    icon: BarChart3,
    title: "Per-jump stats",
    description:
      "Average height, max height, total airtime, G-force at apex. Drill into a single jump or compare across a season.",
  },
  {
    icon: Award,
    title: "Read the pros",
    description:
      "Compare your numbers against pro reference profiles to see exactly what separates your jumps from theirs.",
  },
  {
    icon: Target,
    title: "POP chart",
    description:
      "Power of Progression. Your improvement trajectory over weeks and seasons, in one chart.",
  },
];

export function JumpInsights() {
  return (
    <Section id="jump-insights">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <Eyebrow>PRO Insights</Eyebrow>
          <SectionHeading className="mt-5">
            Want to jump <em>higher</em>?
          </SectionHeading>
          <p className="mt-5 max-w-[55ch] text-[17px] leading-relaxed text-(--color-ink-75)">
            PRO Insights gives every jump a score, every session a curve, and every
            season a story. The scoring model was developed in collaboration with
            Mike MacDonald (GHWM), who knows what big-air actually requires.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {insights.map((insight, i) => (
              <motion.div
                key={insight.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
              >
                <insight.icon
                  size={20}
                  strokeWidth={1.75}
                  className="text-(--color-cyan-ink)"
                />
                <h3 className="mt-2 text-[16px]">{insight.title}</h3>
                <p className="mt-1.5 text-[14px] leading-relaxed text-(--color-ink-75)">
                  {insight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="flex justify-center"
        >
          <PhoneMockup
            // screenshot="/screenshots/pro-jump-detail.png"
            alt="Surfr PRO Insights — per-jump score with pro comparison"
            fallbackDescribes="PRO Insights · per-jump score with POP chart and pro comparison"
            className="w-[300px]"
          />
        </motion.div>
      </div>
    </Section>
  );
}
