/**
 * Builders for schema.org structured data. Pure functions — render the result
 * with <JsonLd data={...} />.
 */

export const SITE_URL = "https://rcsarabia.com";
const ORG_NAME = "RCS Arabia";
const ORG_EMAIL = "info@rcsarabia.com";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: ORG_NAME,
    url: SITE_URL,
    email: ORG_EMAIL,
    areaServed: ["Saudi Arabia", "GCC"],
  };
}

/** `path` is locale-prefixed and starts with "/", e.g. "/en/services/ai-data". */
export function serviceSchema(opts: { name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: ["Saudi Arabia", "GCC"],
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
