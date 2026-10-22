import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import ServiceHero from "@/components/service/ServiceHero";
import ServiceOverview from "@/components/service/ServiceOverview";
import ServiceCardGrid from "@/components/service/ServiceCardGrid";
import AttributionStrip from "@/components/service/AttributionStrip";
import RelatedServices from "@/components/service/RelatedServices";
import ServiceCTA from "@/components/service/ServiceCTA";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, organizationSchema, serviceSchema } from "@/lib/structured-data";
import { PILLARS, childPath, getPillarBySlug, getRelatedPillars, pillarPath } from "@/lib/services-data";

interface PillarContent {
  meta: { title: string; description: string };
  hero: { eyebrow: string; headline: string; subheadline: string };
  overview: { badge: string; headline: string; body: string[] };
  services: { badge: string; headline: string; subheadline: string };
  useCases: {
    badge: string;
    headline: string;
    subheadline: string;
    items: { title: string; description: string }[];
  };
  attribution?: { note: string; items: { value: string; label: string }[] };
  related: { badge: string; headline: string; subheadline: string };
  cta: { eyebrow: string; headline: string; subheadline: string };
}

type PageParams = { locale: string; slug: string };

// Only the pillar slugs in generateStaticParams are valid; anything else is a real 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return PILLARS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const pillar = getPillarBySlug(slug);
  if (!pillar) return {};

  const t = await getTranslations({ locale, namespace: "pillars" });
  const { title, description } = t.raw(pillar.key).meta as PillarContent["meta"];
  const path = pillarPath(pillar);

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}${path}`,
      languages: { en: `/en${path}`, ar: `/ar${path}` },
    },
    openGraph: {
      title,
      description,
      locale: locale === "ar" ? "ar_SA" : "en_US",
      type: "website",
      url: `https://rcsarabia.com/${locale}${path}`,
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function PillarPage({ params }: { params: Promise<PageParams> }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const pillar = getPillarBySlug(slug);
  if (!pillar) notFound();

  const [tPillars, tCatalog, tPage, tCommon] = await Promise.all([
    getTranslations({ locale, namespace: "pillars" }),
    getTranslations({ locale, namespace: "catalog" }),
    getTranslations({ locale, namespace: "service_page" }),
    getTranslations({ locale, namespace: "common" }),
  ]);

  const content = tPillars.raw(pillar.key) as PillarContent;
  const path = pillarPath(pillar);

  const childCards = pillar.children.map((key) => ({
    title: tCatalog(`${key}.title`),
    description: tCatalog(`${key}.description`),
    href: childPath(pillar, key),
  }));

  const relatedPillars = getRelatedPillars(pillar).map((p) => {
    const hero = (tPillars.raw(p.key) as PillarContent).hero;
    return { href: pillarPath(p), title: hero.eyebrow, description: hero.subheadline };
  });

  return (
    <>
      <JsonLd
        data={[
          organizationSchema(),
          serviceSchema({
            name: content.hero.eyebrow,
            description: content.meta.description,
            path: `/${locale}${path}`,
          }),
          breadcrumbSchema([
            { name: tCommon("home"), path: `/${locale}` },
            { name: tPage("breadcrumb_services"), path: `/${locale}/what-we-offer` },
            { name: content.hero.eyebrow, path: `/${locale}${path}` },
          ]),
        ]}
      />

      <ServiceHero
        breadcrumbs={[
          { label: tPage("breadcrumb_services"), href: "/what-we-offer" },
          { label: content.hero.eyebrow },
        ]}
        eyebrow={content.hero.eyebrow}
        headline={content.hero.headline}
        subheadline={content.hero.subheadline}
      />
      <ServiceOverview {...content.overview} />
      <ServiceCardGrid
        id="pillar-services"
        {...content.services}
        items={childCards}
        linkLabel={tPage("explore")}
      />
      {content.attribution && <AttributionStrip {...content.attribution} />}
      <ServiceCardGrid id="pillar-use-cases" {...content.useCases} items={content.useCases.items} />
      <RelatedServices
        {...content.related}
        services={relatedPillars}
      />
      <ServiceCTA {...content.cta} />
    </>
  );
}
