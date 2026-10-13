import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import AboutSection from "@/components/AboutSection";
import SolutionsOverview from "@/components/SolutionsOverview";
import ProjectExpertise from "@/components/ProjectExpertise";
import Industries from "@/components/Industries";
import WhyRCS from "@/components/WhyRCS";
import RegionalPresence from "@/components/RegionalPresence";
import FinalCTA from "@/components/FinalCTA";
import SEOContent from "@/components/SEOContent";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <AboutSection />
      <SolutionsOverview />
      <ProjectExpertise />
      <Industries />
      <WhyRCS />
      <RegionalPresence />
      <FinalCTA />
      <SEOContent />
    </>
  );
}
