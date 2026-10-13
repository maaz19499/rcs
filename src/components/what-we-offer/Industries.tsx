"use client";

import { useTranslations } from "next-intl";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useGsapStagger } from "@/lib/hooks/useGsapStagger";

// ── Icons ──────────────────────────────────────────────────────────────────────
function IconApartment({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
    </svg>
  );
}
function IconOilBarrel({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
    </svg>
  );
}
function IconManufacturing({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
    </svg>
  );
}
function IconMedical({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
    </svg>
  );
}
function IconHotel({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
  );
}
function IconBank({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
    </svg>
  );
}
function IconTrain({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
    </svg>
  );
}
function IconGovernment({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}

// ── Industry data ──────────────────────────────────────────────────────────────
const INDUSTRIES = [
  { icon: IconApartment,    iconColor: "text-brand-green",      titleKey: "ind1_title", descKey: "ind1_desc" },
  { icon: IconOilBarrel,    iconColor: "text-violet-600",       titleKey: "ind2_title", descKey: "ind2_desc" },
  { icon: IconManufacturing,iconColor: "text-brand-orange",     titleKey: "ind3_title", descKey: "ind3_desc" },
  { icon: IconMedical,      iconColor: "text-brand-green-dark", titleKey: "ind4_title", descKey: "ind4_desc" },
  { icon: IconHotel,        iconColor: "text-brand-green",      titleKey: "ind5_title", descKey: "ind5_desc" },
  { icon: IconBank,         iconColor: "text-violet-600",       titleKey: "ind6_title", descKey: "ind6_desc" },
  { icon: IconTrain,        iconColor: "text-brand-orange",     titleKey: "ind7_title", descKey: "ind7_desc" },
  { icon: IconGovernment,   iconColor: "text-brand-green-dark", titleKey: "ind8_title", descKey: "ind8_desc" },
] as const;

type IndKey = keyof ReturnType<typeof useTranslations<"what_we_offer_industries">>;

export default function Industries() {
  const t = useTranslations("what_we_offer_industries");
  const cardsRef = useGsapStagger<HTMLDivElement>({ stagger: 0.08, y: 24, start: "top 84%" });

  return (
    <section
      id="industries"
      aria-labelledby="industries-heading"
      className="w-full bg-slate-50/40 py-24 lg:py-32"
    >
      <div className="max-w-[1360px] mx-auto px-6 md:px-10">

        {/* ── Centred section header ── */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16 space-y-3" y={24}>
          <div className="inline-flex items-center gap-2">
            <span className="h-1.5 w-6 rounded-full bg-violet-500 shrink-0" />
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-violet-600">
              MARKET ECOSYSTEM // SAUDI VISION 2030
            </span>
          </div>
          <h2
            id="industries-heading"
            className="font-[family-name:var(--font-manrope)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight"
          >
            {t("headline")}
          </h2>
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
            {t("subheadline")}
          </p>
        </ScrollReveal>

        {/* ── 4×2 industry grid ── */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {INDUSTRIES.map(({ icon: Icon, iconColor, titleKey, descKey }) => (
            <div
              key={titleKey}
              style={{ opacity: 0 }}
              className="p-6 rounded-xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon container */}
              <div className={`w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center mb-4 ${iconColor}`}>
                <Icon className="w-5 h-5" />
              </div>

              {/* Title */}
              <h3 className="font-[family-name:var(--font-manrope)] font-semibold text-sm text-slate-900 leading-snug">
                {t(titleKey as IndKey)}
              </h3>

              {/* Description */}
              <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                {t(descKey as IndKey)}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
