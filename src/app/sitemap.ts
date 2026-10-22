import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { ALL_CHILD_ROUTES, PILLARS, childPath, pillarPath } from "@/lib/services-data";
import { SITE_URL } from "@/lib/structured-data";

const STATIC_PATHS = ["", "/what-we-offer", "/who-we-are", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...STATIC_PATHS,
    ...PILLARS.map(pillarPath),
    ...ALL_CHILD_ROUTES.map(({ pillar, childKey }) => childPath(pillar, childKey)),
  ];

  return paths.flatMap((path) =>
    routing.locales.map((locale) => ({
      url: `${SITE_URL}/${locale}${path}`,
      alternates: {
        languages: Object.fromEntries(routing.locales.map((l) => [l, `${SITE_URL}/${l}${path}`])),
      },
    })),
  );
}
