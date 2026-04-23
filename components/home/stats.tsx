"use client";

import { motion } from "framer-motion";
import { STATS } from "@/lib/constants";
import { Star } from "lucide-react";

const EXTENDED_STATS = [
  ...STATS,
  { value: "4.9", label: "App Store Rating" },
] as const;

export function Stats() {
  return (
    <section className="border-b border-[var(--color-border)] bg-[var(--color-light-bg)] py-8 md:py-10">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {EXTENDED_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-center gap-3 text-center"
            >
              <span className="text-2xl font-bold text-[var(--color-dark)] md:text-3xl">
                {stat.value}
              </span>
              <div className="flex items-center gap-1 text-sm text-[var(--color-secondary)]">
                {stat.label === "App Store Rating" && (
                  <Star
                    size={14}
                    className="fill-amber-400 text-amber-400"
                  />
                )}
                <span>{stat.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
