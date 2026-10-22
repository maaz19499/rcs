import { setRequestLocale } from "next-intl/server";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import AboutSection from "@/components/AboutSection";
import SolutionsOverview from "@/components/SolutionsOverview";
import TrackRecord from "@/components/TrackRecord";
import Industries from "@/components/Industries";
import WhyRCS from "@/components/WhyRCS";
import RegionalPresence from "@/components/RegionalPresence";
import FinalCTA from "@/components/FinalCTA";
import SEOContent from "@/components/SEOContent";
import JsonLd from "@/components/JsonLd";
import { organizationSchema } from "@/lib/structured-data";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <JsonLd data={organizationSchema()} />
      <HeroSection />
      <TrustBar />
      <AboutSection />
      <SolutionsOverview />
      <TrackRecord />
      <Industries />
      <WhyRCS />
      <RegionalPresence />
      <FinalCTA />
      <SEOContent />
    </>
  );
}
