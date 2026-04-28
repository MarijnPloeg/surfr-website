"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Map,
  MessageCircle,
  Wind,
  Watch,
  Brain,
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { WHATS_NEW_4_0 } from "@/lib/constants";
import { ACCENTS } from "@/lib/accents";

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
    <Section id="whats-new">
      <SectionHeader
        eyebrow="New in 4.0"
        title={
          <>
            A completely new <em>Surfr</em>.
          </>
        }
        description="Every screen rebuilt. New social tab. Sharper wind. Six things worth knowing about the biggest update Surfr has ever shipped."
      />

      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {WHATS_NEW_4_0.map((item, i) => {
          const Icon = iconMap[item.icon];
          const accent = ACCENTS[item.accent];
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-(--radius-md) border border-(--color-card-border) bg-(--color-card) p-6 transition-[transform,box-shadow] hover:-translate-y-px hover:shadow-[var(--shadow-card-hover)]"
            >
              {/* Accent corner glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 h-[120px] w-[120px] rounded-full opacity-60 blur-2xl transition-opacity group-hover:opacity-90"
                style={{ backgroundColor: accent.bg }}
              />
              <div className="relative">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-(--radius-md)"
                  style={{ backgroundColor: accent.bg, color: accent.fg }}
                >
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-[18px]">{item.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-(--color-ink-75)">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
