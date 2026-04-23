"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export function FeaturesHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-dark)] pb-20 pt-32 md:pb-28 md:pt-40">
      {/* Background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-primary)] opacity-[0.05] blur-[100px]"
      />

      <div className="relative mx-auto max-w-[1200px] px-6 text-center md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge className="bg-[var(--color-primary)]/10 text-[var(--color-primary-light)]">
            Features
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 text-white"
        >
          Built for kitesurfers,{" "}
          <span className="text-[var(--color-primary)]">by kitesurfers</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-dark-muted)]"
        >
          Surfr was the first app to accurately track jump heights with just a
          phone. We&apos;ve since expanded into a complete platform for tracking,
          competing, and connecting — but accuracy is still our foundation.
        </motion.p>
      </div>
    </section>
  );
}
