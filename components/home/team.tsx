"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUp, Navigation, Clock, Zap, type LucideIcon } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { TEAM_MEMBERS } from "@/lib/constants";

type Member = (typeof TEAM_MEMBERS)[number];

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
        description="Each card shows the team member's real personal records inside the Surfr app. Yes, the developers ride too."
      />

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TEAM_MEMBERS.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
          >
            <TeamCard member={member} />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function TeamCard({ member }: { member: Member }) {
  return (
    <article className="group grid h-full grid-cols-[1fr_1fr] overflow-hidden rounded-(--radius-xl) border border-(--color-card-border) bg-(--color-page-tint) shadow-[0_2px_12px_rgba(15,23,32,0.04)] transition-shadow hover:shadow-[0_8px_24px_rgba(15,23,32,0.08)]">
      {/* Data side — mirrors the in-app session card visual language */}
      <div className="flex flex-col p-5">
        <div className="flex items-center gap-2">
          <span className="text-[16px] leading-none">{member.countryFlag}</span>
          <span className="text-[10px] leading-none text-(--color-ink-50)">
            {member.country}
          </span>
        </div>

        <div className="mt-7">
          <h3 className="text-[22px] font-bold tracking-[-0.01em] text-(--color-ink)">
            {member.name}
          </h3>
          <p className="mt-1 text-[12px] leading-snug text-(--color-ink-60)">
            {member.role}
          </p>
        </div>

        <div className="mt-5">
          <p className="font-[family-name:var(--font-roboto-condensed)] text-[10px] font-bold uppercase tracking-[0.2em] text-(--color-ink-50)">
            Age
          </p>
          <p className="mt-1 text-[20px] font-bold text-(--color-ink)">
            {member.age}
          </p>
        </div>

        <div className="mt-5">
          <p className="font-[family-name:var(--font-roboto-condensed)] text-[10px] font-bold uppercase tracking-[0.2em] text-(--color-ink-50)">
            Stats:
          </p>
          <div className="mt-2 grid grid-cols-2 gap-1.5">
            <StatCard label="High on surf" value={member.stats.height} icon={ArrowUp} />
            <StatCard label="Max distance" value={member.stats.distance} icon={Navigation} />
            <StatCard label="Max airtime" value={member.stats.airtime} icon={Clock} />
            <StatCard label="Max speed" value={member.stats.speed} icon={Zap} />
          </div>
        </div>

        <div className="mt-auto pt-4">
          <span className="font-[family-name:var(--font-outfit)] text-[14px] font-bold lowercase text-(--color-cyan)">
            s.
          </span>
        </div>
      </div>

      {/* Photo side — initials fallback when no photo is wired in yet */}
      <div className="relative flex items-center justify-center bg-(--color-ink) overflow-hidden">
        <span className="font-[family-name:var(--font-outfit)] text-[64px] font-bold text-white/15">
          {member.name[0]}
        </span>
        {member.image && (
          <Image
            src={member.image}
            alt={`${member.name}, ${member.role}`}
            fill
            sizes="(max-width: 768px) 50vw, 220px"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        )}
      </div>
    </article>
  );
}

function StatCard({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string;
  icon: LucideIcon;
}) {
  return (
    <div className="relative rounded-(--radius-md) bg-white px-2 py-2 shadow-[0_1px_2px_rgba(15,23,32,0.04)]">
      <div className="flex items-start justify-between gap-1">
        <p className="text-[8px] leading-tight text-(--color-ink-50)">{label}</p>
        <Icon size={10} strokeWidth={2} className="shrink-0 text-(--color-cyan)" />
      </div>
      <p className="mt-1 text-[14px] font-bold leading-none tracking-[-0.01em] text-(--color-ink)">
        {value}
      </p>
    </div>
  );
}
