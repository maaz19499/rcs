"use client";

import { useTranslations } from "next-intl";
import { Landmark, HeartPulse, Building, RadioTower, Building2, Hotel, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useGsapStagger } from "@/lib/hooks/useGsapStagger";
import { Link } from "@/i18n/navigation";
import { getPillarBySlug, childPath } from "@/lib/services-data";

const MANAGED = getPillarBySlug("managed-services")!;
const INDUSTRY_HREF = childPath(MANAGED, "industry_specialized_services");

const INDUSTRIES: { icon: LucideIcon; titleKey: string; descKey: string }[] = [
  { icon: Landmark,   titleKey: "ind1_title", descKey: "ind1_desc" },
  { icon: HeartPulse, titleKey: "ind2_title", descKey: "ind2_desc" },
  { icon: Building,   titleKey: "ind3_title", descKey: "ind3_desc" },
  { icon: RadioTower, titleKey: "ind4_title", descKey: "ind4_desc" },
  { icon: Building2,  titleKey: "ind5_title", descKey: "ind5_desc" },
  { icon: Hotel,      titleKey: "ind6_title", descKey: "ind6_desc" },
];

type IndKey = keyof ReturnType<typeof useTranslations<"what_we_offer_industries">>;

export default function Industries() {
  const t = useTranslations("what_we_offer_industries");
  const cardsRef = useGsapStagger<HTMLDivElement>({ stagger: 0.08, y: 24, start: "top 84%" });

  return (
    <section
      id="industries"
      aria-labelledby="industries-heading"
      className="w-full max-w-[1360px] mx-auto px-6 md:px-10 py-24 lg:py-32"
    >
      <ScrollReveal className="text-center max-w-3xl mx-auto mb-16 space-y-3" y={24}>
        <h2
          id="industries-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight"
        >
          {t("headline")}
        </h2>
        <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
          {t("subheadline")}
        </p>
      </ScrollReveal>

      <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {INDUSTRIES.map(({ icon: Icon, titleKey, descKey }) => (
          <Link
            key={titleKey}
            href={INDUSTRY_HREF}
            style={{ opacity: 0 }}
            className="rcs-card rcs-card-interactive group p-6 rounded-2xl flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-surface-brand text-link flex items-center justify-center shrink-0 mb-4">
                <Icon className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="font-display font-bold text-base text-text-primary leading-snug">
                {t(titleKey as IndKey)}
              </h3>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                {t(descKey as IndKey)}
              </p>
            </div>
            <span className="mt-5 pt-3 border-t border-border inline-flex items-center gap-1.5 text-sm font-semibold text-link">
              <span>{t("link_label" as IndKey)}</span>
              <ArrowRight
                className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1"
                aria-hidden="true"
              />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
