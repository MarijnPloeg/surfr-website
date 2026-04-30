"use client";

import { motion } from "framer-motion";
import { Smartphone, Watch, Activity } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { PhoneMockup } from "@/components/ui/phone-mockup";
import { WatchMockup } from "@/components/ui/watch-mockup";

const devices = [
  {
    name: "iPhone & Android",
    description:
      "Tuck your phone in a waterproof pouch and secure it in your wetsuit. Wetsuit Mode delivers the most accurate jump detection.",
    icon: Smartphone,
  },
  {
    name: "Apple Watch",
    description:
      "Full standalone recording on your wrist. Real-time jump detection, speed tracking, on-board coaching.",
    icon: Watch,
  },
  {
    name: "Wear OS & Garmin",
    description:
      "Wear OS 2.0 with full companion app. Garmin sync via the Surfr Connect IQ app for seamless data transfer.",
    icon: Activity,
  },
] as const;

export function DeviceCompatibility() {
  return (
    <Section alternate>
      <SectionHeader
        eyebrow="Devices"
        title={
          <>
            Take it to the water, <em>your way</em>.
          </>
        }
        description="On your wrist or in your wetsuit. Surfr works with the device you already have."
      />

      <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-center gap-6"
        >
          <WatchMockup
            screenshot="/screenshots/watch.PNG"
            alt="Apple Watch. Surfr session recording face."
            fallbackDescribes="Apple Watch. Surfr session recording face."
            className="w-[140px]"
          />
          <PhoneMockup
            screenshot="/screenshots/recording_phone.png"
            alt="iPhone. Recording start screen."
            fallbackDescribes="iPhone. Recording start screen."
            className="w-[260px]"
          />
        </motion.div>

        <div className="space-y-7">
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
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-(--radius-md) bg-(--color-cyan-15) text-(--color-cyan-ink)">
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="text-[20px]">{device.name}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-(--color-ink-75)">
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
