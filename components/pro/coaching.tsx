"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Navigation, ArrowUp, Target } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionHeading } from "@/components/ui/headings";

// Copy sourced from support article "Coaching Mode"
// (https://support.thesurfr.app/en/articles/10550865-coaching-mode):
// - Line 1: "maximum and average speed on your most recent tacks. This is
//   not related to jumps."
// - Line 2: "maximum and average speed of the last 6 second before your
//   jump take off and appears after you land a jump"
// - Color coding is visible in /public/screenshots/coaching_mode1.png:
//   red/orange when slow, green when fast.
interface Item {
  icon: typeof Navigation;
  title: string;
  description: string;
  watch?: { src: string; alt: string; width: number; height: number };
}

const items: Item[] = [
  {
    icon: Navigation,
    title: "Live tack speed",
    description:
      "Max and average speed on your most recent tacks. Read it without breaking flow.",
    watch: {
      src: "/screenshots/coaching_mode1.png",
      alt: "Coaching Mode on Apple Watch — slow tack, red coaching colours",
      width: 338,
      height: 355,
    },
  },
  {
    icon: ArrowUp,
    title: "After every jump",
    description:
      "Max and average speed of the last 6 seconds before take-off, shown the moment you land.",
  },
  {
    icon: Target,
    title: "See what to improve",
    description:
      "Color-coded performance. Green when you nailed it, red when there's room to climb.",
    watch: {
      src: "/screenshots/coaching_mode2.png",
      alt: "Coaching Mode on Apple Watch — fast tack, green coaching colours",
      width: 346,
      height: 368,
    },
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
            Coaching on your <em>wrist</em>.
          </SectionHeading>
          <p className="mx-auto mt-5 text-[17px] leading-relaxed text-(--color-ink-75)">
            On-board coaching tells you, right from your watch, how to ride
            better and jump higher. Real-time feedback on the water, not a
            review session three hours later.
          </p>
        </motion.div>
      </div>

      {/*
        Three cards in a row. Outer cards embed the matching watch screenshot
        at the top so the watches read as proof for that card. Middle card is
        text-only. A fixed-height watch slot keeps all three cards aligned at
        the same top edge for the icon row.
      */}
      <div className="mx-auto mt-14 grid max-w-3xl gap-6 sm:grid-cols-3">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex flex-col rounded-(--radius-md) border border-(--color-card-border) bg-(--color-card) p-6 text-left"
          >
            <div className="flex h-[180px] items-center justify-center">
              {item.watch ? (
                <Image
                  src={item.watch.src}
                  alt={item.watch.alt}
                  width={item.watch.width}
                  height={item.watch.height}
                  sizes="(max-width: 768px) 60vw, 160px"
                  className="h-auto w-auto max-h-full max-w-full"
                  style={{
                    filter: "drop-shadow(0 16px 32px rgba(10,25,41,0.16))",
                  }}
                />
              ) : (
                <span className="font-[family-name:var(--font-roboto-condensed)] text-[11px] font-bold uppercase tracking-[0.18em] text-(--color-ink-35)">
                  Same screen
                </span>
              )}
            </div>
            <item.icon
              size={22}
              strokeWidth={1.75}
              className="mt-6 text-(--color-cyan-ink)"
            />
            <h3 className="mt-4 text-[16px]">{item.title}</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-(--color-ink-75)">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
