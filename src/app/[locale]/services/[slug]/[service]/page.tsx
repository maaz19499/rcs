import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import ServiceHero from "@/components/service/ServiceHero";
import ServiceCardGrid from "@/components/service/ServiceCardGrid";
import RelatedServices from "@/components/service/RelatedServices";
import ServiceCTA from "@/components/service/ServiceCTA";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, organizationSchema, serviceSchema } from "@/lib/structured-data";
import { ALL_CHILD_ROUTES, childPath, getChild, pillarPath } from "@/lib/services-data";

type PageParams = { locale: string; slug: string; service: string };

// Only the pillar/service pairs in generateStaticParams are valid; anything else is a real 404.
export const dynamicParams = false;

interface PillarHero {
  hero: { eyebrow: string };
  cta: { eyebrow: string; headline: string; subheadline: string };
}

export function generateStaticParams() {
  return ALL_CHILD_ROUTES.map(({ slug, service }) => ({ slug, service }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { locale, slug, service } = await params;
  const child = getChild(slug, service);
  if (!child) return {};

  const [tCatalog, tPillars] = await Promise.all([
    getTranslations({ locale, namespace: "catalog" }),
    getTranslations({ locale, namespace: "pillars" }),
  ]);
  const pillarName = (tPillars.raw(child.pillar.key) as PillarHero).hero.eyebrow;
  const title = `${tCatalog(`${child.key}.title`)} | ${pillarName} | RCS Arabia`;
  const description = tCatalog(`${child.key}.description`);
  const path = childPath(child.pillar, child.key);

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

export default async function ServicePage({ params }: { params: Promise<PageParams> }) {
  const { locale, slug, service } = await params;
  setRequestLocale(locale);
  const child = getChild(slug, service);
  if (!child) notFound();

  const { pillar, key, services: members } = child;

  const [tCatalog, tPillars, tPage, tCommon] = await Promise.all([
    getTranslations({ locale, namespace: "catalog" }),
    getTranslations({ locale, namespace: "pillars" }),
    getTranslations({ locale, namespace: "service_page" }),
    getTranslations({ locale, namespace: "common" }),
  ]);

  const pillarContent = tPillars.raw(pillar.key) as PillarHero;
  const pillarName = pillarContent.hero.eyebrow;
  const title = tCatalog(`${key}.title`);
  const description = tCatalog(`${key}.description`);
  const path = childPath(pillar, key);

  // The next (up to) three siblings in this pillar, wrapping around.
  const i = pillar.children.indexOf(key);
  const siblingCount = Math.min(3, pillar.children.length - 1);
  const siblings = Array.from(
    { length: siblingCount },
    (_, n) => pillar.children[(i + 1 + n) % pillar.children.length],
  ).map((siblingKey) => ({
    href: childPath(pillar, siblingKey),
    title: tCatalog(`${siblingKey}.title`),
    description: tCatalog(`${siblingKey}.description`),
    ctaLabel: tPage("explore"),
  }));

  const memberCards = (members ?? []).map((memberKey) => ({
    title: tCatalog(`${memberKey}.title`),
    description: tCatalog(`${memberKey}.description`),
  }));

  return (
    <>
      <JsonLd
        data={[
          organizationSchema(),
          serviceSchema({ name: title, description, path: `/${locale}${path}` }),
          breadcrumbSchema([
            { name: tCommon("home"), path: `/${locale}` },
            { name: tPage("breadcrumb_services"), path: `/${locale}/what-we-offer` },
            { name: pillarName, path: `/${locale}${pillarPath(pillar)}` },
            { name: title, path: `/${locale}${path}` },
          ]),
        ]}
      />

      <ServiceHero
        breadcrumbs={[
          { label: tPage("breadcrumb_services"), href: "/what-we-offer" },
          { label: pillarName, href: pillarPath(pillar) },
          { label: title },
        ]}
        eyebrow={pillarName}
        headline={title}
        subheadline={description}
      />

      {memberCards.length > 0 && (
        <ServiceCardGrid
          id="category-services"
          badge={tPage("what_this_covers")}
          headline={tPage("services_in_category")}
          items={memberCards}
        />
      )}

      <RelatedServices
        badge={pillarName}
        headline={tPage("related_services")}
        services={siblings}
      />
      <ServiceCTA {...pillarContent.cta} />
    </>
  );
}
