"use client";

import { motion } from "framer-motion";
import { Headphones, Volume2, Gauge } from "lucide-react";
import { Section } from "@/components/ui/section";
import { AppStoreButtons } from "@/components/ui/app-store-buttons";

export function Coaching() {
  return (
    <Section id="coaching">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>On-Board Coaching</h2>
          <p className="mt-4 text-[var(--color-secondary)]">
            Our intelligent algorithms will tell you right from your watch using
            the coaching feature, how to improve your kiting in order to jump
            higher and ride better. Get real-time feedback while you ride.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {[
            {
              icon: Headphones,
              title: "Audio Coaching",
              description: "Real-time voice feedback through your watch speaker or connected earbuds.",
            },
            {
              icon: Gauge,
              title: "Live Metrics",
              description: "Speed, wind data, and jump scores announced as you ride.",
            },
            {
              icon: Volume2,
              title: "Custom Alerts",
              description: "Set your own thresholds and get notified when you hit new personal records.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="rounded-2xl bg-[var(--color-light-bg)] p-6"
            >
              <item.icon size={24} className="mx-auto text-[var(--color-primary)]" />
              <h3 className="mt-3 text-base">{item.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-secondary)]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Pro CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-[var(--color-dark)]">
            Ready to go PRO?
          </h3>
          <p className="mt-3 text-[var(--color-secondary)]">
            Download Surfr and upgrade to PRO to unlock all advanced features.
          </p>
          <div className="mt-6 flex justify-center">
            <AppStoreButtons />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
