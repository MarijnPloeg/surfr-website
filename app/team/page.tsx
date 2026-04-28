import type { Metadata } from "next";
import { TeamHero } from "@/components/team/team-hero";
import { About } from "@/components/team/about";
import { TeamTimeline } from "@/components/team/timeline";
import { Team } from "@/components/home/team";

export const metadata: Metadata = {
  title: "Why Surfr exists",
  description:
    "Built on the North Sea since 2019. The first app to track kitesurf jumps from a phone alone, and still the most accurate.",
};

export default function TeamPage() {
  return (
    <>
      <TeamHero />
      <About />
      <TeamTimeline />
      <Team />
    </>
  );
}
