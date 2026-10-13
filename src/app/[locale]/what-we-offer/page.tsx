import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import WhatWeOfferHero from "@/components/what-we-offer/WhatWeOfferHero";
import TechnologySolutions from "@/components/what-we-offer/TechnologySolutions";
import ProjectServices from "@/components/what-we-offer/ProjectServices";
import IntegratedEngineering from "@/components/what-we-offer/IntegratedEngineering";
import Industries from "@/components/what-we-offer/Industries";
import DeliveryApproach from "@/components/what-we-offer/DeliveryApproach";
import WhatWeOfferCTA from "@/components/what-we-offer/WhatWeOfferCTA";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "what_we_offer_meta" });

  const title       = t("title");
  const description = t("description");

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/what-we-offer`,
      languages: {
        en: "/en/what-we-offer",
        ar: "/ar/what-we-offer",
      },
    },
    openGraph: {
      title,
      description,
      locale: locale === "ar" ? "ar_SA" : "en_US",
      type: "website",
      url: `https://rcsarabia.com/${locale}/what-we-offer`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function WhatWeOfferPage() {
  return (
    <>
      <WhatWeOfferHero />
      <TechnologySolutions />
      <ProjectServices />
      <IntegratedEngineering />
      <Industries />
      <DeliveryApproach />
      <WhatWeOfferCTA />
    </>
  );
}
