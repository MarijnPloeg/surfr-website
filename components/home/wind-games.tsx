"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { FeatureHeading } from "@/components/ui/headings";
import { PhoneMockup } from "@/components/ui/phone-mockup";
import { WIND_GAMES } from "@/lib/constants";

/**
 * Wind Games callout — the home page's signature cyan moment.
 * Cyan-tinted full-bleed section so the brand color anchors the
 * middle of the page. Replaces the previous BAKL/GKA "official
 * competition" mentions; bound to Surfr via group_id.
 *
 * Tier A parallax: the cyan wash drifts as the section traverses the
 * viewport, giving depth to the brand chunk. Reduced-motion = no-op.
 */
export function WindGames() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  // 0 when section enters viewport bottom, 1 when it leaves the top
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Wash drifts -40px → +40px as the section traverses the viewport
  const washY = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [0, 0] : [-40, 40],
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-(--color-page-tint) py-20 md:py-28 lg:py-32"
    >
      {/* Cyan-tinted radial wash — the brand chunk, drifts on scroll */}
      <motion.div
        aria-hidden
        style={{ y: washY }}
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 70% 65% at 50% 50%, rgba(1,188,215,0.16) 0%, rgba(1,188,215,0.06) 50%, transparent 80%)",
          }}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="relative mx-auto max-w-[1200px] px-6 md:px-8"
      >
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <Eyebrow>{WIND_GAMES.eyebrow}</Eyebrow>
          <FeatureHeading className="mt-5">
            <span
              dangerouslySetInnerHTML={{ __html: WIND_GAMES.headline }}
            />
          </FeatureHeading>

          <p className="mt-5 max-w-[55ch] text-[17px] leading-relaxed text-(--color-ink-75)">
            {WIND_GAMES.description}
          </p>

          <a
            href={WIND_GAMES.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 border-b border-transparent pb-1 text-[15px] font-semibold text-(--color-cyan-ink) transition-[border-color,gap] hover:border-(--color-cyan-ink) hover:gap-2.5"
          >
            {WIND_GAMES.ctaLabel}
            <ArrowUpRight size={16} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
          className="flex justify-center lg:justify-end"
        >
          <a
            href={WIND_GAMES.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit thewindgames.app"
            className="block transition-transform hover:-translate-y-1"
            style={{
              filter: "drop-shadow(0 24px 44px rgba(1,188,215,0.30))",
            }}
          >
            <PhoneMockup
              screenshot="/screenshots/wind-games.PNG"
              alt="Wind Games competition leaderboard"
              fallbackDescribes="Wind Games competition screen · live leaderboard for an event"
              className="w-[280px]"
            />
          </a>
        </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
