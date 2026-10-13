"use client";

import { useTranslations } from "next-intl";
import { SectionBadge } from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useGsapStagger } from "@/lib/hooks/useGsapStagger";

type WhyRCSKey = keyof ReturnType<typeof useTranslations<"why_rcs">>;

const ITEMS = [
  { numKey: "item1_num", titleKey: "item1_title", descKey: "item1_desc", accent: "green" },
  { numKey: "item2_num", titleKey: "item2_title", descKey: "item2_desc", accent: "green" },
  { numKey: "item3_num", titleKey: "item3_title", descKey: "item3_desc", accent: "orange" },
  { numKey: "item4_num", titleKey: "item4_title", descKey: "item4_desc", accent: "orange" },
  { numKey: "item5_num", titleKey: "item5_title", descKey: "item5_desc", accent: "green" },
] as const;

export default function WhyRCS() {
  const t = useTranslations("why_rcs");
  const itemsRef = useGsapStagger<HTMLDivElement>({ stagger: 0.12, y: 28, start: "top 82%" });

  return (
    <section className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass-card rounded-3xl p-8 sm:p-12 lg:p-16 border border-white shadow-2xl relative overflow-hidden">
          {/* Decorative halos */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-brand-green/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />

          <ScrollReveal className="max-w-3xl mb-12" y={28}>
            <SectionBadge variant="green" className="mb-2">{t("badge")}</SectionBadge>
            <h2 className="font-[family-name:var(--font-manrope)] text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
              {t("headline")}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">{t("subheadline")}</p>
          </ScrollReveal>

          {/* 5 items: 2+2+1 layout */}
          <div ref={itemsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ITEMS.map((item) => {
              const isOrange = item.accent === "orange";
              return (
                <div
                  key={item.numKey}
                  className="p-6 rounded-2xl bg-white/70 border border-slate-200/80"
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold font-mono text-sm mb-4 ${
                      isOrange
                        ? "bg-amber-50 text-brand-orange"
                        : "bg-emerald-50 text-brand-green"
                    }`}
                  >
                    {t(item.numKey as WhyRCSKey)}
                  </div>
                  <h3 className="font-[family-name:var(--font-manrope)] font-bold text-lg text-slate-900 mb-2">
                    {t(item.titleKey as WhyRCSKey)}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {t(item.descKey as WhyRCSKey)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
