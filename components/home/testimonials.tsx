"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  return (
    <Section alternate>
      <SectionHeader
        badge="Testimonials"
        title="Don't take our word for it"
        description="Trusted by professional athletes, competition organizers, and riders in 120+ countries."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {TESTIMONIALS.map((testimonial, i) => (
          <motion.div
            key={testimonial.author}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className={`rounded-2xl bg-white p-8 shadow-[var(--shadow-sm)] ${
              i === 1 ? "md:-translate-y-4 md:shadow-[var(--shadow-md)]" : ""
            }`}
          >
            <Quote
              size={28}
              className="text-[var(--color-primary)] opacity-30"
            />
            <p className="mt-4 leading-relaxed text-[var(--color-secondary)]">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-3 border-t border-[var(--color-border)] pt-5">
              {/* Avatar placeholder */}
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[#0d8fa8] text-sm font-bold text-white">
                {testimonial.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 2)}
              </div>
              <div>
                <p className="text-sm font-semibold text-[var(--color-dark)]">
                  {testimonial.author}
                </p>
                <p className="text-xs text-[var(--color-muted)]">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
