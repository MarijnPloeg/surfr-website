import type { Metadata } from "next";
import { TeamHero } from "@/components/team/team-hero";
import { About } from "@/components/team/about";
import { TeamTimeline } from "@/components/team/timeline";
import { Team } from "@/components/home/team";
import { SocialProof } from "@/components/home/social-proof";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the team behind Surfr. Built by riders, for riders since 2019.",
};

export default function TeamPage() {
  return (
    <>
      <TeamHero />
      <About />
      <TeamTimeline />
      <Team />
      <SocialProof />
    </>
  );
}
