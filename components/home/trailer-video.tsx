"use client";

import { motion } from "framer-motion";
import { VideoEmbed } from "@/components/ui/video-embed";

export function TrailerVideo() {
  return (
    <section className="relative pb-16 md:pb-20 lg:pb-24">
      <div className="mx-auto max-w-[1080px] px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <VideoEmbed
            videoId="cI5JtzaRjpc"
            label="Watch the Surfr 4.0 trailer · 1:30"
            ariaLabel="Play Surfr 4.0 trailer"
          />
        </motion.div>
      </div>
    </section>
  );
}
