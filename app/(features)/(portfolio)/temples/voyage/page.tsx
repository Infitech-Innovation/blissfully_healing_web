import type { Metadata } from "next";
import { createMetadata } from "@/app/seo";
import { AboutSection } from "@/features/public/retreats/AboutSection";
import { RetreatsSection } from "@/features/public/retreats/RetreatsSection";

export const metadata: Metadata = createMetadata({
  title: "Temple of Voyage",
  description: "Explore Blissfully Healing retreats and reflective spaces in the Temple of Voyage.",
  path: "/temples/voyage",
});

export default function VoyagePage() {
  return (
    <div className="min-h-screen bg-[#fffaf6] text-[#3f342c]">
      {/* <HeroSection /> */}
      <AboutSection />
      <RetreatsSection />
    </div>
  );
}
