"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { AssetPlaceholder } from "@/components/ui/asset-placeholder";
import { TEAM_MEMBERS } from "@/lib/constants";

export function Team() {
  return (
    <Section>
      <SectionHeader
        eyebrow="The team"
        title={
          <>
            People who <em>actually</em> ride.
          </>
        }
      />

      <div className="mt-16 flex flex-wrap justify-center gap-10 md:gap-16">
        {TEAM_MEMBERS.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="text-center"
          >
            <div className="mx-auto h-32 w-32 overflow-hidden rounded-full">
              <AssetPlaceholder
                kind="headshot"
                describes={member.name}
                aspectRatio="1/1"
                rounded="md"
                className="h-full w-full"
              />
            </div>
            <h3 className="mt-5 text-[16px]">{member.name}</h3>
            <p className="mt-1 text-[13px] text-(--color-ink-60)">
              {member.role}
            </p>
            {"bio" in member && member.bio && (
              <p className="mx-auto mt-3 max-w-[26ch] text-[13px] leading-relaxed text-(--color-ink-75)">
                {member.bio}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
