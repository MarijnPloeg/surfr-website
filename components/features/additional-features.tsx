"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
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

const additionalFeatures = [
  {
    icon: Shield,
    title: "Stay Safe",
    description:
      "GPS tracking ensures you're traceable on the water. Friends & family can follow your live position from the beach.",
  },
  {
    icon: Shirt,
    title: "Gear & Quiver",
    description:
      "Manage your kite quiver, boards, and wetsuits. Track performance by kite size and board type with quiver insights.",
  },
  {
    icon: Camera,
    title: "Surfie Export",
    description:
      "Export jump overlays with transparent backgrounds to composite over your own footage. Share your best jumps anywhere.",
  },
  {
    icon: Share2,
    title: "Strava & Garmin",
    description:
      "Auto-export sessions to Strava or sync with Garmin Connect. Your data goes wherever you want.",
  },
  {
    icon: Navigation,
    title: "Downwinder Mode",
    description:
      "Navigate downwind routes on your watch with real-time direction guidance. Never lose your way on long rides.",
  },
  {
    icon: Heart,
    title: "Heart Rate",
    description:
      "Track heart rate and calories on Apple Watch and Wear OS. Monitor your intensity and recovery.",
  },
  {
    icon: Smartphone,
    title: "Phone or Watch",
    description:
      "Record on your phone in a waterproof pouch, or go watch-only with Apple Watch, Wear OS, or Garmin.",
  },
  {
    icon: Globe,
    title: "8 Languages",
    description:
      "Fully localized in English, Dutch, Spanish, French, German, Portuguese, Italian, and Russian.",
  },
] as const;

export function AdditionalFeatures() {
  return (
    <Section>
      <SectionHeader
        badge="And More"
        title="Everything else you need on the water"
        description="Safety, gear tracking, integrations, and multi-device support — all built in."
      />

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {additionalFeatures.map((feature, i) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-2xl bg-[var(--color-light-bg)] p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-accent-tint)]">
                <Icon size={20} className="text-[var(--color-primary)]" />
              </div>
              <h3 className="mt-4">{feature.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-secondary)]">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
