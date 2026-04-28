"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { DisplayHeading, Lede } from "@/components/ui/headings";
import { Button } from "@/components/ui/button";

export function ProHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-(--color-cyan) opacity-[0.08] blur-[100px]"
      />

      <div className="relative mx-auto max-w-[1200px] px-6 text-center md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge>Plans &amp; Pricing</Badge>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-6"
        >
          <DisplayHeading>
            Pick the plan that <em>matches your riding</em>.
          </DisplayHeading>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="mx-auto mt-6 max-w-2xl"
        >
          <Lede className="mx-auto">
            Start free. Plus unlocks deeper analytics and sharper forecasts.
            PRO adds watch tracking, on-board coaching, and AI insights.
          </Lede>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28 }}
          className="mt-9"
        >
          <Button href="#tiers" variant="primary" size="lg">
            Compare plans
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
