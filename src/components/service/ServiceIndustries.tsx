"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { useGsapStagger } from "@/lib/hooks/useGsapStagger";

// ── Types ──────────────────────────────────────────────────────────────────────
export interface ServiceIndustry {
  title: string;
  description: string;
  /** Compliance / framework mono badge at the bottom of each card */
  complianceTag?: string;
  /** Tailwind icon-bg class. Default "bg-brand-green/10" */
  iconBg?: string;
  /** Tailwind icon-color class. Default "text-brand-green" */
  iconColor?: string;
  /** Tailwind compliance-tag text color. Default "text-brand-green" */
  tagColor?: string;
  /** Inline SVG render function */
  icon?: React.FC<{ className?: string }>;
}

export interface ServiceIndustriesProps {
  badge: string;
  headline: string;
  subheadline?: string;
  industries: ServiceIndustry[];
}

function IconDefault({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
    </svg>
  );
}

export default function ServiceIndustries({
  badge,
  headline,
  subheadline,
  industries,
}: ServiceIndustriesProps) {
  const cardsRef = useGsapStagger<HTMLDivElement>({ stagger: 0.07, y: 28, start: "top 84%" });

  return (
    <section
      id="service-industries"
      aria-labelledby="service-industries-heading"
      className="w-full max-w-[1360px] mx-auto px-6 md:px-10 py-24 lg:py-32"
    >
      {/* ── Centred header ── */}
      <ScrollReveal className="flex flex-col items-center text-center mb-16 space-y-3 max-w-3xl mx-auto" y={24}>
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-600 font-mono text-[11px] font-bold uppercase tracking-wider">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18" />
          </svg>
          {badge}
        </div>
        <h2
          id="service-industries-heading"
          className="font-[family-name:var(--font-manrope)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight"
        >
          {headline}
        </h2>
        {subheadline && (
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed">{subheadline}</p>
        )}
      </ScrollReveal>

      {/* ── Industry cards ── */}
      <div
        ref={cardsRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {industries.map((industry) => {
          const Icon = industry.icon ?? IconDefault;
          return (
            <div
              key={industry.title}
              style={{ opacity: 0 }}
              className="p-6 rounded-xl bg-white shadow-sm hover:shadow-lg transition-all flex flex-col"
            >
              {/* Icon + Title row */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-lg ${industry.iconBg ?? "bg-brand-green/10"} flex items-center justify-center shrink-0`}>
                  <Icon className={`w-5 h-5 ${industry.iconColor ?? "text-brand-green"}`} />
                </div>
                <h3 className="font-[family-name:var(--font-manrope)] font-bold text-sm text-slate-900 leading-snug">
                  {industry.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-500 leading-relaxed flex-1 mb-5">
                {industry.description}
              </p>

              {/* Compliance tag */}
              {industry.complianceTag && (
                <span className={`font-mono text-[10px] font-bold uppercase tracking-wider ${industry.tagColor ?? "text-brand-green"}`}>
                  {industry.complianceTag}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
