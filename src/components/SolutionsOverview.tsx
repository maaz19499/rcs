"use client";

import { useTranslations } from "next-intl";
import { ArrowRight, Brain, Code, MonitorSpeaker, Headset, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useGsapStagger } from "@/lib/hooks/useGsapStagger";
import { Link } from "@/i18n/navigation";
import { PILLARS, pillarPath } from "@/lib/services-data";
import { cn } from "@/lib/utils";

const PILLAR_ICONS: Record<string, LucideIcon> = {
  ai_data: Brain,
  software_cloud_engineering: Code,
  ict_audio_visual_systems: MonitorSpeaker,
  managed_services: Headset,
  cybersecurity: ShieldCheck,
};

interface SolutionCardProps {
  title: string;
  description: string;
  cta: string;
  Icon: LucideIcon;
  href: string;
  className?: string;
}

function SolutionCard({ title, description, cta, Icon, href, className }: SolutionCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group rcs-card rcs-card-spectrum rcs-card-interactive rounded-3xl p-7 pt-8 flex flex-col justify-between",
        className
      )}
    >
      <div>
        <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-surface-brand text-link transition-colors group-hover:bg-brand-blue group-hover:text-text-on-brand">
          <Icon className="w-6 h-6" aria-hidden="true" />
        </div>
        <h3 className="font-display text-lg font-bold text-text-primary mb-2.5">{title}</h3>
        <p className="text-sm text-text-secondary leading-relaxed">{description}</p>
      </div>
      <div className="pt-5 mt-5 border-t border-border flex items-center justify-between text-sm font-semibold text-link">
        <span>{cta}</span>
        <ArrowRight
          className="w-4 h-4 transition-transform group-hover:translate-x-1.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-1.5"
          aria-hidden="true"
        />
      </div>
    </Link>
  );
}

type SolutionsKey = keyof ReturnType<typeof useTranslations<"solutions">>;

export default function SolutionsOverview() {
  const t = useTranslations("solutions");
  const tPillars = useTranslations("pillars");
  const gridRef = useGsapStagger<HTMLDivElement>({ stagger: 0.09, y: 40, start: "top 80%" });

  return (
    <section
      id="services"
      className="py-24 lg:py-32 relative bg-surface/50 border-t border-border"
    >
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="max-w-3xl mb-16">
          <SectionHeader
            headline={t("headline")}
            subheadline={t("subheadline")}
          />
        </ScrollReveal>

        {/* Six-column grid: three cards on the first row, two wider cards on the second */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {PILLARS.map((pillar, i) => (
            <SolutionCard
              key={pillar.key}
              title={tPillars(`${pillar.key}.hero.eyebrow`)}
              description={t(`desc_${pillar.key}` as SolutionsKey)}
              cta={t("card_cta")}
              Icon={PILLAR_ICONS[pillar.key]}
              href={pillarPath(pillar)}
              className={cn(
                i < 3 ? "lg:col-span-2" : "lg:col-span-3",
                i === PILLARS.length - 1 && "md:col-span-2"
              )}
            />
          ))}
        </div>

        <ScrollReveal className="mt-12 text-center" delay={0.1}>
          <Link href="/what-we-offer" className="rcs-button rcs-button-primary rounded-full px-8">
            {t("section_cta" as SolutionsKey)}
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
