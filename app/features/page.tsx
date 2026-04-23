import type { Metadata } from "next";
import { FeaturesHero } from "@/components/features/features-hero";
import { FeaturesDeepDive } from "@/components/features/features-deep-dive";
import { AdditionalFeatures } from "@/components/features/additional-features";
import { DeviceCompatibility } from "@/components/features/device-compatibility";
import { DownloadCTA } from "@/components/home/download-cta";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Track sessions with jump detection, discover 5000+ spots, compete on leaderboards, and connect with riders worldwide. Everything you need on the water.",
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
