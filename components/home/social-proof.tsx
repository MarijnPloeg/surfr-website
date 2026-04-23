"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { PARTNERS } from "@/lib/constants";

export function SocialProof() {
  return (
    <Section>
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-muted)]">
          Trusted by coaches, competitions, brands &amp; riders
        </p>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-10 md:gap-16">
        {PARTNERS.map((partner, i) => (
          <motion.div
            key={partner.name}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="text-xl font-bold text-[var(--color-muted)] opacity-40 grayscale transition-all hover:opacity-80 hover:grayscale-0"
          >
            {/* When SVG logos are available, replace with next/image */}
            {partner.name}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
