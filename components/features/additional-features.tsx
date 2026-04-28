"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Share2,
  Shirt,
  Smartphone,
  Camera,
  Globe,
  Navigation,
  Heart,
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";

const items = [
  {
    icon: Shield,
    title: "Stay safe",
    description:
      "GPS tracking ensures you're traceable. Friends and family can follow your live position from the beach.",
  },
  {
    icon: Shirt,
    title: "Gear & quiver",
    description:
      "Manage your kites, boards, and wetsuits. Track performance by kite size and board type.",
  },
  {
    icon: Camera,
    title: "Surfie export",
    description:
      "Export jump overlays with transparent backgrounds. Composite over your own footage. Share your best jumps anywhere.",
  },
  {
    icon: Share2,
    title: "Strava & Garmin",
    description:
      "Auto-export sessions to Strava. Sync with Garmin Connect. Your data goes wherever you want it.",
  },
  {
    icon: Navigation,
    title: "Downwinder mode",
    description:
      "Navigate downwind routes from your watch with real-time direction guidance.",
  },
  {
    icon: Heart,
    title: "Heart rate",
    description:
      "Track heart rate and calories on Apple Watch and Wear OS. Monitor intensity and recovery.",
  },
  {
    icon: Smartphone,
    title: "Phone or watch",
    description:
      "Record on your phone in a waterproof pouch, or go watch-only with Apple Watch, Wear OS, or Garmin.",
  },
  {
    icon: Globe,
    title: "8 languages",
    description:
      "Localized in English, Dutch, Spanish, French, German, Portuguese, Italian, and Russian.",
  },
] as const;

export function AdditionalFeatures() {
  return (
    <Section>
      <SectionHeader
        eyebrow="And then some"
        title={
          <>
            Eight more things <em>worth knowing</em>.
          </>
        }
        description="Safety, gear tracking, integrations, and multi-device support. All built in."
      />

      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-(--radius-md) border border-(--color-card-border) bg-(--color-card) p-6 transition-[box-shadow] hover:shadow-[var(--shadow-card)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-(--radius-md) bg-(--color-cyan-15) text-(--color-cyan-ink)">
                <Icon size={20} strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 text-[18px]">{item.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-(--color-ink-75)">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
