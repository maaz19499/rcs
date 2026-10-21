"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { useGsapStagger } from "@/lib/hooks/useGsapStagger";

// ── Types ──────────────────────────────────────────────────────────────────────
export interface ServiceBenefit {
  /** Sequence number, e.g. "01" */
  num?: string;
  title: string;
  description: string;
  /** Highlighted metric, e.g. "13 Provinces" */
  metric?: string;
  /** Footer confirmation tag, e.g. "Contractually Bound" */
  footerTag?: string;
  /** Tailwind accent color for icon and footer tag. Default "text-brand-green" */
  accentColor?: string;
  /** Inline SVG render function for the icon */
  icon?: React.FC<{ className?: string }>;
}

export interface ServiceBenefitsProps {
  badge: string;
  headline: string;
  subheadline?: string;
  benefits: ServiceBenefit[];
}

function IconDefault({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
    </svg>
  );
}
function IconCheckCircle({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

export default function ServiceBenefits({
  badge,
  headline,
  subheadline,
  benefits,
}: ServiceBenefitsProps) {
  const cardsRef = useGsapStagger<HTMLDivElement>({ stagger: 0.09, y: 28, start: "top 84%" });

  return (
    <section
      id="service-benefits"
      aria-labelledby="service-benefits-heading"
      className="w-full max-w-[1360px] mx-auto px-6 md:px-10 py-24 lg:py-32"
    >
      {/* ── Surface container wrapper matching design ── */}
      <div className="rcs-card rounded-2xl p-8 sm:p-12 lg:p-16 shadow-xl">
        {/* ── Centred header ── */}
        <ScrollReveal className="flex flex-col items-center text-center mb-16 space-y-3 max-w-3xl mx-auto" y={24}>
          <div className="rcs-tag">
            {badge}
          </div>
          <h2
            id="service-benefits-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight"
          >
            {headline}
          </h2>
          {subheadline && (
            <p className="text-secondary text-base sm:text-lg leading-relaxed">{subheadline}</p>
          )}
        </ScrollReveal>

        {/* ── Benefits grid ── */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {benefits.map((benefit) => {
            const Icon = benefit.icon ?? IconDefault;
            return (
              <div
                key={benefit.title}
                style={{ opacity: 0 }}
                className="rcs-card p-5 flex flex-col justify-between"
              >
                <div>
                  {/* Icon + number */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-surface-raised border border-border flex items-center justify-center shadow-sm">
                      <Icon className="w-5 h-5 text-brand-blue" />
                    </div>
                    {benefit.num && (
                      <span className="font-mono text-[11px] font-bold text-muted">{benefit.num}</span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-sm text-primary mb-2 leading-snug">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-secondary leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Metric */}
                {benefit.metric && (
                  <div className="mt-5 pt-3 border-t border-border font-mono text-[11px] font-bold uppercase tracking-wider text-brand-blue">
                    {benefit.metric}
                  </div>
                )}

                {/* Footer confirmation tag */}
                {benefit.footerTag && (
                  <div className="mt-5 pt-3 border-t border-border flex items-center gap-1.5 text-brand-blue font-mono text-[11px] font-semibold">
                    <IconCheckCircle className="w-4 h-4 shrink-0" />
                    <span>{benefit.footerTag}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
