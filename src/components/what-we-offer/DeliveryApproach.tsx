"use client";

import { useTranslations } from "next-intl";
import { Search, PencilRuler, ArrowRightLeft, Settings, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useGsapStagger } from "@/lib/hooks/useGsapStagger";

// ── Step config: Assess, Design, Transition, Operate, Transform ───────────────
const STEPS: { icon: LucideIcon; numKey: string; titleKey: string; descKey: string }[] = [
  { icon: Search,         numKey: "step1_num", titleKey: "step1_title", descKey: "step1_desc" },
  { icon: PencilRuler,    numKey: "step2_num", titleKey: "step2_title", descKey: "step2_desc" },
  { icon: ArrowRightLeft, numKey: "step3_num", titleKey: "step3_title", descKey: "step3_desc" },
  { icon: Settings,       numKey: "step4_num", titleKey: "step4_title", descKey: "step4_desc" },
  { icon: TrendingUp,     numKey: "step5_num", titleKey: "step5_title", descKey: "step5_desc" },
];

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
      <ScrollReveal className="text-center max-w-3xl mx-auto mb-16 space-y-3" y={24}>
        <h2
          id="delivery-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight"
        >
          {t("headline")}
        </h2>
        <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
          {t("subheadline")}
        </p>
      </ScrollReveal>

      <div ref={stepsRef} className="grid grid-cols-1 md:grid-cols-5 gap-5">
        {STEPS.map(({ icon: Icon, numKey, titleKey, descKey }) => (
          <div
            key={numKey}
            style={{ opacity: 0 }}
            className="rcs-card rcs-card-interactive relative p-6 rounded-2xl"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="font-display text-3xl font-extrabold text-brand-blue/30 dark:text-brand-blue/40">
                {t(numKey as DeliveryKey)}
              </span>
              <div className="w-9 h-9 rounded-xl bg-surface-brand text-link flex items-center justify-center shrink-0">
                <Icon className="w-4 h-4" aria-hidden="true" />
              </div>
            </div>
            <h3 className="font-display font-bold text-base text-text-primary leading-snug">
              {t(titleKey as DeliveryKey)}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-text-secondary leading-relaxed">
              {t(descKey as DeliveryKey)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
