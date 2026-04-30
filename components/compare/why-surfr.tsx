"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { PhoneMockup } from "@/components/ui/phone-mockup";
import { WatchMockup } from "@/components/ui/watch-mockup";
import { WearOsMockup } from "@/components/ui/wear-os-mockup";
import { GarminMockup } from "@/components/ui/garmin-mockup";

/**
 * Three differentiator cards using real product imagery in device frames.
 * Visual-first, minimal label text. No paragraphs.
 */
export function WhySurfr() {
  return (
    <Section>
      <div className="grid gap-12 md:grid-cols-3 md:gap-8 lg:gap-12">
        <DifferentiatorCard
          delay={0}
          visual={
            <div
              style={{
                filter: "drop-shadow(0 16px 32px rgba(255,107,92,0.20))",
              }}
            >
              <PhoneMockup
                screenshot="/screenshots/session_tracking.png"
                alt="Session tracking on phone"
                fallbackDescribes="Session detail with jump arc"
                className="w-[170px]"
              />
            </div>
          }
          label="Jump height from a phone alone."
        />
        <DifferentiatorCard
          delay={0.08}
          visual={
            <div
              className="flex items-end gap-2"
              style={{
                filter: "drop-shadow(0 16px 32px rgba(1,188,215,0.22))",
              }}
            >
              <WearOsMockup
                screenshot="/screenshots/watch.PNG"
                alt="Surfr on Wear OS"
                fallbackDescribes="Wear OS Surfr face"
                className="w-[90px]"
              />
              <WatchMockup
                screenshot="/screenshots/watch.PNG"
                alt="Surfr on Apple Watch"
                fallbackDescribes="Apple Watch Surfr face"
                className="w-[100px]"
              />
              <GarminMockup
                screenshot="/screenshots/watch.PNG"
                alt="Surfr on Garmin"
                fallbackDescribes="Garmin Surfr face"
                className="w-[90px]"
              />
            </div>
          }
          label="Apple Watch, Wear OS, and Garmin."
        />
        <DifferentiatorCard
          delay={0.16}
          visual={
            <div
              style={{
                filter: "drop-shadow(0 16px 32px rgba(1,188,215,0.20))",
              }}
            >
              <PhoneMockup
                screenshot="/screenshots/wind_forecast.png"
                alt="Wind forecast screen"
                fallbackDescribes="Spot forecast with hourly chart"
                className="w-[170px]"
              />
            </div>
          }
          label="Cross-checked across multiple models."
        />
      </div>
    </Section>
  );
}

function DifferentiatorCard({
  visual,
  label,
  delay,
}: {
  visual: React.ReactNode;
  label: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center text-center"
    >
      {/* Fixed-height anchor so all three visuals align at the same baseline */}
      <div className="flex h-[260px] items-end justify-center">{visual}</div>
      <p className="mt-7 max-w-[26ch] text-[16px] font-semibold leading-snug text-(--color-ink)">
        {label}
      </p>
    </motion.div>
  );
}
