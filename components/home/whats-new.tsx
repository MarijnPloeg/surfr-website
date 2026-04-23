"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { WHATS_NEW } from "@/lib/constants";
import {
  Sparkles,
  Map,
  MessageCircle,
  Wind,
  Watch,
  Brain,
} from "lucide-react";

const iconMap = {
  Sparkles,
  Map,
  MessageCircle,
  Wind,
  Watch,
  Brain,
} as const;

export function WhatsNew() {
  return (
    <section
      id="whats-new"
      className="bg-[var(--color-dark)] py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        <SectionHeader
          badge="New in 4.0"
          title="A completely new Surfr"
          description="Version 4.0 is our biggest update ever — rebuilt from the ground up with a modern design, social features, and smarter wind data."
          dark
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WHATS_NEW.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group rounded-2xl border border-[var(--color-dark-border)] bg-[var(--color-dark-surface)] p-6 transition-colors hover:border-[var(--color-primary)]/30"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-primary)]/10">
                  <Icon
                    size={20}
                    className="text-[var(--color-primary-light)]"
                  />
                </div>
                <h3 className="text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-dark-muted)]">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
