"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export function TeamHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-dark)] pb-20 pt-32 md:pb-28 md:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-primary)] opacity-[0.05] blur-[100px]"
      />

      <div className="relative mx-auto max-w-[1200px] px-6 text-center md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge className="bg-[var(--color-primary)]/10 text-[var(--color-primary-light)]">
            Our Team
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 text-white"
        >
          Built by{" "}
          <span className="text-[var(--color-primary)]">riders</span>, for
          riders
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-dark-muted)]"
        >
          We&apos;re a small team of watersports enthusiasts with one mission:
          build the best app experience for riders worldwide.
        </motion.p>
      </div>
    </section>
  );
}
