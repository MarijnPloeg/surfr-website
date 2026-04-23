"use client";

import { motion } from "framer-motion";
import { AppStoreButtons } from "@/components/ui/app-store-buttons";
import { PhoneMockup } from "@/components/ui/phone-mockup";

export function DownloadCTA() {
  return (
    <section className="bg-[var(--color-dark)] py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: Copy + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-white">Your next session starts here</h2>
            <p className="mt-4 text-lg text-[var(--color-dark-muted)]">
              Download Surfr and start tracking your sessions, connecting with
              riders, and pushing your limits today.
            </p>
            <p className="mt-2 text-sm text-[var(--color-dark-muted)]/60">
              Free to download. No credit card required.
            </p>
            <div className="mt-8 flex justify-center lg:justify-start">
              <AppStoreButtons />
            </div>
          </motion.div>

          {/* Right: Tilted phone */}
          <motion.div
            initial={{ opacity: 0, rotate: 0 }}
            whileInView={{ opacity: 1, rotate: 6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:flex lg:justify-center"
          >
            <PhoneMockup
              size="md"
              placeholder={
                <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-b from-[var(--color-primary)] to-[#0d8fa8]">
                  <span className="text-3xl font-bold text-white">surfr</span>
                </div>
              }
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
