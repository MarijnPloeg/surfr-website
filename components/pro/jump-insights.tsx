"use client";

import { motion } from "framer-motion";
import { TrendingUp, BarChart3, Award, Target, Zap } from "lucide-react";
import { Section } from "@/components/ui/section";
import { PhoneMockup } from "@/components/ui/phone-mockup";

const insights = [
  {
    icon: TrendingUp,
    title: "Jump Formula",
    description:
      "Our proprietary scoring algorithm evaluates height, hang time, and technique to give each jump a comprehensive score.",
  },
  {
    icon: BarChart3,
    title: "Detailed Stats",
    description:
      "Track your average jump height, max height, total airtime, and progression over sessions.",
  },
  {
    icon: Award,
    title: "Learn from the Pros",
    description:
      "Compare your jump metrics with professional riders and understand what separates good from great.",
  },
  {
    icon: Target,
    title: "POP Chart",
    description:
      "Visualize your Power of Progression with our unique chart that tracks your improvement trajectory.",
  },
];

export function JumpInsights() {
  return (
    <Section id="jump-insights">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <h2>
            Want to jump{" "}
            <span className="text-[var(--color-primary)]">higher</span>?
          </h2>
          <p className="mt-4 text-lg text-[var(--color-secondary)]">
            Get unparalleled insights into your jumps. Together with Mike
            MacDonald (GHWM) we developed a model that focuses on the essential
            steps to get you jumping higher.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {insights.map((insight, i) => (
              <motion.div
                key={insight.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                <insight.icon
                  size={20}
                  className="text-[var(--color-primary)]"
                />
                <h3 className="mt-2 text-base">{insight.title}</h3>
                <p className="mt-1 text-sm text-[var(--color-secondary)]">
                  {insight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <PhoneMockup
            size="lg"
            placeholder={
              <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-b from-[var(--color-primary)] to-[#0d8fa8]">
                <Zap size={40} className="text-white/80" />
                <span className="mt-3 text-sm font-medium text-white/60">
                  Jump Insights
                </span>
              </div>
            }
          />
        </motion.div>
      </div>
    </Section>
  );
}
