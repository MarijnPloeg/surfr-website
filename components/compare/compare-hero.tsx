"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { DisplayHeading, Lede } from "@/components/ui/headings";
import { COMPARE_HERO } from "@/lib/constants";

export function CompareHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-12 md:pt-40 md:pb-16 lg:pt-44 lg:pb-20">
      {/* Soft cyan radial behind the headline. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 55% 50% at 50% 35%, rgba(1,188,215,0.16), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-[900px] px-6 text-center md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge withDot>{COMPARE_HERO.eyebrow}</Badge>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-6"
        >
          <DisplayHeading>
            <span
              dangerouslySetInnerHTML={{
                __html: COMPARE_HERO.headlineHtml,
              }}
            />
          </DisplayHeading>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="mt-6"
        >
          <Lede className="mx-auto">{COMPARE_HERO.description}</Lede>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.24 }}
          className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-7"
        >
          <Link
            href={COMPARE_HERO.primaryCta.href}
            className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-(--color-cyan-ink) transition-colors hover:text-(--color-cyan-ink-hover)"
          >
            {COMPARE_HERO.primaryCta.label}
            <ArrowRight size={16} />
          </Link>
          <Link
            href={COMPARE_HERO.secondaryCta.href}
            className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-(--color-cyan-ink) transition-colors hover:text-(--color-cyan-ink-hover)"
          >
            {COMPARE_HERO.secondaryCta.label}
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
