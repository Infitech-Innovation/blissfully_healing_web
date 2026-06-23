import { AccommodationsSection } from "@/features/public/retreats/accommodations-section";
import { FeaturesSection } from "@/features/public/retreats/features-section";
import { HeroAltSection } from "@/features/public/retreats/hero-alt-section";
import { VideoCTASection } from "@/features/public/retreats/video-cta-section";

export default function RetreatsPage() {
  return (
    <div className="min-h-screen bg-[#fffaf6] text-[#3f342c]">
      <HeroAltSection />
      <AccommodationsSection />
      <FeaturesSection />
      <VideoCTASection />
    </div>
  );
}
