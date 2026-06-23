import { AboutSection } from "../../../../../features/public/retreats/about-section";
// import { HeroSection } from "../../retreats/_components/hero-section";
import { RetreatsSection } from "../../../../../features/public/retreats/retreats-section";

export default function VoyagePage() {
  return (
    <div className="min-h-screen bg-[#fffaf6] text-[#3f342c]">
      {/* <HeroSection /> */}
      <AboutSection />
      <RetreatsSection />
    </div>
  );
}
