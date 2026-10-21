"use client";

import { useTranslations } from "next-intl";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useGsapStagger } from "@/lib/hooks/useGsapStagger";

// ── Inline SVG icons ──────────────────────────────────────────────────────────
function IconDns({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
    </svg>
  );
}
function IconShipping({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
    </svg>
  );
}
function IconHub({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
    </svg>
  );
}
function IconMemory({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
    </svg>
  );
}

// ── Era card data ─────────────────────────────────────────────────────────────
const ERAS = [
  { yearKey: "era1_year", titleKey: "era1_title", descKey: "era1_desc", tagKey: "era1_tag", icon: IconDns },
  { yearKey: "era2_year", titleKey: "era2_title", descKey: "era2_desc", tagKey: "era2_tag", icon: IconShipping },
  { yearKey: "era3_year", titleKey: "era3_title", descKey: "era3_desc", tagKey: "era3_tag", icon: IconHub },
  { yearKey: "era4_year", titleKey: "era4_title", descKey: "era4_desc", tagKey: "era4_tag", icon: IconMemory },
] as const;

type JourneyKey = keyof ReturnType<typeof useTranslations<"company_journey">>;

// ── Component ─────────────────────────────────────────────────────────────────
export default function CompanyJourney() {
  const t = useTranslations("company_journey");
  const cardsRef = useGsapStagger<HTMLDivElement>({ stagger: 0.13, y: 36, start: "top 82%" });

  return (
    <section
      id="company-journey"
      aria-labelledby="company-journey-heading"
      className="w-full max-w-[1360px] mx-auto px-6 md:px-10 py-24 lg:py-32 relative"
    >
      <ScrollReveal className="flex flex-col items-center text-center mb-16" y={28}>
        <h2
          id="company-journey-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight max-w-2xl"
        >
          {t("headline")}
        </h2>
        <p className="text-text-secondary text-base sm:text-lg max-w-xl mt-3 leading-relaxed">
          {t("subheadline")}
        </p>
      </ScrollReveal>

      {/* Timeline: a real sequence, so each era keeps its year */}
      <div
        ref={cardsRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        {ERAS.map(({ yearKey, titleKey, descKey, tagKey, icon: Icon }) => (
          <div
            key={yearKey}
            style={{ opacity: 0 }}
            className="rcs-card rcs-card-interactive rcs-card-spectrum flex flex-col p-6 pt-8"
          >
            <div className="flex items-center justify-between mb-5">
              <span className="font-display text-3xl font-extrabold tracking-tight text-link">
                {t(yearKey as JourneyKey)}
              </span>
              <div className="w-9 h-9 rounded-full bg-surface-brand text-link flex items-center justify-center">
                <Icon className="w-4 h-4" />
              </div>
            </div>

            <div className="font-display font-bold text-base text-text-primary mb-2">
              {t(titleKey as JourneyKey)}
            </div>

            <p className="text-sm text-text-secondary leading-relaxed flex-1">
              {t(descKey as JourneyKey)}
            </p>

            <div className="mt-auto pt-4">
              <span className="rcs-tag rcs-tag-brand">{t(tagKey as JourneyKey)}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
