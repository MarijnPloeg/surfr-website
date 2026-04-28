"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DisplayHeading, Lede } from "@/components/ui/headings";
import { PhoneMockup } from "@/components/ui/phone-mockup";
import { WatchMockup } from "@/components/ui/watch-mockup";
import { HOMEPAGE_HERO } from "@/lib/constants";

/**
 * Hero — anchored brand moment.
 *
 * Tier A parallax (subtle, deliberate):
 *  • Phone scrolls slower than copy on lg+ viewports (-70px range).
 *  • Two cyan radial glows drift in opposite directions for depth.
 *  • All effects collapse to no-op under prefers-reduced-motion.
 *  • Phone parallax disabled below lg because the phone stacks below
 *    the copy on smaller screens, where parallax would read as broken.
 */
function useIsLg() {
  const [isLg, setIsLg] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsLg(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return isLg;
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const isLg = useIsLg();

  // scrollYProgress: 0 when section top hits viewport top,
  //                  1 when section bottom leaves viewport top.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const enabled = !reduce;
  const phoneEnabled = enabled && isLg;

  // Phone moves up ~70px over the section's scroll. Copy stays static.
  const phoneY = useTransform(
    scrollYProgress,
    [0, 1],
    phoneEnabled ? [0, -70] : [0, 0],
  );
  // Glow A (top-right): drifts up.
  const glowAY = useTransform(
    scrollYProgress,
    [0, 1],
    enabled ? [0, -50] : [0, 0],
  );
  // Glow B (bottom-left): drifts down at half the speed.
  const glowBY = useTransform(
    scrollYProgress,
    [0, 1],
    enabled ? [0, 25] : [0, 0],
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20 lg:pt-44 lg:pb-24"
    >
      {/* Glow A — large soft cyan, top-right, drifts up on scroll */}
      <motion.div
        aria-hidden
        style={{ y: glowAY }}
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 60% 55% at 78% 38%, rgba(1,188,215,0.22), transparent 60%)",
          }}
        />
      </motion.div>

      {/* Glow B — secondary cyan, bottom-left, drifts opposite */}
      <motion.div
        aria-hidden
        style={{ y: glowBY }}
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 55% 50% at 18% 95%, rgba(1,188,215,0.12), transparent 60%)",
          }}
        />
      </motion.div>

      {/* Hairline grid — static, just texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(15,23,32,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,32,0.04) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1200px] px-6 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          {/* Left: copy */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge withDot>{HOMEPAGE_HERO.badgeLabel}</Badge>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mt-6"
            >
              <DisplayHeading>
                <span
                  // The headline is authored as HTML so <em> renders the
                  // italic-cyan accent (styled globally in globals.css).
                  dangerouslySetInnerHTML={{
                    __html: HOMEPAGE_HERO.headlineHtml,
                  }}
                />
              </DisplayHeading>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="mt-6"
            >
              <Lede className="mx-auto lg:mx-0">{HOMEPAGE_HERO.lede}</Lede>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28 }}
              className="mt-9 flex flex-col items-center gap-5 sm:flex-row lg:justify-start"
            >
              <Button href="#get-the-app" size="lg" variant="primary">
                {HOMEPAGE_HERO.primaryCta}
              </Button>
              <a
                href="#whats-new"
                className="inline-flex items-center gap-1.5 text-[14px] font-medium text-(--color-ink-75) transition-colors hover:text-(--color-ink)"
              >
                {HOMEPAGE_HERO.secondaryCta}
                <ChevronDown size={16} />
              </a>
            </motion.div>

            <p className="mt-4 text-[13px] text-(--color-ink-50) lg:text-left">
              Free to download. No credit card required.
            </p>
          </div>

          {/* Right: phone — outer motion controls fade-in,
              inner motion controls parallax + cyan halo. */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              style={{
                y: phoneY,
                filter: "drop-shadow(0 30px 50px rgba(1,188,215,0.25))",
              }}
              className="relative inline-block"
            >
              <PhoneMockup
                // screenshot="/screenshots/home-hero.png"
                alt="Surfr home tab. Session summary."
                fallbackDescribes="Surfr 4.0 home · session summary card with hero jump number"
                className="w-[280px] sm:w-[320px]"
                priority
              />
              {/* Watch overlaps the phone's bottom-right — watch is the
                  primary capture device, so it sits in front. */}
              <div className="absolute -right-6 bottom-[14%] z-10 w-[110px] sm:-right-10 sm:w-[130px]">
                <WatchMockup
                  // screenshot="/screenshots/watch-session.png"
                  alt="Apple Watch — live session metrics"
                  fallbackDescribes="Apple Watch · live session metrics during recording"
                  className="w-full"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
