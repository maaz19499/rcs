"use client";

import { useTranslations } from "next-intl";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useGsapStagger } from "@/lib/hooks/useGsapStagger";

// ── Icons ──────────────────────────────────────────────────────────────────────
function IconAccountTree({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
    </svg>
  );
}
function IconGavel({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.97zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.97z" />
    </svg>
  );
}
function IconPayments({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
    </svg>
  );
}
function IconSchool({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
    </svg>
  );
}
function IconCube({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
    </svg>
  );
}
function IconMap({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
    </svg>
  );
}
function IconCheck({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

const SERVICES = [
  {
    badgeLabel: "Institutional",
    checkLabel: "Enterprise Stage-Gate Governance",
    icon: IconAccountTree,
    titleKey: "svc1_title", descKey: "svc1_desc",
  },
  {
    badgeLabel: "Forensic",
    checkLabel: "Quantum & Schedule Defense",
    icon: IconGavel,
    titleKey: "svc2_title", descKey: "svc2_desc",
  },
  {
    badgeLabel: "Capital Control",
    checkLabel: "Lifecycle BoQ Precision",
    icon: IconPayments,
    titleKey: "svc3_title", descKey: "svc3_desc",
  },
  {
    badgeLabel: "Localization",
    checkLabel: "Saudi Talent Enablement",
    icon: IconSchool,
    titleKey: "svc4_title", descKey: "svc4_desc",
  },
  {
    badgeLabel: "4D/5D BIM",
    checkLabel: "CPM & Risk Simulations",
    icon: IconCube,
    titleKey: "svc5_title", descKey: "svc5_desc",
  },
  {
    badgeLabel: "Macro Scale",
    checkLabel: "Smart City Utility Topology",
    icon: IconMap,
    titleKey: "svc6_title", descKey: "svc6_desc",
  },
] as const;

type ProjectKey = keyof ReturnType<typeof useTranslations<"what_we_offer_projects">>;

export default function ProjectServices() {
  const t = useTranslations("what_we_offer_projects");
  const cardsRef = useGsapStagger<HTMLDivElement>({ stagger: 0.09, y: 28, start: "top 84%" });

  return (
    <section
      id="project-services"
      aria-labelledby="project-svc-heading"
      className="w-full max-w-[1360px] mx-auto px-6 md:px-10 py-24 lg:py-32"
    >
      <div>
        {/* ── Section header ── */}
        <ScrollReveal
          className="mb-16 max-w-3xl space-y-3"
          y={24}
        >
          <h2
            id="project-svc-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight"
          >
            {t("headline")}
          </h2>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
            {t("subheadline")}
          </p>
        </ScrollReveal>

        {/* ── 3-col grid (cards 01–06 + card 07 full-width) ── */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {/* Cards 01–06 */}
          {SERVICES.map(({
            badgeLabel,
            checkLabel,
            icon: Icon, titleKey, descKey,
          }) => (
            <div
              key={titleKey}
              style={{ opacity: 0 }}
              className="rcs-card rcs-card-interactive p-6 rounded-2xl flex flex-col justify-between"
            >
              {/* Badge + icon row */}
              <div className="flex items-center justify-between mb-4">
                <span className="rcs-tag text-xs font-semibold">
                  {badgeLabel}
                </span>
                <div className="w-10 h-10 rounded-xl bg-surface-brand text-link flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
              </div>

              <div>
                <h3 className="font-display font-bold text-base text-text-primary leading-snug">
                  {t(titleKey as ProjectKey)}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {t(descKey as ProjectKey)}
                </p>
              </div>

              {/* Check line */}
              <div className="mt-4 pt-3 border-t border-border flex items-center gap-1.5 text-xs font-semibold text-link">
                <IconCheck className="w-4 h-4 shrink-0 text-link" />
                <span>{checkLabel}</span>
              </div>
            </div>
          ))}

          {/* Card 07 — full-width featured card */}
          <div
            style={{ opacity: 0 }}
            className="rcs-card rcs-card-spectrum p-6 pt-8 rounded-2xl md:col-span-2 lg:col-span-3"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              {/* Left: text block */}
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-2 mb-1">
                  <span className="rcs-tag text-xs font-semibold">
                    Turnkey Giga-Asset
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg text-text-primary leading-snug">
                  {t("svc7_title" as ProjectKey)}
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {t("svc7_desc" as ProjectKey)}
                </p>
              </div>

              {/* Right: tag chips */}
              <div className="flex flex-wrap items-center gap-2 shrink-0">
                <span className="rcs-tag text-xs sm:text-sm font-medium">
                  High-End Towers
                </span>
                <span className="rcs-tag text-xs sm:text-sm font-medium">
                  Hospitality Fitouts
                </span>
                <span className="rcs-tag text-xs sm:text-sm font-semibold bg-brand-blue text-white">
                  Zero-Defect Delivery
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
