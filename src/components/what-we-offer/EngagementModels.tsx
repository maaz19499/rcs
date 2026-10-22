"use client";

import { useTranslations } from "next-intl";
import { Building2, Cloud, Layers, Receipt, Gauge } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useGsapStagger } from "@/lib/hooks/useGsapStagger";

const MODELS: { icon: LucideIcon; titleKey: string; descKey: string }[] = [
  { icon: Building2, titleKey: "model1_title", descKey: "model1_desc" },
  { icon: Cloud,     titleKey: "model2_title", descKey: "model2_desc" },
  { icon: Layers,    titleKey: "model3_title", descKey: "model3_desc" },
  { icon: Receipt,   titleKey: "model4_title", descKey: "model4_desc" },
  { icon: Gauge,     titleKey: "model5_title", descKey: "model5_desc" },
];

type EngagementKey = keyof ReturnType<typeof useTranslations<"what_we_offer_engagement">>;

export default function EngagementModels() {
  const t = useTranslations("what_we_offer_engagement");
  const cardsRef = useGsapStagger<HTMLDivElement>({ stagger: 0.08, y: 24, start: "top 84%" });

  return (
    <section
      id="engagement-models"
      aria-labelledby="engagement-heading"
      className="w-full max-w-[1360px] mx-auto px-6 md:px-10 py-24 lg:py-32"
    >
      <ScrollReveal className="text-center max-w-3xl mx-auto mb-16 space-y-3" y={24}>
        <h2
          id="engagement-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight"
        >
          {t("headline")}
        </h2>
        <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
          {t("subheadline")}
        </p>
      </ScrollReveal>

      <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {MODELS.map(({ icon: Icon, titleKey, descKey }) => (
          <div key={titleKey} style={{ opacity: 0 }} className="rcs-card p-6 rounded-2xl">
            <div className="w-10 h-10 rounded-xl bg-surface-brand text-link flex items-center justify-center shrink-0 mb-4">
              <Icon className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="font-display font-bold text-base text-text-primary leading-snug">
              {t(titleKey as EngagementKey)}
            </h3>
            <p className="mt-2 text-sm text-text-secondary leading-relaxed">
              {t(descKey as EngagementKey)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
