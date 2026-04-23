"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PhoneMockup } from "@/components/ui/phone-mockup";
import { APP_STORE_URL, HOMEPAGE_HERO } from "@/lib/constants";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-dark)] pb-20 pt-32 md:pb-28 md:pt-40 lg:pb-32 lg:pt-44">
      {/* Background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-primary)] opacity-[0.06] blur-[120px]"
      />

      {/* Watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex select-none items-center justify-center overflow-hidden"
      >
        <span className="whitespace-nowrap text-[20vw] font-bold uppercase leading-none tracking-tighter text-white opacity-[0.02]">
          RIDE
        </span>
      </div>

      <div className="relative mx-auto max-w-[1200px] px-6 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Copy */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="bg-[var(--color-primary)]/10 text-[var(--color-primary-light)]">
                {HOMEPAGE_HERO.badge}
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-white"
            >
              {HOMEPAGE_HERO.headline}
              <br />
              <span className="text-[var(--color-primary)]">
                {HOMEPAGE_HERO.headlineAccent}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 max-w-lg text-lg text-[var(--color-dark-muted)] lg:mx-0 mx-auto"
            >
              {HOMEPAGE_HERO.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
            >
              <Button
                href={APP_STORE_URL}
                external
                size="lg"
                variant="primary"
              >
                Download Free
              </Button>
              <a
                href="#whats-new"
                className="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-dark-muted)] transition-colors hover:text-white"
              >
                See what&apos;s new in 4.0
                <ChevronDown size={16} />
              </a>
            </motion.div>
          </div>

          {/* Right: Phone mockups */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex items-center justify-center gap-4"
          >
            <div className="-rotate-6 hidden sm:block">
              <PhoneMockup
                size="sm"
                placeholder={
                  <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-b from-[#0d8fa8] to-[var(--color-dark)]">
                    <span className="text-xs font-medium text-white/60">
                      Sessions
                    </span>
                  </div>
                }
              />
            </div>
            <div className="z-10 rotate-3">
              <PhoneMockup
                size="lg"
                placeholder={
                  <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-b from-[var(--color-primary)] to-[#0d8fa8]">
                    <span className="text-3xl font-bold text-white">surfr</span>
                    <span className="mt-2 text-xs text-white/60">
                      4.0
                    </span>
                  </div>
                }
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
