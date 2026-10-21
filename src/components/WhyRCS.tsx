"use client";

import { useTranslations } from "next-intl";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useGsapStagger } from "@/lib/hooks/useGsapStagger";

type WhyRCSKey = keyof ReturnType<typeof useTranslations<"why_rcs">>;

const ITEMS = [
  { titleKey: "item1_title", descKey: "item1_desc" },
  { titleKey: "item2_title", descKey: "item2_desc" },
  { titleKey: "item3_title", descKey: "item3_desc" },
  { titleKey: "item4_title", descKey: "item4_desc" },
  { titleKey: "item5_title", descKey: "item5_desc" },
] as const;

export default function WhyRCS() {
  const t = useTranslations("why_rcs");
  const itemsRef = useGsapStagger<HTMLDivElement>({ stagger: 0.12, y: 28, start: "top 82%" });

  return (
    <section className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rcs-card rcs-card-spectrum rounded-3xl p-8 pt-10 sm:p-12 sm:pt-14 lg:p-16 lg:pt-20 relative">
          {/* Decorative halos */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-spectrum-cyan/10 rounded-full blur-3xl pointer-events-none" />

          <ScrollReveal className="relative max-w-3xl mb-12" y={28}>
            <h2 className="font-extrabold tracking-tight text-3xl sm:text-4xl">{t("headline")}</h2>
            <p className="text-text-secondary text-base mt-3">{t("subheadline")}</p>
          </ScrollReveal>

          <div ref={itemsRef} className="relative grid grid-cols-1 md:grid-cols-2 gap-6">
            {ITEMS.map((item) => (
              <div key={item.titleKey} className="p-6 rounded-2xl bg-surface-muted border border-border">
                <h3 className="font-display font-bold text-lg text-text-primary mb-2">
                  {t(item.titleKey as WhyRCSKey)}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {t(item.descKey as WhyRCSKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}