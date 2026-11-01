"use client";

import { useTranslations } from "next-intl";
import { ArrowRight, Brain, Code, MonitorSpeaker, Headset, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useGsapStagger } from "@/lib/hooks/useGsapStagger";
import { Link } from "@/i18n/navigation";
import { PILLARS, pillarPath } from "@/lib/services-data";
import type { PillarDef } from "@/lib/services-data";
import { cn } from "@/lib/utils";

const PILLAR_ICONS: Record<string, LucideIcon> = {
  managed_services: Headset,
  ict_low_current_systems: MonitorSpeaker,
  cybersecurity: ShieldCheck,
  ai_data: Brain,
  software_cloud_engineering: Code,
};

/**
 * Positioning tiers: Managed Services + ICT & Low Current lead ("run and build"),
 * Cybersecurity is "secured by us", and AI & Data with Software & Cloud
 * extend the offer under one Digital heading.
 */
const TIERS = [
  { labelKey: "tier_lead", pillars: ["managed_services", "ict_low_current_systems"], featured: true },
  { labelKey: "tier_secure", pillars: ["cybersecurity"], featured: false },
  { labelKey: "tier_digital", pillars: ["ai_data", "software_cloud_engineering"], featured: false },
] as const;

interface SolutionCardProps {
  title: string;
  description: string;
  cta: string;
  Icon: LucideIcon;
  href: string;
  featured?: boolean;
}

function SolutionCard({ title, description, cta, Icon, href, featured }: SolutionCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group rcs-card rcs-card-spectrum rcs-card-interactive rounded-3xl pt-8 flex flex-col justify-between",
        featured ? "p-9" : "p-7"
      )}
    >
      <div>
        <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-surface-brand text-link transition-colors group-hover:bg-brand-blue group-hover:text-text-on-brand">
          <Icon className="w-6 h-6" aria-hidden="true" />
        </div>
        <h3
          className={cn(
            "font-display font-bold text-text-primary mb-2.5",
            featured ? "text-xl" : "text-lg"
          )}
        >
          {title}
        </h3>
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

function Tier({
  label,
  pillars,
  featured,
}: {
  label: string;
  pillars: PillarDef[];
  featured: boolean;
}) {
  const t = useTranslations("solutions");
  const tPillars = useTranslations("pillars");
  const gridRef = useGsapStagger<HTMLDivElement>({ stagger: 0.09, y: 40, start: "top 85%" });

  return (
    <div>
      <p className="text-sm font-semibold text-link mb-4">{label}</p>
      <div
        ref={gridRef}
        className={cn("grid grid-cols-1 gap-6", pillars.length > 1 && "md:grid-cols-2")}
      >
        {pillars.map((pillar) => (
          <SolutionCard
            key={pillar.key}
            title={tPillars(`${pillar.key}.hero.eyebrow`)}
            description={t(`desc_${pillar.key}` as SolutionsKey)}
            cta={t("card_cta")}
            Icon={PILLAR_ICONS[pillar.key]}
            href={pillarPath(pillar)}
            featured={featured}
          />
        ))}
      </div>
    </div>
  );
}

export default function SolutionsOverview() {
  const t = useTranslations("solutions");

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

        <div className="space-y-10">
          {TIERS.map(({ labelKey, pillars, featured }) => (
            <Tier
              key={labelKey}
              label={t(labelKey as SolutionsKey)}
              pillars={pillars.map((key) => PILLARS.find((p) => p.key === key)!)}
              featured={featured}
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
