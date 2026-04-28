"use client";

import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { AssetPlaceholder } from "@/components/ui/asset-placeholder";
import { SOCIAL_LINKS, SITE_META } from "@/lib/constants";

const placeholders = [
  "Rider boosting at IJmuiden, gray sky",
  "Sunset session at Tarifa",
  "Foiler in Lo Stagnone shallows",
  "Cape Town big-air ramp",
  "Beginner first session at Brouwersdam",
  "Downwinder line on dawn water",
];

export function Community() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Community"
        title={
          <>
            Join {SITE_META.activeUsers} riders <em>worldwide</em>.
          </>
        }
        description="Sessions worth sharing, on the feed and on Instagram. Real photos here once we source them. See docs/INPUT_NEEDED.md."
      />

      <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
        {placeholders.map((d, i) => (
          <motion.div
            key={d}
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.04 }}
          >
            <AssetPlaceholder
              kind="photo"
              describes={d}
              aspectRatio="1/1"
              rounded="md"
            />
          </motion.div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <a
          href={SOCIAL_LINKS.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[14px] font-semibold text-(--color-cyan-ink) transition-colors hover:text-(--color-cyan-ink-hover)"
        >
          <Instagram size={18} />
          Follow @surfr.app
        </a>
      </div>
    </Section>
  );
}
