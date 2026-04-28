"use client";

import { motion } from "framer-motion";
import { AppStoreButtons } from "@/components/ui/app-store-buttons";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionHeading } from "@/components/ui/headings";
import { PhoneMockup } from "@/components/ui/phone-mockup";

export function DownloadCTA() {
  return (
    <section id="get-the-app" className="bg-(--color-page-tint) py-20 md:py-28 lg:py-32 scroll-mt-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <Eyebrow>Free to start</Eyebrow>
            <SectionHeading className="mt-5">
              Your next session <em>starts here</em>.
            </SectionHeading>
            <p className="mx-auto mt-5 max-w-[55ch] text-[17px] leading-relaxed text-(--color-ink-75) lg:mx-0">
              Surfr is free to download and free to use for tracking, leaderboards,
              and the social feed. Plus and PRO unlock deeper analytics. You can
              try both for two weeks before you commit.
            </p>
            <div className="mt-9 flex justify-center lg:justify-start">
              <AppStoreButtons />
            </div>
            <p className="mt-4 text-[13px] text-(--color-ink-50)">
              Free. No credit card required.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hidden justify-center lg:flex"
          >
            <div className="rotate-[6deg]">
              <PhoneMockup
                // screenshot="/screenshots/download-home.png"
                alt="Surfr home tab. Recent session."
                fallbackDescribes="Home tab · recent session card with hero jump number"
                className="w-[260px]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
