"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import {
  Shield,
  Radio,
  Wind,
  Share2,
  Bell,
  Globe,
} from "lucide-react";

const additionalFeatures = [
  {
    icon: Shield,
    title: "Stay Safe",
    description:
      "Taking Surfr with you ensures you are traceable and improves your safety on the water.",
  },
  {
    icon: Radio,
    title: "Go Live",
    description:
      "In live mode, friends and family can follow your session right from the beach or at home.",
  },
  {
    icon: Wind,
    title: "Wind Forecasts",
    description:
      "Real-time wind data from Open Meteo with bilinear interpolation for precise forecasts at every spot.",
  },
  {
    icon: Share2,
    title: "Strava & Garmin",
    description:
      "Export sessions to Strava or sync with Garmin. Your data goes wherever you want.",
  },
  {
    icon: Bell,
    title: "Wind Alerts",
    description:
      "Get notified when conditions are right at your favorite spots. Never miss a session.",
  },
  {
    icon: Globe,
    title: "8 Languages",
    description:
      "Available in English, Dutch, Spanish, French, German, Portuguese, Italian, and Russian.",
  },
] as const;

export function AdditionalFeatures() {
  return (
    <Section>
      <SectionHeader
        badge="And More"
        title="Everything else you'd expect"
        description="Safety, integrations, wind data, and multi-language support come standard."
      />

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {additionalFeatures.map((feature, i) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
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
