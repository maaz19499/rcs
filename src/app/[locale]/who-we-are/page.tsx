import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import WhoWeAreHero from "@/components/who-we-are/WhoWeAreHero";
import AboutRcs from "@/components/who-we-are/AboutRcs";
import CompanyJourney from "@/components/who-we-are/CompanyJourney";
import Leadership from "@/components/Leadership";
import VisionMission from "@/components/who-we-are/VisionMission";
import RegionalPresence from "@/components/who-we-are/RegionalPresence";
import OurApproach from "@/components/who-we-are/OurApproach";
import WhoWeAreCTA from "@/components/who-we-are/WhoWeAreCTA";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "who_we_are_meta" });

  const title       = t("title");
  const description = t("description");

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/who-we-are`,
      languages: {
        en: "/en/who-we-are",
        ar: "/ar/who-we-are",
      },
    },
    openGraph: {
      title,
      description,
      locale: locale === "ar" ? "ar_SA" : "en_US",
      type: "website",
      url: `https://rcsarabia.com/${locale}/who-we-are`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function WhoWeArePage() {
  return (
    <>
      <WhoWeAreHero />
      <AboutRcs />
      <CompanyJourney />
      <Leadership />
      <VisionMission />
      <RegionalPresence />
      <OurApproach />
      <WhoWeAreCTA />
    </>
  );
}
