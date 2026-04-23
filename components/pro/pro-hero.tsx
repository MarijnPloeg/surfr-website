"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export function ProHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-dark)] pb-20 pt-32 md:pb-28 md:pt-40">
      {/* Watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex select-none items-center justify-center overflow-hidden"
      >
        <span className="whitespace-nowrap text-[18vw] font-bold uppercase leading-none tracking-tighter text-white opacity-[0.02]">
          PLUS
        </span>
      </div>

      {/* Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-primary)] opacity-[0.06] blur-[100px]"
      />

      <div className="relative mx-auto max-w-[1200px] px-6 text-center md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge className="bg-[var(--color-primary)]/10 text-[var(--color-primary-light)]">
            Plans &amp; Pricing
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 text-white"
        >
          Choose your{" "}
          <span className="text-[var(--color-primary)]">plan</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-dark-muted)]"
        >
          Start free, unlock detailed analytics with Plus, or go all-in with PRO
          for watch tracking, coaching, and competitions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8"
        >
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[var(--color-primary-dark)]"
          >
            Compare plans
          </a>
        </motion.div>
      </div>
    </section>
  );
}
