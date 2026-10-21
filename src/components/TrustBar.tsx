"use client";

import { useTranslations } from "next-intl";
import { useGsapStagger } from "@/lib/hooks/useGsapStagger";
import ScrollReveal from "@/components/ui/ScrollReveal";

type TrustBarKey = keyof ReturnType<typeof useTranslations<"trust_bar">>;

const STATS = [
  { labelKey: "stat1_label", descKey: "stat1_desc" },
  { labelKey: "stat2_label", descKey: "stat2_desc" },
  { labelKey: "stat3_label", descKey: "stat3_desc" },
  { labelKey: "stat4_label", descKey: "stat4_desc" },
] as const;

export default function TrustBar() {
  const t = useTranslations("trust_bar");
  const gridRef = useGsapStagger<HTMLDivElement>({ stagger: 0.12, y: 28 });

  return (
    <section className="relative py-10 border-y border-border bg-surface/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-sm font-semibold text-link">{t("heading")}</p>
              <p className="text-sm text-text-secondary mt-0.5">{t("subheading")}</p>
            </div>
          </ScrollReveal>

          <div ref={gridRef} className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {STATS.map(({ labelKey, descKey }) => (
              <div
                key={labelKey}
                className="rcs-card rcs-card-interactive px-5 py-4 flex flex-col items-center gap-1 text-center"
              >
                <span className="font-display font-extrabold text-sm text-text-primary">
                  {t(labelKey as TrustBarKey)}
                </span>
                <span className="text-xs text-text-secondary">{t(descKey as TrustBarKey)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
