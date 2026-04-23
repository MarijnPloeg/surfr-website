"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { TEAM_MEMBERS } from "@/lib/constants";

export function Team() {
  return (
    <Section alternate>
      <div className="text-center">
        <h2>The team</h2>
      </div>

      <div className="mt-16 flex flex-wrap justify-center gap-10 md:gap-16">
        {TEAM_MEMBERS.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="text-center"
          >
            <div className="mx-auto h-28 w-28 overflow-hidden rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[#0d8fa8] shadow-[var(--shadow-sm)]">
              <div className="flex h-full w-full items-center justify-center text-2xl font-bold text-white">
                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
            </div>
            <h3 className="mt-4 text-base">{member.name}</h3>
            <p className="mt-1 text-sm text-[var(--color-muted)]">
              {member.role}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
