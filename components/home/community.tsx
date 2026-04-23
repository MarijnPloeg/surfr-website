"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Instagram } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

const placeholderImages = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  gradient: [
    "from-cyan-400 to-blue-500",
    "from-blue-500 to-indigo-500",
    "from-teal-400 to-cyan-500",
    "from-sky-400 to-blue-500",
    "from-cyan-500 to-teal-500",
    "from-indigo-400 to-blue-500",
  ][i],
}));

export function Community() {
  return (
    <Section alternate>
      <SectionHeader
        badge="Community"
        title="Join 100K+ riders worldwide"
        description="See what the community is sharing. Follow @surfr.app on Instagram for daily sessions, tips, and stoke."
      />

      <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
        {placeholderImages.map((img, i) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group relative aspect-square overflow-hidden rounded-xl"
          >
            {/* Placeholder — replace with real UGC images */}
            <div
              className={`h-full w-full bg-gradient-to-br ${img.gradient} opacity-60 transition-opacity group-hover:opacity-80`}
            />
          </motion.div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <a
          href={SOCIAL_LINKS.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] transition-colors hover:text-[var(--color-primary-dark)]"
        >
          <Instagram size={18} />
          Follow @surfr.app
        </a>
      </div>
    </Section>
  );
}
