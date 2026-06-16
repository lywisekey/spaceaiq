import { HeroSection } from "@/components/sections/HeroSection";
import { HighwaySection } from "@/components/sections/HighwaySection";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { ConstellationSection } from "@/components/sections/ConstellationSection";
import { MarketsSection } from "@/components/sections/MarketsSection";
import { InvestorsSection } from "@/components/sections/InvestorsSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <HighwaySection />
      <CapabilitiesSection />
      <ConstellationSection />
      <MarketsSection />
      <InvestorsSection />
    </main>
  );
}
