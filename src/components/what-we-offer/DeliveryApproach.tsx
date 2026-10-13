"use client";

import { useTranslations } from "next-intl";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useGsapStagger } from "@/lib/hooks/useGsapStagger";

// ── Step icons ─────────────────────────────────────────────────────────────────
function IconSearch({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  );
}
function IconArchitecture({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
    </svg>
  );
}
function IconBuild({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
    </svg>
  );
}
function IconVerified({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    </svg>
  );
}
function IconSupport({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}

// ── Step config ────────────────────────────────────────────────────────────────
const STEPS = [
  {
    numGhostColor: "text-brand-green/30",
    icon:          IconSearch,
    iconColor:     "text-brand-green",
    phaseLabel:    "PHASE 01 // AUDIT",
    phaseLabelColor: "text-brand-green",
    numKey:   "step1_num",
    titleKey: "step1_title",
    descKey:  "step1_desc",
  },
  {
    numGhostColor: "text-violet-400/30",
    icon:          IconArchitecture,
    iconColor:     "text-violet-600",
    phaseLabel:    "PHASE 02 // ARCHITECTURE",
    phaseLabelColor: "text-violet-600",
    numKey:   "step2_num",
    titleKey: "step2_title",
    descKey:  "step2_desc",
  },
  {
    numGhostColor: "text-brand-orange/30",
    icon:          IconBuild,
    iconColor:     "text-brand-orange",
    phaseLabel:    "PHASE 03 // DEPLOYMENT",
    phaseLabelColor: "text-brand-orange",
    numKey:   "step3_num",
    titleKey: "step3_title",
    descKey:  "step3_desc",
  },
  {
    numGhostColor: "text-brand-green-dark/30",
    icon:          IconVerified,
    iconColor:     "text-brand-green-dark",
    phaseLabel:    "PHASE 04 // COMMISSION",
    phaseLabelColor: "text-brand-green-dark",
    numKey:   "step4_num",
    titleKey: "step4_title",
    descKey:  "step4_desc",
  },
  {
    numGhostColor: "text-slate-400/30",
    icon:          IconSupport,
    iconColor:     "text-slate-700",
    phaseLabel:    "PHASE 05 // CONTINUITY",
    phaseLabelColor: "text-slate-700",
    numKey:   "step5_num",
    titleKey: "step5_title",
    descKey:  "step5_desc",
  },
] as const;

type DeliveryKey = keyof ReturnType<typeof useTranslations<"what_we_offer_delivery">>;

export default function DeliveryApproach() {
  const t = useTranslations("what_we_offer_delivery");
  const stepsRef = useGsapStagger<HTMLDivElement>({ stagger: 0.1, y: 24, start: "top 84%" });

  return (
    <section
      id="delivery-approach"
      aria-labelledby="delivery-heading"
      className="w-full max-w-[1360px] mx-auto px-6 md:px-10 py-24 lg:py-32"
    >
      {/* ── Centred section header ── */}
      <ScrollReveal className="text-center max-w-3xl mx-auto mb-16 space-y-3" y={24}>
        <div className="inline-flex items-center gap-2">
          <span className="h-1.5 w-6 rounded-full bg-brand-green shrink-0" />
          <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-brand-green">
            SYSTEMATIC LIFECYCLE
          </span>
        </div>
        <h2
          id="delivery-heading"
          className="font-[family-name:var(--font-manrope)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight"
        >
          {t("headline")}
        </h2>
        <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
          {t("subheadline")}
        </p>
      </ScrollReveal>

      {/* ── 5-column step grid ── */}
      <div
        ref={stepsRef}
        className="grid grid-cols-1 md:grid-cols-5 gap-5"
      >
        {STEPS.map(({
          numGhostColor, icon: Icon, iconColor,
          phaseLabel, phaseLabelColor,
          numKey, titleKey, descKey,
        }) => (
          <div
            key={numKey}
            style={{ opacity: 0 }}
            className="relative p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            {/* ── Top block ── */}
            <div>
              {/* Ghost number + icon row */}
              <div className="flex items-center justify-between mb-4">
                <span className={`font-[family-name:var(--font-manrope)] text-3xl font-bold ${numGhostColor}`}>
                  {t(numKey as DeliveryKey)}
                </span>
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                  <Icon className={`w-[18px] h-[18px] ${iconColor}`} />
                </div>
              </div>

              {/* Title */}
              <h3 className="font-[family-name:var(--font-manrope)] font-bold text-sm text-slate-900 leading-snug">
                {t(titleKey as DeliveryKey)}
              </h3>

              {/* Description */}
              <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                {t(descKey as DeliveryKey)}
              </p>
            </div>

            {/* ── Phase label footer ── */}
            <div className={`mt-5 pt-3 border-t border-slate-100 font-mono text-[11px] font-semibold ${phaseLabelColor}`}>
              {phaseLabel}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
