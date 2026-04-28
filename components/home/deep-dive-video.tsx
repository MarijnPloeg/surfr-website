"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionHeading } from "@/components/ui/headings";
import { Lede } from "@/components/ui/headings";
import { VideoEmbed } from "@/components/ui/video-embed";

export function DeepDiveVideo() {
  return (
    <Section id="deep-dive">
      <div className="max-w-[880px]">
        <Eyebrow>See it all in motion</Eyebrow>
        <SectionHeading className="mt-4">
          The full <em>4.0 deep dive.</em>
        </SectionHeading>
        <Lede className="mt-4">
          A walkthrough of every new feature. Spot map, forecasts, live community,
          gear bag and Wind Games.
        </Lede>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
        className="mt-12"
      >
        <VideoEmbed
          videoId="ZYFUeS5bVHw"
          label="Full deep dive · 8:30"
          ariaLabel="Play Surfr 4.0 deep dive"
        />
      </motion.div>
    </Section>
  );
}
