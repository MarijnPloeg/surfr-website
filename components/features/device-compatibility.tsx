"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { PhoneMockup } from "@/components/ui/phone-mockup";
import { WatchMockup } from "@/components/ui/watch-mockup";
import { Smartphone, Watch, Activity } from "lucide-react";

const devices = [
  {
    name: "iPhone & Android",
    description:
      "Tuck your phone in a waterproof pouch and secure it in your wetsuit. Our wetsuit mode delivers the most accurate jump detection.",
    icon: Smartphone,
  },
  {
    name: "Apple Watch",
    description:
      "Full standalone recording on your wrist. Real-time jump detection, speed tracking, and competition mode built in.",
    icon: Watch,
  },
  {
    name: "Wear OS & Garmin",
    description:
      "WearOS 2.0 with full companion app. Garmin sync for seamless data transfer between ecosystems.",
    icon: Activity,
  },
] as const;

export function DeviceCompatibility() {
  return (
    <Section alternate>
      <SectionHeader
        badge="Devices"
        title="Take it to the water, your way"
        description="Whether on your wrist or in your wetsuit — Surfr works with the device you already have."
      />

      <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Devices left */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-center gap-6"
        >
          <WatchMockup size="md" />
          <PhoneMockup
            size="md"
            placeholder={
              <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-b from-[var(--color-primary)] to-[#0d8fa8]">
                <span className="text-2xl font-bold text-white">surfr</span>
              </div>
            }
          />
        </motion.div>

        {/* Device list right */}
        <div className="space-y-8">
          {devices.map((device, i) => {
            const Icon = device.icon;
            return (
              <motion.div
                key={device.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-accent-tint)]">
                  <Icon size={22} className="text-[var(--color-primary)]" />
                </div>
                <div>
                  <h3>{device.name}</h3>
                  <p className="mt-1 text-sm text-[var(--color-secondary)]">
                    {device.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
