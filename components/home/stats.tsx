"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { HOMEPAGE_STATS } from "@/lib/constants";
import { CountUp } from "@/components/ui/count-up";

export function Stats() {
  return (
    <section className="relative overflow-hidden border-y border-(--color-divider) bg-(--color-page) py-12 md:py-14">
      {/* Soft cyan band running through the stats — quiet brand presence */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(1,188,215,0.04) 0%, rgba(1,188,215,0.00) 60%)",
        }}
      />
      <div className="relative mx-auto max-w-[1200px] px-6 md:px-8">
        <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-4 sm:gap-y-0">
          {HOMEPAGE_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`flex flex-col items-center text-center sm:items-center ${
                i > 0 ? "sm:border-l sm:border-(--color-divider)" : ""
              }`}
            >
              <CountUp
                value={stat.value}
                className="text-[36px] font-bold leading-none tracking-[-0.025em] text-(--color-ink) md:text-[44px] tabular-nums"
              />
              <span className="mt-3 inline-flex items-center gap-1.5 font-[family-name:var(--font-roboto-condensed)] text-[11px] font-bold uppercase tracking-[0.18em] text-(--color-ink-60)">
                {"isStar" in stat && stat.isStar && (
                  <Star
                    size={12}
                    className="fill-(--color-star) text-(--color-star)"
                  />
                )}
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
