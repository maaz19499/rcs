"use client";

import { useTranslations } from "next-intl";
import { CheckCircle } from "lucide-react";
import { SectionBadge } from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useGsapStagger } from "@/lib/hooks/useGsapStagger";

const STATS = [
  { valueKey: "stat1_value", labelKey: "stat1_label", descKey: "stat1_desc", color: "text-brand-green" },
  { valueKey: "stat2_value", labelKey: "stat2_label", descKey: "stat2_desc", color: "text-brand-orange" },
  { valueKey: "stat3_value", labelKey: "stat3_label", descKey: "stat3_desc", color: "text-brand-green" },
  { valueKey: "stat4_value", labelKey: "stat4_label", descKey: "stat4_desc", color: "text-slate-900" },
] as const;

const CHECKS = ["check1", "check2", "check3"] as const;

type AboutKey = keyof ReturnType<typeof useTranslations<"about">>;

export default function AboutSection() {
  const t = useTranslations("about");
  const kpiRef = useGsapStagger<HTMLDivElement>({ stagger: 0.13, y: 30, start: "top 82%" });

  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Text column */}
          <ScrollReveal className="lg:col-span-7" as="div" y={36}>
            <SectionBadge variant="green" className="mb-4">
              {t("badge")}
            </SectionBadge>

            <h2 className="font-[family-name:var(--font-manrope)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mt-2">
              {t("headline")}
            </h2>

            <div className="mt-6 text-slate-600 text-base sm:text-lg leading-relaxed space-y-4">
              {t("body").split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3 text-xs font-semibold text-slate-700">
              {CHECKS.map((key) => (
                <div key={key} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green shrink-0" />
                  <span>{t(key as AboutKey)}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* KPI counters */}
          <div ref={kpiRef} className="lg:col-span-5 grid grid-cols-2 gap-4">
            {STATS.map(({ valueKey, labelKey, descKey, color }) => (
              <div
                key={valueKey}
                className="glass-card rounded-2xl p-6 text-left border border-white hover:-translate-y-1 transition-all"
              >
                <div className={`font-[family-name:var(--font-manrope)] text-4xl lg:text-5xl font-extrabold tracking-tight mb-1 ${color}`}>
                  {t(valueKey as AboutKey)}
                </div>
                <div className="font-[family-name:var(--font-manrope)] font-bold text-sm text-slate-900">
                  {t(labelKey as AboutKey)}
                </div>
                <p className="text-xs text-slate-500 mt-1">{t(descKey as AboutKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
