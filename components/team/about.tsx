"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { ABOUT_TEXT } from "@/lib/constants";

export function About() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4 text-[var(--color-secondary)]"
        >
          <p className="text-lg leading-relaxed">{ABOUT_TEXT.paragraph1}</p>
          <p className="leading-relaxed">{ABOUT_TEXT.paragraph2}</p>
          <p className="leading-relaxed">{ABOUT_TEXT.paragraph3}</p>
        </motion.div>
      </div>
    </Section>
  );
}
