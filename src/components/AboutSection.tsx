"use client";

import { useTranslations } from "next-intl";
import { CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useGsapStagger } from "@/lib/hooks/useGsapStagger";

const STATS = [
  { valueKey: "stat1_value", labelKey: "stat1_label", descKey: "stat1_desc" },
  { valueKey: "stat2_value", labelKey: "stat2_label", descKey: "stat2_desc" },
  { valueKey: "stat3_value", labelKey: "stat3_label", descKey: "stat3_desc" },
  { valueKey: "stat4_value", labelKey: "stat4_label", descKey: "stat4_desc" },
] as const;

const CHECKS = ["check1", "check2", "check3"] as const;

type AboutKey = keyof ReturnType<typeof useTranslations<"about">>;

export default function AboutSection() {
  const t = useTranslations("about");
  const kpiRef = useGsapStagger<HTMLDivElement>({ stagger: 0.13, y: 30, start: "top 82%" });

  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <ScrollReveal className="lg:col-span-7" as="div" y={36}>
            <h2 className="font-extrabold tracking-tight text-3xl sm:text-4xl lg:text-5xl leading-tight">
              {t("headline")}
            </h2>

            <div className="mt-6 text-text-secondary text-base sm:text-lg leading-relaxed space-y-4">
              {t("body").split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <ul className="mt-6 flex flex-col gap-3 text-sm font-semibold text-text-primary">
              {CHECKS.map((key) => (
                <li key={key} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-link shrink-0" aria-hidden="true" />
                  <span>{t(key as AboutKey)}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <div ref={kpiRef} className="lg:col-span-5 grid grid-cols-2 gap-4">
            {STATS.map(({ valueKey, labelKey, descKey }) => (
              <div
                key={valueKey}
                className="rcs-card rcs-card-spectrum rcs-card-interactive rounded-3xl p-6 pt-7"
              >
                <div className="font-display text-3xl lg:text-4xl font-extrabold tracking-tight mb-1 text-link">
                  {t(valueKey as AboutKey)}
                </div>
                <div className="font-display font-bold text-sm text-text-primary">
                  {t(labelKey as AboutKey)}
                </div>
                <p className="text-xs text-text-secondary mt-1">{t(descKey as AboutKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
