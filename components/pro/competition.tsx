"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Trophy, Zap, RefreshCw } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionHeading } from "@/components/ui/headings";

// Copy sourced from support article "Competition Mode"
// (https://support.thesurfr.app/en/articles/14110455-competition-mode):
// - "Compete live with other riders directly from your watch."
// - Connects Surfr to The Wind Games.
// - Apple Watch + Wear OS only. Not currently supported on Garmin.
// - Internet connection required.
// - "Your watch automatically switches to Big Air Mode after 90 seconds"
//   when competition time ends, while maintaining session recording.
// - Sessions auto-sync to Surfr and Wind Games when internet is available.
const items = [
  {
    icon: Trophy,
    title: "Live scored on the wrist",
    description:
      "Connect Surfr to Wind Games and your jumps are scored in real time. Your rank updates as you ride.",
  },
  {
    icon: RefreshCw,
    title: "Auto-switch when time runs out",
    description:
      "After the competition ends, the watch keeps recording. It switches to Big Air Mode after 90 seconds.",
  },
  {
    icon: Zap,
    title: "Synced both ways",
    description:
      "Sessions sync to Surfr and Wind Games automatically when an internet connection is available.",
  },
];

export function Competition() {
  return (
    <Section id="competition" alternate>
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div className="relative aspect-[1/1.2] w-[220px] overflow-hidden rounded-[22%] bg-[#1a1a1c] p-[6%] shadow-[0_20px_40px_-10px_rgba(10,25,41,0.3)] md:w-[260px]">
            <div
              aria-hidden
              className="absolute right-[-2.5%] top-[28%] h-[12%] w-[3.5%] rounded-r-[3px] bg-[#2a2a2c]"
            />
            <div
              aria-hidden
              className="absolute right-[-1.5%] top-[55%] h-[14%] w-[2.5%] rounded-r-[2px] bg-[#222224]"
            />
            <div className="relative h-full w-full overflow-hidden rounded-[14%] bg-black">
              <Image
                src="/screenshots/watch-competition.webp"
                alt="Apple Watch in Competition Mode — live Wind Games leaderboard with rank, top 3 riders, and jump scores"
                fill
                sizes="(max-width: 768px) 220px, 260px"
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

        <div>
          <Eyebrow>Competition Mode</Eyebrow>
          <SectionHeading className="mt-5">
            Compete <em>from your wrist</em>.
          </SectionHeading>
          <p className="mt-5 max-w-[55ch] text-[17px] leading-relaxed text-(--color-ink-75)">
            Compete live with other riders directly from your watch. Connect
            Surfr with Wind Games and every jump is scored in real time.
          </p>

          <div className="mt-10 space-y-6">
            {items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-(--radius-md) bg-(--color-cyan-15) text-(--color-cyan-ink)">
                  <item.icon size={20} strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="text-[18px]">{item.title}</h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-(--color-ink-75)">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="mt-8 text-[13px] font-medium text-(--color-ink-50)">
            Apple Watch and Wear OS.
          </p>
        </div>
      </div>
    </Section>
  );
}
