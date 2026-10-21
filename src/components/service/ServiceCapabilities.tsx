"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { useGsapStagger } from "@/lib/hooks/useGsapStagger";

// ── Types ──────────────────────────────────────────────────────────────────────
export interface ServiceCapability {
  /** Short mono tag, e.g. "CAPABILITY 01" */
  tag: string;
  /** Small badge beside the tag, e.g. "Tier-3 Cleared" */
  badge?: string;
  title: string;
  description: string;
  /** Small keyword pills shown under the description */
  pills?: string[];
  /** Footer metric row — left label */
  footerLabel?: string;
  /** Footer metric row — right value */
  footerValue?: string;
  /** Tailwind icon-color class. Default "text-brand-green" */
  accentColor?: string;
  /** Inline SVG render function */
  icon?: React.FC<{ className?: string }>;
}

export interface ServiceCapabilitiesProps {
  badge: string;
  headline: string;
  subheadline?: string;
  capabilities: ServiceCapability[];
}

function IconDefault({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

export default function ServiceCapabilities({
  badge,
  headline,
  subheadline,
  capabilities,
}: ServiceCapabilitiesProps) {
  const cardsRef = useGsapStagger<HTMLDivElement>({ stagger: 0.08, y: 32, start: "top 84%" });

  return (
    <section
      id="service-capabilities"
      aria-labelledby="service-cap-heading"
      className="w-full max-w-[1360px] mx-auto px-6 md:px-10 py-24 lg:py-32"
    >
      {/* ── Centred header ── */}
      <ScrollReveal className="flex flex-col items-center text-center mb-16 space-y-3 max-w-3xl mx-auto" y={24}>
        <div className="rcs-tag">
          <span className="w-3 h-3 shrink-0">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
          </span>
          {badge}
        </div>
        <h2
          id="service-cap-heading"
          className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight"
        >
          {headline}
        </h2>
        {subheadline && (
          <p className="text-secondary text-base sm:text-lg leading-relaxed">{subheadline}</p>
        )}
      </ScrollReveal>

      {/* ── Capabilities grid ── */}
      <div
        ref={cardsRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {capabilities.map((cap) => {
          const Icon = cap.icon ?? IconDefault;
          return (
            <div
              key={cap.tag}
              style={{ opacity: 0 }}
              className="rcs-card rcs-card-interactive group flex flex-col justify-between p-6 rounded-xl"
            >
              <div>
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-surface-raised border border-border group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue text-brand-blue flex items-center justify-center mb-5 transition-all duration-300">
                  <Icon className="w-[26px] h-[26px]" />
                </div>

                {/* Tag + badge row */}
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-brand-blue">
                    {cap.tag}
                  </span>
                  {cap.badge && (
                    <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-surface-raised border border-border text-secondary">
                      {cap.badge}
                    </span>
                  )}
                </div>

                {/* Title + description */}
                <h3 className="font-display font-bold text-base text-primary mb-3 leading-snug">
                  {cap.title}
                </h3>
                <p className="text-sm text-secondary leading-relaxed">
                  {cap.description}
                </p>
                {cap.pills && cap.pills.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {cap.pills.map((pill) => (
                      <span key={pill} className="px-2 py-0.5 rounded text-[11px] font-semibold bg-surface-raised border border-border text-secondary">
                        {pill}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer metric row */}
              {(cap.footerLabel || cap.footerValue) && (
                <div className="mt-5 pt-3 bg-surface-raised/60 border border-border/60 rounded-lg px-3 py-2.5 flex items-center justify-between">
                  {cap.footerLabel && (
                    <span className="text-secondary text-xs">{cap.footerLabel}</span>
                  )}
                  {cap.footerValue && (
                    <span className="font-mono text-[11px] font-bold text-brand-blue">
                      {cap.footerValue}
                    </span>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
