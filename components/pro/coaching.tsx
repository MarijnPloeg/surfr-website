"use client";

import { motion } from "framer-motion";
import { Headphones, Volume2, Gauge } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionHeading } from "@/components/ui/headings";

const items = [
  {
    icon: Headphones,
    title: "Audio coaching",
    description:
      "Real-time voice feedback through your watch speaker or connected earbuds.",
  },
  {
    icon: Gauge,
    title: "Live metrics",
    description:
      "Speed, wind, and jump scores announced as you ride.",
  },
  {
    icon: Volume2,
    title: "Custom alerts",
    description:
      "Set your own thresholds. Get notified when you hit a personal record.",
  },
];

export function Coaching() {
  return (
    <Section id="coaching">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Eyebrow>On-board coaching</Eyebrow>
          <SectionHeading className="mt-5">
            A coach in your <em>ear</em>.
          </SectionHeading>
          <p className="mx-auto mt-5 text-[17px] leading-relaxed text-(--color-ink-75)">
            On-board coaching tells you, right from your watch, how to ride
            better and jump higher. Real-time feedback on the water, not a
            review session three hours later.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
              className="rounded-(--radius-md) border border-(--color-card-border) bg-(--color-card) p-6 text-left"
            >
              <item.icon
                size={22}
                strokeWidth={1.75}
                className="text-(--color-cyan-ink)"
              />
              <h3 className="mt-4 text-[16px]">{item.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-(--color-ink-75)">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
