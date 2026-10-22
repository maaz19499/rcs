"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useGsapStagger } from "@/lib/hooks/useGsapStagger";

// ── Types ──────────────────────────────────────────────────────────────────────
export interface RelatedService {
  /** Locale-less path, e.g. "/services/ai-data" or "/services/ai-data/genai-solutions" */
  href: string;
  /** Small category label, e.g. "Infrastructure" */
  category?: string;
  title: string;
  description: string;
  /** CTA link label. Defaults to common.discover_solution */
  ctaLabel?: string;
  /** Tailwind text-color class for icon + CTA. Alias of iconColor */
  accentColor?: string;
  /** Tailwind icon-bg class. Default "bg-brand-green/10" */
  iconBg?: string;
  /** Tailwind icon-color class. Default "text-brand-green" */
  iconColor?: string;
  /** Inline SVG icon render function */
  icon?: React.FC<{ className?: string }>;
}

export interface RelatedServicesProps {
  badge?: string;
  headline?: string;
  subheadline?: string;
  services: RelatedService[];
}

function IconDefault({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
    </svg>
  );
}
function IconArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}

export default function RelatedServices({
  badge,
  headline,
  subheadline,
  services,
}: RelatedServicesProps) {
  const t = useTranslations("common");
  const cardsRef = useGsapStagger<HTMLDivElement>({ stagger: 0.08, y: 28, start: "top 84%" });

  if (!services.length) return null;

  return (
    <section
      id="related-services"
      aria-labelledby="related-services-heading"
      className="w-full max-w-[1360px] mx-auto px-6 md:px-10 py-24 lg:py-32"
    >
      {/* ── Centred header ── */}
      <ScrollReveal className="flex flex-col items-center text-center mb-16 space-y-3 max-w-3xl mx-auto" y={20}>
        <div className="rcs-tag">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>
          {badge ?? t("holistic_ecosystem")}
        </div>
        <h2
          id="related-services-heading"
          className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight"
        >
          {headline ?? t("related_services_headline")}
        </h2>
        {subheadline && (
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed">{subheadline}</p>
        )}
      </ScrollReveal>

      {/* ── 3-col service cards ── */}
      <div
        ref={cardsRef}
        className="grid grid-cols-1 md:grid-cols-3 gap-5"
      >
        {services.map((service) => {
          const Icon = service.icon ?? IconDefault;
          return (
            <div
              key={service.href}
              style={{ opacity: 0 }}
              className="rcs-card rcs-card-interactive group p-6 rounded-xl flex flex-col justify-between"
            >
              <div>
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-surface-raised border border-border flex items-center justify-center mb-5 text-brand-blue group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>

                {service.category && (
                  <span className="block mb-2 font-mono text-[10px] font-bold uppercase tracking-widest text-brand-blue">
                    {service.category}
                  </span>
                )}

                {/* Title + description */}
                <h3 className="font-display font-bold text-base text-text-primary mb-3 leading-snug">
                  {service.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* CTA link */}
              <Link
                href={service.href}
                className="mt-6 inline-flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-brand-blue hover:text-text-primary transition-colors"
              >
                <span>{service.ctaLabel ?? t("discover_solution")}</span>
                <IconArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
