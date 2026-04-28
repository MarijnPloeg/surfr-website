"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { ABOUT_TEXT } from "@/lib/constants";

export function About() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-5 text-(--color-ink-90)"
        >
          <p className="text-[19px] leading-relaxed">
            {ABOUT_TEXT.paragraph1}
          </p>
          <p className="text-[16px] leading-relaxed text-(--color-ink-75)">
            {ABOUT_TEXT.paragraph2}
          </p>
          <p className="text-[16px] leading-relaxed text-(--color-ink-75)">
            {ABOUT_TEXT.paragraph3}
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
