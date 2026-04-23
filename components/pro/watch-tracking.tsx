"use client";

import { motion } from "framer-motion";
import { Watch, Smartphone, Activity } from "lucide-react";
import { Section } from "@/components/ui/section";
import { WatchMockup } from "@/components/ui/watch-mockup";

const devices = [
  {
    icon: Watch,
    name: "Apple Watch",
    description:
      "Full session tracking with real-time jump detection on your wrist.",
  },
  {
    icon: Activity,
    name: "Garmin",
    description:
      "Sync your Garmin data seamlessly with Surfr for deep analysis.",
  },
  {
    icon: Smartphone,
    name: "Wear OS",
    description:
      "Full WearOS 2.0 companion app for Android smartwatches.",
  },
];

export function WatchTracking() {
  return (
    <Section id="watch-tracking" alternate>
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Watch mockup */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <WatchMockup size="lg" />
        </motion.div>

        <div>
          <h2>
            Leave your phone on the{" "}
            <span className="text-[var(--color-primary)]">beach</span>
          </h2>
          <p className="mt-4 text-lg text-[var(--color-secondary)]">
            Get accurate measurements right on your wrist. You don&apos;t even
            need to bring your phone — all tracking is done by the watch itself.
          </p>

          <div className="mt-10 space-y-6">
            {devices.map((device, i) => (
              <motion.div
                key={device.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-accent-tint)]">
                  <device.icon
                    size={20}
                    className="text-[var(--color-primary)]"
                  />
                </div>
                <div>
                  <h3 className="text-base">{device.name}</h3>
                  <p className="mt-1 text-sm text-[var(--color-secondary)]">
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
