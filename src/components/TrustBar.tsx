"use client";

import { useTranslations } from "next-intl";
import { useGsapStagger } from "@/lib/hooks/useGsapStagger";
import ScrollReveal from "@/components/ui/ScrollReveal";

type TrustBarKey = keyof ReturnType<typeof useTranslations<"trust_bar">>;

const STATS = [
  { symbolKey: "stat1_symbol", labelKey: "stat1_label", descKey: "stat1_desc" },
  { symbolKey: "stat2_symbol", labelKey: "stat2_label", descKey: "stat2_desc" },
  { symbolKey: "stat3_symbol", labelKey: "stat3_label", descKey: "stat3_desc" },
  { symbolKey: "stat4_symbol", labelKey: "stat4_label", descKey: "stat4_desc" },
  // { symbolKey: "stat5_symbol", labelKey: "stat5_label", descKey: "stat5_desc" },
] as const;

export default function TrustBar() {
  const t = useTranslations("trust_bar");
  const gridRef = useGsapStagger<HTMLDivElement>({ stagger: 0.12, y: 28 });

  return (
    <section className="relative py-10 border-y border-slate-200/70 bg-white/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          <ScrollReveal>
            <div className="text-center">
              <span className="text-[11px] uppercase tracking-widest font-mono font-bold text-brand-green">
                {t("heading")}
              </span>
              <p className="text-sm font-bold text-slate-800 mt-0.5">{t("subheading")}</p>
            </div>
          </ScrollReveal>

          <div ref={gridRef} className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {STATS.map(({ symbolKey, labelKey, descKey }) => (
              // <div
              //   key={symbolKey}
              //   className="glass-card rounded-2xl p-5 text-center hover:-translate-y-1 transition-all border border-white"
              // >
              //   <div className="font-[family-name:var(--font-manrope)] text-2xl sm:text-3xl font-extrabold text-brand-green tracking-tight">
              //     {t(symbolKey as TrustBarKey)}
              //   </div>
              //   <div className="font-[family-name:var(--font-manrope)] font-bold text-sm text-slate-900 mt-0.5">
              //     {t(labelKey as TrustBarKey)}
              //   </div>
              //   <p className="text-xs text-slate-500 mt-1 leading-snug">
              //     {t(descKey as TrustBarKey)}
              //   </p>
              // </div>

              <div key={symbolKey} className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
              <div className="px-5 py-2.5 rounded-xl glass-card flex flex-col items-center gap-2.5 hover:bg-white hover:shadow-md transition-all">
              {/* <span className="material-symbols-outlined text-brand-green text-xl">{t(symbolKey as TrustBarKey)}</span> */}
              <span className="font-manrope font-extrabold text-sm tracking-tight text-slate-900">{t(labelKey as TrustBarKey)} 
                </span>
                <span className="font-medium text-xs text-slate-500"> {t(descKey as TrustBarKey)}</span>
              </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
