import { AccommodationsSection } from "./_components/accommodations-section";
import { FeaturesSection } from "./_components/features-section";
import { HeroAltSection } from "./_components/hero-alt-section";
import { VideoCTASection } from "./_components/video-cta-section";

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
