import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

// Legacy service URLs → new pillar structure. Permanent (308) so search
// ranking and inbound links carry over.
const LEGACY_SERVICE_REDIRECTS: Record<string, string> = {
  "ict-system-integration": "/services/ict-low-current-systems",
  "audio-visual": "/services/ict-low-current-systems",
  "data-centers": "/services/ict-low-current-systems",
  "ai-digital-twin": "/services/ai-data",
  "elv-smart-solutions": "/services/managed-services/industry-specialized-services",
  "healthcare-hospitality": "/services/managed-services/industry-specialized-services",
  "smart-airport": "/what-we-offer",
  "solar-renewable": "/what-we-offer",
};

const nextConfig: NextConfig = {
  async redirects() {
    // Renamed pillar: /services/ict-audio-visual-systems[/child] → /services/ict-low-current-systems[/child]
    const renamedPillar = [
      {
        source: "/:locale(en|ar)/services/ict-audio-visual-systems/:path*",
        destination: "/:locale/services/ict-low-current-systems/:path*",
        permanent: true,
      },
      {
        source: "/services/ict-audio-visual-systems/:path*",
        destination: "/services/ict-low-current-systems/:path*",
        permanent: true,
      },
    ];

    const legacy = Object.entries(LEGACY_SERVICE_REDIRECTS).flatMap(([oldSlug, destination]) => [
      // Locale-prefixed: /en/services/<old> and /ar/services/<old>
      {
        source: `/:locale(en|ar)/services/${oldSlug}`,
        destination: `/:locale${destination}`,
        permanent: true,
      },
      // Unprefixed: the next-intl middleware adds the locale afterwards
      {
        source: `/services/${oldSlug}`,
        destination,
        permanent: true,
      },
    ]);

    return [...renamedPillar, ...legacy];
  },
};

export default withNextIntl(nextConfig);
