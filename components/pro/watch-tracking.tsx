"use client";

import { motion } from "framer-motion";
import { Watch, Smartphone, Activity } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionHeading } from "@/components/ui/headings";
import { WatchMockup } from "@/components/ui/watch-mockup";

const devices = [
  {
    icon: Watch,
    name: "Apple Watch",
    description:
      "Full standalone session tracking with real-time jump detection on your wrist. Series 4+.",
  },
  {
    icon: Activity,
    name: "Garmin",
    description:
      "Connect IQ app syncs your Garmin sessions seamlessly with Surfr for deep analysis.",
  },
  {
    icon: Smartphone,
    name: "Wear OS 2.0",
    description:
      "Full companion app for Android smartwatches with live jump detection and metrics.",
  },
];

export function WatchTracking() {
  return (
    <Section id="watch-tracking" alternate>
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="flex justify-center"
        >
          <WatchMockup
            // screenshot="/screenshots/watch-session.png"
            alt="Apple Watch — live session metrics"
            fallbackDescribes="Apple Watch face · live session metrics during recording"
            className="w-[200px]"
          />
        </motion.div>

        <div>
          <Eyebrow>Watch tracking</Eyebrow>
          <SectionHeading className="mt-5">
            Leave your phone <em>on the beach</em>.
          </SectionHeading>
          <p className="mt-5 max-w-[55ch] text-[17px] leading-relaxed text-(--color-ink-75)">
            Get accurate measurements right on your wrist. No phone needed.
            Tracking happens entirely on the watch.
          </p>

          <div className="mt-10 space-y-6">
            {devices.map((device, i) => (
              <motion.div
                key={device.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-(--radius-md) bg-(--color-cyan-15) text-(--color-cyan-ink)">
                  <device.icon size={20} strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="text-[18px]">{device.name}</h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-(--color-ink-75)">
                    {device.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
