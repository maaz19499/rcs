import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import ServiceHero from "@/components/service/ServiceHero";
import ServiceOverview from "@/components/service/ServiceOverview";
import ServiceCapabilities from "@/components/service/ServiceCapabilities";
import ServiceBenefits from "@/components/service/ServiceBenefits";
import ServiceIndustries from "@/components/service/ServiceIndustries";
import ServiceAdvantage from "@/components/service/ServiceAdvantage";
import ServiceApproach from "@/components/service/ServiceApproach";
import RelatedServices from "@/components/service/RelatedServices";
import ServiceCTA from "@/components/service/ServiceCTA";

import type { ServiceHeroProps } from "@/components/service/ServiceHero";
import type { ServiceOverviewProps } from "@/components/service/ServiceOverview";
import type { ServiceCapabilitiesProps } from "@/components/service/ServiceCapabilities";
import type { ServiceBenefitsProps } from "@/components/service/ServiceBenefits";
import type { ServiceIndustriesProps } from "@/components/service/ServiceIndustries";
import type { ServiceAdvantageProps } from "@/components/service/ServiceAdvantage";
import type { ServiceApproachProps } from "@/components/service/ServiceApproach";
import type { RelatedServicesProps } from "@/components/service/RelatedServices";
import type { ServiceCTAProps } from "@/components/service/ServiceCTA";

// ─────────────────────────────────────────────────────────────────────────────
// Service content lives in messages/{locale}.json under `services.<slug_key>`.
// To add a service: add its slug here and a matching block in every messages file.
// ─────────────────────────────────────────────────────────────────────────────
const SERVICE_SLUGS = [
  "ict-system-integration",
  "ai-digital-twin",
  "elv-smart-solutions",
  "data-centers",
  "audio-visual",
  "smart-airport",
  "healthcare-hospitality",
  "solar-renewable",
] as const;

interface ServicePageData {
  meta: { title: string; description: string };
  hero: ServiceHeroProps;
  overview: ServiceOverviewProps;
  capabilities: ServiceCapabilitiesProps;
  benefits: ServiceBenefitsProps;
  industries: ServiceIndustriesProps;
  advantage: ServiceAdvantageProps;
  approach: ServiceApproachProps;
  related: RelatedServicesProps;
  cta: ServiceCTAProps;
}

type PageParams = { locale: string; slug: string };

const slugToKey = (slug: string) => slug.replace(/-/g, "_");

const isKnownSlug = (slug: string) =>
  (SERVICE_SLUGS as readonly string[]).includes(slug);

async function getService(locale: string, slug: string) {

  const t = await getTranslations({ locale, namespace: "services" });
  console.log(t)
  return t.raw(slugToKey(slug)) as ServicePageData;
}

export async function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isKnownSlug(slug)) return {};

  const { title, description } = (await getService(locale, slug)).meta;
  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/services/${slug}`,
      languages: {
        en: `/en/services/${slug}`,
        ar: `/ar/services/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      locale: locale === "ar" ? "ar_SA" : "en_US",
      type: "website",
      url: `https://rcsarabia.com/${locale}/services/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { locale, slug } = await params;

  if (!isKnownSlug(slug)) notFound();

  const { hero, overview, capabilities, benefits, industries, advantage, approach, related, cta } =
    await getService(locale, slug);

  return (
    <>
      <ServiceHero {...hero} />
      <ServiceOverview {...overview} />
      <ServiceCapabilities {...capabilities} />
      <ServiceBenefits {...benefits} />
      <ServiceIndustries {...industries} />
      <ServiceAdvantage {...advantage} />
      <ServiceApproach {...approach} />
      <RelatedServices {...related} />
      <ServiceCTA {...cta} />
    </>
  );
}
