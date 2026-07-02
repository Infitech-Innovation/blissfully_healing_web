import { AccommodationsSection } from "./AccommodationsSection";
import { FeaturesSection } from "./FeaturesSection";
import { HeroAltSection } from "./HeroAltSection";
import { VideoCTASection } from "./VideoCtaSection";


export default function RetreatSectionPage() {
    return (
        <div className="min-h-screen bg-[#fffaf6] text-[#3f342c]">
            <HeroAltSection />
            <AccommodationsSection />
            <FeaturesSection />
            <VideoCTASection />
        </div>
    )
}
