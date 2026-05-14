"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Navigation, MapPin, Activity } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionHeading } from "@/components/ui/headings";

// Copy sourced from support article "Downwinder Mode"
// (https://support.thesurfr.app/en/articles/10550868-downwinder-mode):
// - Pick a destination from nearby suggested spots or search.
// - Real-time distance tracking in km or miles.
// - Visual progress bar shifts from red to green as you approach.
// - Apple Watch + Wear OS.
// - Built on Surfr Discover, "the largest database of kitespot
//   information, built together with riders."
const items = [
  {
    icon: MapPin,
    title: "Pick a destination",
    description:
      "Choose from nearby suggested spots or search. The watch handles the rest.",
  },
  {
    icon: Navigation,
    title: "Distance on the wrist",
    description:
      "Live distance to your spot, in kilometres or miles. Glance, ride, repeat.",
  },
  {
    icon: Activity,
    title: "Red to green",
    description:
      "A progress bar shifts from red to green as you close in on the destination.",
  },
];

export function Downwinder() {
  return (
    <Section id="downwinder">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="order-2 lg:order-1">
          <Eyebrow>Downwinder Mode</Eyebrow>
          <SectionHeading className="mt-5">
            Know how far is <em>left</em>.
          </SectionHeading>
          <p className="mt-5 max-w-[55ch] text-[17px] leading-relaxed text-(--color-ink-75)">
            Set a destination from the Surfr spot database. Track your distance
            to it from the wrist, with a progress bar that shifts from red to
            green as you approach.
          </p>

          <div className="mt-10 space-y-6">
            {items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
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

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="order-1 flex justify-center lg:order-2"
        >
          <Image
            src="/screenshots/watch-downwinder.png"
            alt="Apple Watch in Downwinder Mode — distance to Tatajuba and Guriu shown on screen"
            width={376}
            height={637}
            sizes="(max-width: 768px) 220px, 260px"
            className="w-[220px] md:w-[260px] h-auto"
            style={{
              filter: "drop-shadow(0 20px 40px rgba(10,25,41,0.3))",
            }}
          />
        </motion.div>
      </div>
    </Section>
  );
}
