"use client";

import { useTranslations } from "next-intl";
import { ArrowRight, Brain, Code, MonitorSpeaker, Headset, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useGsapStagger } from "@/lib/hooks/useGsapStagger";
import { Link } from "@/i18n/navigation";
import { PILLARS, pillarPath, childPath } from "@/lib/services-data";
import { cn } from "@/lib/utils";

const PILLAR_ICONS: Record<string, LucideIcon> = {
  ai_data: Brain,
  software_cloud_engineering: Code,
  ict_audio_visual_systems: MonitorSpeaker,
  managed_services: Headset,
  cybersecurity: ShieldCheck,
};

type SolutionsKey = keyof ReturnType<typeof useTranslations<"solutions">>;
type TechKey = keyof ReturnType<typeof useTranslations<"what_we_offer_tech">>;

export default function TechnologySolutions() {
  const t = useTranslations("what_we_offer_tech");
  const tSolutions = useTranslations("solutions");
  const tPillars = useTranslations("pillars");
  const tCatalog = useTranslations("catalog");
  const cardsRef = useGsapStagger<HTMLDivElement>({ stagger: 0.08, y: 32, start: "top 84%" });

  return (
    <section
      id="technology-solutions"
      aria-labelledby="tech-sol-heading"
      className="w-full max-w-[1360px] mx-auto px-6 md:px-10 py-24 lg:py-32"
    >
      {/* ── Section header ── */}
      <ScrollReveal className="mb-16 max-w-3xl space-y-3" y={24}>
        <h2
          id="tech-sol-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight"
        >
          {t("headline")}
        </h2>
        <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
          {t("subheadline")}
        </p>
      </ScrollReveal>

      {/* ── Grid: three cards on the first row, two wider cards on the second ── */}
      <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5">
        {PILLARS.map((pillar, i) => {
          const Icon = PILLAR_ICONS[pillar.key];
          return (
            <div
              key={pillar.key}
              style={{ opacity: 0 }}
              className={cn(
                "rcs-card rcs-card-spectrum rcs-card-interactive group relative flex flex-col justify-between p-6 pt-8 rounded-2xl",
                i < 3 ? "lg:col-span-2" : "lg:col-span-3",
                i === PILLARS.length - 1 && "md:col-span-2"
              )}
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-surface-brand text-link flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-text-primary leading-snug">
                    <Link href={pillarPath(pillar)} className="hover:text-link transition-colors">
                      {tPillars(`${pillar.key}.hero.eyebrow`)}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                    {tSolutions(`desc_${pillar.key}` as SolutionsKey)}
                  </p>
                </div>
              </div>

              {/* ── Sub-page links ── */}
              <div className="mt-5 flex flex-wrap gap-1.5 pt-3 border-t border-border">
                {pillar.children.map((childKey) => (
                  <Link
                    key={childKey}
                    href={childPath(pillar, childKey)}
                    className="rcs-tag text-xs font-medium hover:text-link transition-colors"
                  >
                    {tCatalog(`${childKey}.title`)}
                  </Link>
                ))}
              </div>

              <Link
                href={pillarPath(pillar)}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-link"
              >
                <span>{t("explore" as TechKey)}</span>
                <ArrowRight
                  className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
