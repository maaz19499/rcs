import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import ServiceHero from "@/components/service/ServiceHero";
import ServiceCardGrid from "@/components/service/ServiceCardGrid";
import AttributionStrip from "@/components/service/AttributionStrip";
import RelatedServices from "@/components/service/RelatedServices";
import ServiceCTA from "@/components/service/ServiceCTA";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, organizationSchema } from "@/lib/structured-data";
import { SECTORS, getSectorBySlug, sectorPath } from "@/lib/sectors";

type PageParams = { locale: string; sector: string };

// Only the sector slugs in generateStaticParams are valid; anything else is a real 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return SECTORS.map((s) => ({ sector: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { locale, sector: slug } = await params;
  const sector = getSectorBySlug(slug);
  if (!sector) return {};

  const [tInd, tCatalog, tSectors] = await Promise.all([
    getTranslations({ locale, namespace: "what_we_offer_industries" }),
    getTranslations({ locale, namespace: "catalog" }),
    getTranslations({ locale, namespace: "sectors" }),
  ]);
  const title = tSectors("meta_title", { sector: tInd(`${sector.indKey}_title`) });
  const description = tCatalog(`${sector.services[0]}.description`);
  const path = sectorPath(sector);

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

type Item = { value: string; label: string };

export default async function SectorPage({ params }: { params: Promise<PageParams> }) {
  const { locale, sector: slug } = await params;
  setRequestLocale(locale);
  const sector = getSectorBySlug(slug);
  if (!sector) notFound();

  const [tInd, tCatalog, tSectors, tTrack, tProjects, tCommon] = await Promise.all([
    getTranslations({ locale, namespace: "what_we_offer_industries" }),
    getTranslations({ locale, namespace: "catalog" }),
    getTranslations({ locale, namespace: "sectors" }),
    getTranslations({ locale, namespace: "track_record" }),
    getTranslations({ locale, namespace: "project_references" }),
    getTranslations({ locale, namespace: "common" }),
  ]);

  const name = tInd(`${sector.indKey}_title`);
  const path = sectorPath(sector);
  const primary = sector.services[0];

  const trackItems = tTrack.raw("items") as Item[];
  const figures = sector.figures.map((i) => trackItems[i]).filter(Boolean);

  const serviceCards = sector.services.map((key) => ({
    title: tCatalog(`${key}.title`),
    description: tCatalog(`${key}.description`),
  }));

  const projectCards = sector.projects.map((n) => ({
    title: tProjects(`project${n}_title`),
    description: tProjects(`project${n}_desc`),
  }));

  const otherSectors = SECTORS.filter((s) => s.slug !== sector.slug).map((s) => ({
    href: sectorPath(s),
    title: tInd(`${s.indKey}_title`),
    description: tInd(`${s.indKey}_desc`),
    ctaLabel: tSectors("card_link"),
  }));

  return (
    <>
      <JsonLd
        data={[
          organizationSchema(),
          breadcrumbSchema([
            { name: tCommon("home"), path: `/${locale}` },
            { name: tSectors("badge"), path: `/${locale}/what-we-offer` },
            { name: name, path: `/${locale}${path}` },
          ]),
        ]}
      />

      <ServiceHero
        contactService="managed_services"
        breadcrumbs={[
          { label: tSectors("badge"), href: "/what-we-offer" },
          { label: name },
        ]}
        eyebrow={name}
        headline={tCatalog(`${primary}.title`)}
        subheadline={tCatalog(`${primary}.description`)}
      />

      {figures.length > 0 && <AttributionStrip note={tTrack("note")} items={figures} />}

      <ServiceCardGrid
        id="sector-services"
        badge={tSectors("services_badge")}
        headline={tSectors("services_headline")}
        items={serviceCards}
      />

      {projectCards.length > 0 && (
        <ServiceCardGrid
          id="sector-projects"
          badge={tProjects("badge")}
          headline={tSectors("projects_headline")}
          subheadline={tProjects("attribution")}
          items={projectCards}
        />
      )}

      <RelatedServices
        badge={tSectors("badge")}
        headline={tSectors("other_headline")}
        services={otherSectors}
      />

      <ServiceCTA
        contactService="managed_services"
        eyebrow={name}
        headline={tSectors("cta_headline", { sector: name })}
        subheadline={tSectors("cta_subheadline")}
      />
    </>
  );
}
