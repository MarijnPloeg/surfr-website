import type { Metadata } from "next";
import { CompareHero } from "@/components/compare/compare-hero";
import { WhySurfr } from "@/components/compare/why-surfr";
import { CompetitiveTable } from "@/components/compare/competitive-table";
import { CostComparison } from "@/components/compare/cost-comparison";
import { Stats } from "@/components/home/stats";
import { SetupPicker } from "@/components/compare/setup-picker";
import { CompareFaq } from "@/components/compare/compare-faq";
import { DownloadCTA } from "@/components/home/download-cta";

export const metadata: Metadata = {
  title: "Compare",
  description:
    "Surfr compared to WOO, PIQ, and Strava. An honest, side-by-side look, plus a guide to picking the right setup for how you ride.",
};

export default function ComparePage() {
  return (
    <>
      <CompareHero />
      <WhySurfr />
      <CompetitiveTable />
      <CostComparison />
      <Stats />
      <SetupPicker />
      <CompareFaq />
      <DownloadCTA />
    </>
  );
}
