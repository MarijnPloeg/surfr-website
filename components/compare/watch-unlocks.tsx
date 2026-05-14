"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Target, Navigation, Trophy, MessageSquare, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";

// Copy sourced from support articles in the Tracking & Recording collection.
// Each card links to the matching deep-dive section on /pro.
const modes = [
  {
    id: "coaching",
    icon: Target,
    name: "Coaching Mode",
    description:
      "Live tack speed on the wrist. Max and average speed of the last 6 seconds before take-off, shown the moment you land.",
    platforms: "Apple Watch, Wear OS",
    href: "/pro#coaching",
  },
  {
    id: "downwinder",
    icon: Navigation,
    name: "Downwinder Mode",
    description:
      "Set a destination. Track distance to it from the wrist. A progress bar shifts from red to green as you close in.",
    platforms: "Apple Watch, Wear OS",
    href: "/pro#downwinder",
  },
  {
    id: "competition",
    icon: Trophy,
    name: "Competition Mode",
    description:
      "Compete live with other riders directly from your watch. Connect Surfr to Wind Games and your jumps are scored in real time.",
    platforms: "Apple Watch, Wear OS",
    href: "/pro#competition",
  },
  {
    id: "live-communication",
    icon: MessageSquare,
    name: "Live communication",
    description:
      "Press the side button on your Apple Watch and speak. Your message is converted to text and sent to nearby friends on the water.",
    platforms: "Apple Watch",
    href: "/pro#live-communication",
  },
];

export function WatchUnlocks() {
  return (
    <Section id="watch-unlocks">
      <SectionHeader
        eyebrow="What watch unlocks"
        title={
          <>
            Four modes that <em>only run on the wrist</em>.
          </>
        }
        description="Pick the watch and you pick these too. Free on the watch with Surfr PRO."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:gap-6">
        {modes.map((mode, i) => (
          <motion.div
            key={mode.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
          >
            <Link
              href={mode.href}
              className="group flex h-full flex-col rounded-(--radius-lg) border border-(--color-divider) bg-(--color-page) p-7 transition-colors hover:border-(--color-cyan-ink)"
            >
              <div className="flex items-center gap-3">
                <mode.icon
                  size={22}
                  strokeWidth={1.75}
                  className="text-(--color-cyan-ink)"
                />
                <h3 className="text-[20px] font-bold text-(--color-ink)">
                  {mode.name}
                </h3>
              </div>
              <p className="mt-4 text-[15px] leading-relaxed text-(--color-ink-75)">
                {mode.description}
              </p>
              <div className="mt-5 flex-1" />
              <div className="flex items-center justify-between border-t border-(--color-divider) pt-4">
                <span className="text-[12px] font-medium text-(--color-ink-60)">
                  {mode.platforms}
                </span>
                <span className="inline-flex items-center gap-1 text-[13px] font-semibold text-(--color-cyan-ink) transition-[gap] group-hover:gap-2">
                  Learn more
                  <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
