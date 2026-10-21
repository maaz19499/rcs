"use client";

import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useGsapStagger } from "@/lib/hooks/useGsapStagger";
import { Link } from "@/i18n/navigation";

interface SolutionCardProps {
  title: string;
  description: string;
  cta: string;
  iconName: string;
  href: string;
}

function SolutionCard({ title, description, cta, iconName, href }: SolutionCardProps) {
  return (
    <Link
      href={href}
      className="group rcs-card rcs-card-spectrum rcs-card-interactive rounded-3xl p-7 pt-8 flex flex-col justify-between"
    >
      <div>
        <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-surface-brand text-link transition-colors group-hover:bg-brand-blue group-hover:text-text-on-brand">
          <SolutionIcon name={iconName} />
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
function SolutionIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    dns: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      </svg>
    ),
    security: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    hub: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <circle cx="12" cy="12" r="3" /><line x1="12" y1="3" x2="12" y2="9" /><line x1="12" y1="15" x2="12" y2="21" />
        <line x1="3" y1="12" x2="9" y2="12" /><line x1="15" y1="12" x2="21" y2="12" />
        <line x1="5.6" y1="5.6" x2="7.8" y2="7.8" /><line x1="16.2" y1="16.2" x2="18.4" y2="18.4" />
        <line x1="18.4" y1="5.6" x2="16.2" y2="7.8" /><line x1="7.8" y1="16.2" x2="5.6" y2="18.4" />
      </svg>
    ),
    storage: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 12h.01" />
      </svg>
    ),
    co_present: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    sync: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    cloud: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    print: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
      </svg>
    ),
  };
  return <>{icons[name] ?? icons.dns}</>;
}

const CARDS = [
  { titleKey: "card1_title", descKey: "card1_desc", ctaKey: "card1_cta", icon: "dns", href: "/services/ict-system-integration"   },
  { titleKey: "card2_title", descKey: "card2_desc", ctaKey: "card2_cta", icon: "security", href: "/services/ai-digital-twin"           },
  { titleKey: "card3_title", descKey: "card3_desc", ctaKey: "card3_cta", icon: "hub", href: "/services/elv-smart-solutions"       },
  { titleKey: "card4_title", descKey: "card4_desc", ctaKey: "card4_cta", icon: "storage", href: "/services/data-centers"              },
  { titleKey: "card5_title", descKey: "card5_desc", ctaKey: "card5_cta", icon: "co_present", href: "/services/audio-visual"              },
  { titleKey: "card6_title", descKey: "card6_desc", ctaKey: "card6_cta", icon: "sync", href: "/services/smart-airport"             },
  { titleKey: "card7_title", descKey: "card7_desc", ctaKey: "card7_cta", icon: "cloud", href: "/services/healthcare-hospitality"    },
  { titleKey: "card8_title", descKey: "card8_desc", ctaKey: "card8_cta", icon: "print", href: "/services/solar-renewable"           },
] as const;

type SolutionsKey = keyof ReturnType<typeof useTranslations<"solutions">>;

export default function SolutionsOverview() {
  const t = useTranslations("solutions");
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

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CARDS.map((card) => (
            <SolutionCard
              key={card.titleKey}
              title={t(card.titleKey as SolutionsKey)}
              description={t(card.descKey as SolutionsKey)}
              cta={t(card.ctaKey as SolutionsKey)}
              iconName={card.icon}
              href={card.href}
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
