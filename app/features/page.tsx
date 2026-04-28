import type { Metadata } from "next";
import { FeaturesHero } from "@/components/features/features-hero";
import { FeaturesDeepDive } from "@/components/features/features-deep-dive";
import { AdditionalFeatures } from "@/components/features/additional-features";
import { DeviceCompatibility } from "@/components/features/device-compatibility";
import { DownloadCTA } from "@/components/home/download-cta";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Track jumps, find spots, ride a forecast that's actually useful, and see where you stand. Six things Surfr does well, and the technical detail behind each one.",
};

export default function FeaturesPage() {
  return (
    <>
      <FeaturesHero />
      <FeaturesDeepDive />
      <AdditionalFeatures />
      <DeviceCompatibility />
      <DownloadCTA />
    </>
  );
}
