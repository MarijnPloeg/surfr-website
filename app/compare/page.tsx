import type { Metadata } from "next";
import { CompareHero } from "@/components/compare/compare-hero";
import { SetupDecision } from "@/components/compare/setup-decision";
import { SetupTable } from "@/components/compare/setup-table";
import { WatchUnlocks } from "@/components/compare/watch-unlocks";
import { WatchOptions } from "@/components/compare/watch-options";
import { CompareFaq } from "@/components/compare/compare-faq";
import { DownloadCTA } from "@/components/home/download-cta";

export const metadata: Metadata = {
  title: "Compare",
  description:
    "Phone in a wetsuit pouch or watch on the wrist. Same Surfr.AI jump detection, different workflow on the water.",
};

export default function ComparePage() {
  return (
    <>
      <CompareHero />
      <SetupDecision />
      <SetupTable />
      <WatchUnlocks />
      <WatchOptions />
      <CompareFaq />
      <DownloadCTA />
    </>
  );
}
