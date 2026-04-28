"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { DisplayHeading, Lede, FeatureHeading } from "@/components/ui/headings";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ROADMAP, CONTACT_EMAIL } from "@/lib/constants";

/**
 * Roadmap — minimal interactive design.
 *
 * Three phases (now / next / later) selected via a single segmented control.
 * Active phase content cross-fades; an atmospheric wash tint shifts to give
 * each phase its own temperature. The cheapest trust device a small team
 * has: ship in the open, let people see exactly what's queued.
 */

type PhaseKey = "now" | "next" | "later";

const phaseOrder: ReadonlyArray<PhaseKey> = ["now", "next", "later"];

// Atmospheric wash per phase — Now is the active brand cyan,
// Next leans lime+cyan (energy / building), Later goes dreamier purple.
const washByPhase: Record<PhaseKey, string> = {
  now: "radial-gradient(ellipse 60% 50% at 80% 20%, rgba(1,188,215,0.18), transparent 60%), radial-gradient(ellipse 50% 40% at 15% 85%, rgba(1,188,215,0.08), transparent 65%)",
  next: "radial-gradient(ellipse 60% 50% at 20% 25%, rgba(200,230,80,0.20), transparent 60%), radial-gradient(ellipse 55% 45% at 85% 80%, rgba(1,188,215,0.10), transparent 65%)",
  later:
    "radial-gradient(ellipse 55% 50% at 25% 25%, rgba(170,120,255,0.18), transparent 60%), radial-gradient(ellipse 55% 45% at 80% 75%, rgba(170,120,255,0.08), transparent 65%)",
};

export default function RoadmapPage() {
  const [active, setActive] = useState<PhaseKey>("now");
  const reduce = useReducedMotion();
  const data = ROADMAP[active];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-10 md:pt-40 md:pb-12">
        {/* Atmospheric wash — cross-fades when active phase changes */}
        <AnimatePresence mode="sync">
          <motion.div
            key={active}
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.6 }}
            className="pointer-events-none absolute inset-0"
            style={{ backgroundImage: washByPhase[active] }}
          />
        </AnimatePresence>

        <div className="relative mx-auto max-w-[1200px] px-6 text-center md:px-8">
          <Badge>Roadmap</Badge>
          <div className="mt-6">
            <DisplayHeading>
              We ship in the <em>open</em>.
            </DisplayHeading>
          </div>
          <div className="mx-auto mt-6 max-w-2xl">
            <Lede className="mx-auto">
              Now: what&apos;s shipping today. Next: what we&apos;re committed
              to. Later: what we&apos;re thinking about, open to your input.
            </Lede>
          </div>
        </div>
      </section>

      {/* PHASE SELECTOR — sliding-pill segmented control */}
      <section className="relative pb-2">
        <div className="mx-auto max-w-[480px] px-6">
          <div
            role="tablist"
            aria-label="Roadmap phase"
            className="relative flex rounded-full border border-(--color-card-border) bg-(--color-card) p-1.5 shadow-[0_2px_8px_rgba(15,23,32,0.04)]"
          >
            {phaseOrder.map((key) => {
              const isActive = active === key;
              const phaseData = ROADMAP[key];
              return (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(key)}
                  className="relative z-0 flex-1 rounded-full px-5 py-2.5 text-[14px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-cyan) focus-visible:ring-offset-2"
                >
                  {isActive && (
                    <motion.div
                      layoutId="roadmap-active-pill"
                      aria-hidden
                      className="absolute inset-0 -z-10 rounded-full bg-(--color-cyan) shadow-[var(--shadow-cyan-soft)]"
                      transition={
                        reduce
                          ? { duration: 0 }
                          : { type: "spring", stiffness: 380, damping: 32 }
                      }
                    />
                  )}
                  <span
                    className={
                      isActive
                        ? "relative text-black"
                        : "relative text-(--color-ink-60)"
                    }
                  >
                    {phaseData.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ACTIVE PHASE CONTENT */}
      <section className="pt-12 pb-20 md:pt-16 md:pb-28">
        <div className="mx-auto max-w-[1080px] px-6 md:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: reduce ? 0 : 0.3, ease: "easeOut" }}
            >
              <div className="text-center">
                <p className="font-[family-name:var(--font-roboto-condensed)] text-[12px] font-bold uppercase tracking-[0.22em] text-(--color-cyan-ink)">
                  {data.status}
                </p>
                <h2 className="mt-3 text-[28px] font-bold tracking-[-0.015em] text-(--color-ink) md:text-[36px]">
                  {data.version}
                </h2>
              </div>

              <ul
                role="list"
                className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2 md:gap-x-14 md:gap-y-14"
              >
                {data.items.map((item, i) => (
                  <motion.li
                    key={item.title}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: reduce ? 0 : 0.4,
                      delay: reduce ? 0 : 0.08 + i * 0.04,
                      ease: "easeOut",
                    }}
                    className="group relative"
                  >
                    {/* Cyan accent bar — slides in from left on hover */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute left-0 top-1 h-[18px] w-[2px] origin-top scale-y-0 bg-(--color-cyan) transition-transform duration-200 group-hover:scale-y-100"
                    />
                    <div className="flex items-baseline gap-3 pl-5">
                      <span className="font-[family-name:var(--font-roboto-condensed)] text-[12px] font-bold tracking-[0.18em] text-(--color-ink-25)">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-[18px] font-bold tracking-[-0.005em] text-(--color-ink) md:text-[19px]">
                        {item.title}
                      </h3>
                    </div>
                    <p className="mt-2.5 pl-5 text-[15px] leading-relaxed text-(--color-ink-75)">
                      {item.description}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* INPUT CTA — quieter than before, matches minimal aesthetic */}
      <section className="border-t border-(--color-divider) bg-(--color-page-tint) py-16 md:py-20">
        <div className="mx-auto max-w-[680px] px-6 text-center md:px-8">
          <Eyebrow>What&apos;s missing?</Eyebrow>
          <FeatureHeading className="mt-5">
            Tell us what would make Surfr <em>unmissable</em>.
          </FeatureHeading>
          <p className="mt-5 text-[16px] leading-relaxed text-(--color-ink-75)">
            We don&apos;t take feature requests through a form yet. For now,
            the shortest path is an email. Real one. Read by Marijn.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Surfr%20roadmap%20input`}
              className="inline-flex items-center gap-2 rounded-(--radius-md) bg-(--color-cyan) px-7 py-4 text-[15px] font-semibold text-black shadow-[var(--shadow-cyan-soft)] transition-[transform,box-shadow] hover:-translate-y-px hover:shadow-[var(--shadow-cyan-hard)]"
            >
              <Mail size={16} />
              Email us
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-(--radius-md) border border-(--color-ink-25) px-7 py-4 text-[15px] font-semibold text-(--color-ink) transition-[border-color,transform] hover:-translate-y-px hover:border-(--color-ink)"
            >
              Other ways to reach us
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
