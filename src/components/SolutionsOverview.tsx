"use client";

import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { SectionBadge, SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useGsapStagger } from "@/lib/hooks/useGsapStagger";
import { Link } from "@/i18n/navigation";

interface SolutionCardProps {
  tag: string;
  title: string;
  description: string;
  cta: string;
  iconName: string;
  accentColor: "green" | "orange" | "blue";
  href: string;
}

function SolutionCard({ tag, title, description, cta, iconName, accentColor, href }: SolutionCardProps) {
  const colorMap = {
    green: {
      tag: "text-brand-green",
      icon: "bg-emerald-500/10 text-brand-green group-hover:bg-brand-green group-hover:text-white",
      corner: "bg-emerald-500/10",
      cta: "text-brand-green",
    },
    orange: {
      tag: "text-brand-orange",
      icon: "bg-amber-500/10 text-brand-orange group-hover:bg-brand-orange group-hover:text-white",
      corner: "bg-amber-500/10",
      cta: "text-brand-orange",
    },
    blue: {
      tag: "text-blue-600",
      icon: "bg-blue-500/10 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
      corner: "bg-blue-500/10",
      cta: "text-blue-600",
    },
  };

  const c = colorMap[accentColor];

  return (
    <Link href={href} className="group glass-card glass-card-hover rounded-3xl p-7 flex flex-col justify-between relative overflow-hidden">
      <div className={cn("absolute top-0 right-0 w-24 h-24 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform", c.corner)} />
      <div>
        <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors", c.icon)}>
          <SolutionIcon name={iconName} />
        </div>
        <span className={cn("text-[11px] font-mono font-bold uppercase tracking-wider", c.tag)}>{tag}</span>
        <h3 className="font-[family-name:var(--font-manrope)] text-lg font-bold text-slate-900 mt-1 mb-2.5">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{description}</p>
      </div>
      <div className={cn("pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs font-bold", c.cta)}>
        <span>{cta}</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
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
  { tagKey: "card1_tag", titleKey: "card1_title", descKey: "card1_desc", ctaKey: "card1_cta", icon: "dns",        color: "green",  href: "/services/ict-system-integration"   },
  { tagKey: "card2_tag", titleKey: "card2_title", descKey: "card2_desc", ctaKey: "card2_cta", icon: "security",   color: "green",  href: "/services/ai-digital-twin"           },
  { tagKey: "card3_tag", titleKey: "card3_title", descKey: "card3_desc", ctaKey: "card3_cta", icon: "hub",        color: "orange", href: "/services/elv-smart-solutions"       },
  { tagKey: "card4_tag", titleKey: "card4_title", descKey: "card4_desc", ctaKey: "card4_cta", icon: "storage",    color: "blue",   href: "/services/data-centers"              },
  { tagKey: "card5_tag", titleKey: "card5_title", descKey: "card5_desc", ctaKey: "card5_cta", icon: "co_present", color: "green",  href: "/services/audio-visual"              },
  { tagKey: "card6_tag", titleKey: "card6_title", descKey: "card6_desc", ctaKey: "card6_cta", icon: "sync",       color: "orange", href: "/services/smart-airport"             },
  { tagKey: "card7_tag", titleKey: "card7_title", descKey: "card7_desc", ctaKey: "card7_cta", icon: "cloud",      color: "blue",   href: "/services/healthcare-hospitality"    },
  { tagKey: "card8_tag", titleKey: "card8_title", descKey: "card8_desc", ctaKey: "card8_cta", icon: "print",      color: "green",  href: "/services/solar-renewable"           },
] as const;

type SolutionsKey = keyof ReturnType<typeof useTranslations<"solutions">>;

export default function SolutionsOverview() {
  const t = useTranslations("solutions");
  const gridRef = useGsapStagger<HTMLDivElement>({ stagger: 0.09, y: 40, start: "top 80%" });

  return (
    <section
      id="services"
      className="py-24 lg:py-32 relative bg-white/50 border-t border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="max-w-3xl mb-16">
          <SectionBadge variant="green" className="mb-4">{t("badge")}</SectionBadge>
          <SectionHeader
            headline={t("headline")}
            subheadline={t("subheadline")}
          />
        </ScrollReveal>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CARDS.map((card) => (
            <SolutionCard
              key={card.titleKey}
              tag={t(card.tagKey as SolutionsKey)}
              title={t(card.titleKey as SolutionsKey)}
              description={t(card.descKey as SolutionsKey)}
              cta={t(card.ctaKey as SolutionsKey)}
              iconName={card.icon}
              accentColor={card.color as "green" | "orange" | "blue"}
              href={card.href}
            />
          ))}
        </div>

        <ScrollReveal className="mt-12 text-center" delay={0.1}>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-brand-green to-brand-green-dark text-white font-[family-name:var(--font-manrope)] font-bold text-sm tracking-wide shadow-md hover:shadow-emerald-500/30 hover:-translate-y-0.5 transition-all"
          >
            {t("section_cta" as SolutionsKey)}
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
