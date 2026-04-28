"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { DisplayHeading, Lede } from "@/components/ui/headings";

export function FeaturesHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-(--color-cyan) opacity-[0.08] blur-[100px]"
      />

      <div className="relative mx-auto max-w-[1200px] px-6 text-center md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge>Features</Badge>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-6"
        >
          <DisplayHeading>
            Measured. Not <em>estimated</em>.
          </DisplayHeading>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="mx-auto mt-6 max-w-2xl"
        >
          <Lede className="mx-auto">
            Surfr was the first app to track jump heights from a phone alone.
            We didn&apos;t add features by checking competitor lists. We added them
            because riders kept asking.
          </Lede>
        </motion.div>
      </div>
    </section>
  );
}
