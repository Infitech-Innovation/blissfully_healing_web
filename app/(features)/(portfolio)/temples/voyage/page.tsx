import { AboutSection } from "@/features/public/retreats/AboutSection";
import { RetreatsSection } from "@/features/public/retreats/RetreatsSection";

export default function VoyagePage() {
  return (
    <div className="min-h-screen bg-[#fffaf6] text-[#3f342c]">
      {/* <HeroSection /> */}
      <AboutSection />
      <RetreatsSection />
    </div>
  );
}
