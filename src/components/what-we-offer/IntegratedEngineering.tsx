"use client";

import { useTranslations } from "next-intl";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useGsapStagger } from "@/lib/hooks/useGsapStagger";

// ── Icons ──────────────────────────────────────────────────────────────────────
function IconFoundation({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M12 6.75h.008v.008H12V6.75zm0 3h.008v.008H12V9.75z" />
    </svg>
  );
}
function IconHvac({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>
  );
}
function IconCable({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
    </svg>
  );
}
function IconCheck({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

// ── Discipline card data ───────────────────────────────────────────────────────
// title/desc come from i18n; feature lists and standard labels are presentational
const DISCIPLINES = [
  {
    icon:          IconFoundation,
    titleKey:      "pillar1_title",
    descKey:       "pillar1_desc",
    features: [
      "Subterranean secure equipment bunkers",
      "Seismic zone structural anchoring & analysis",
      "Lattice & monopole telecommunication masts",
      "Pre-cast rapid deployment modular platforms",
    ],
    standardLabel: "Standard Alignment",
    standard:      "SBC (Saudi Building Code) 301–306 Compliance",
  },
  {
    icon:          IconHvac,
    titleKey:      "pillar2_title",
    descKey:       "pillar2_desc",
    features: [
      "In-row closed loop water/glycol cooling",
      "2(N+1) Synchronized diesel backup arrays",
      "Clean-agent Novec 1230 & Inergen suppression",
      "Dynamic PUE optimization under 1.25",
    ],
    standardLabel: "Standard Alignment",
    standard:      "ASHRAE TC 9.9 & NFPA 75/76 High Reliability",
  },
  {
    icon:          IconCable,
    titleKey:      "pillar3_title",
    descKey:       "pillar3_desc",
    features: [
      "High-core count armored backbone routing",
      "Biometric perimeter & mantrap interlocks",
      "EN54 certified voice evacuation arrays",
      "LoRaWAN & Zigbee telemetry sensor meshes",
    ],
    standardLabel: "Standard Alignment",
    standard:      "TIA-942-B & ISO/IEC 11801 Structured Cabling",
  },
] as const;

type EngKey = keyof ReturnType<typeof useTranslations<"what_we_offer_engineering">>;

export default function IntegratedEngineering() {
  const t = useTranslations("what_we_offer_engineering");
  const cardsRef = useGsapStagger<HTMLDivElement>({ stagger: 0.12, y: 32, start: "top 84%" });

  return (
    <section
      id="integrated-engineering"
      aria-labelledby="eng-heading"
      className="w-full max-w-[1360px] mx-auto px-6 md:px-10 py-24 lg:py-32"
    >
      {/* ── Centred section header ── */}
      <ScrollReveal className="text-center max-w-3xl mx-auto mb-16 space-y-3" y={24}>
        <h2
          id="eng-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight"
        >
          {t("headline")}
        </h2>
        <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
          {t("subheadline")}
        </p>
      </ScrollReveal>

      {/* ── 3-column architectural comparison ── */}
      <div
        ref={cardsRef}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        {DISCIPLINES.map(({
          icon: Icon,
          titleKey, descKey, features,
          standardLabel, standard,
        }) => (
          <div
            key={titleKey}
            style={{ opacity: 0 }}
            className="rcs-card rcs-card-spectrum rcs-card-interactive group relative flex flex-col justify-between rounded-2xl p-8 pt-10"
          >
            {/* ── Top block ── */}
            <div className="space-y-5">

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-surface-brand text-link flex items-center justify-center shrink-0">
                <Icon className="w-6 h-6" />
              </div>

              {/* Title + desc */}
              <div>
                <h3 className="font-display text-xl font-bold text-text-primary leading-snug">
                  {t(titleKey as EngKey)}
                </h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                  {t(descKey as EngKey)}
                </p>
              </div>

              {/* Feature checklist */}
              <div className="space-y-2.5 pt-2">
                {features.map((feat) => (
                  <div key={feat} className="flex items-start gap-2">
                    <IconCheck className="w-[18px] h-[18px] shrink-0 mt-0.5 text-link" />
                    <span className="text-xs sm:text-sm text-text-secondary leading-relaxed">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Standards footer tray ── */}
            <div className="mt-6 bg-surface-muted rounded-xl p-4 border border-border">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-text-muted block mb-1">
                {standardLabel}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-text-primary">
                {standard}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
