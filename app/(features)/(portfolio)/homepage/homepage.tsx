import SanctuaryTempleSection from "./_sections/SanctuaryTemples";
import DomeHero from "./_sections/TempleDome";
// import SanctuaryHero from "./_sections/section-hero";

export default function HomePage() {
  return (
    <div>
      {/* <SanctuaryHero /> */}
      {/* <SanctuarySection /> */}
      <DomeHero/>
      <SanctuaryTempleSection/>
    </div>
  );
}
