"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { useGsapStagger } from "@/lib/hooks/useGsapStagger";

// ── Types ──────────────────────────────────────────────────────────────────────
export interface ServiceApproachStep {
  /** Phase label, e.g. "PHASE 01 // ASSESS" */
  phaseLabel: string;
  /** Step number displayed in a circle badge, e.g. "1" */
  num: string;
  title: string;
  description: string;
  /** Footer detail below the description, e.g. "Posture Diagnostic" */
  footerLabel?: string;
  /** Tailwind text-color for phaseLabel + footerLabel. Default "text-brand-green" */
  accentColor?: string;
}

export interface ServiceApproachProps {
  badge: string;
  headline: string;
  subheadline?: string;
  steps: ServiceApproachStep[];
}

export default function ServiceApproach({
  badge,
  headline,
  subheadline,
  steps,
}: ServiceApproachProps) {
  const stepsRef = useGsapStagger<HTMLDivElement>({ stagger: 0.1, y: 24, start: "top 84%" });

  return (
    <section
      id="service-approach"
      aria-labelledby="service-approach-heading"
      className="w-full max-w-[1360px] mx-auto px-6 md:px-10 py-24 lg:py-32"
    >
      {/* ── Centred header ── */}
      <ScrollReveal className="flex flex-col items-center text-center mb-16 space-y-3 max-w-3xl mx-auto" y={24}>
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-600 font-mono text-[11px] font-bold uppercase tracking-wider">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
          </svg>
          {badge}
        </div>
        <h2
          id="service-approach-heading"
          className="font-[family-name:var(--font-manrope)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight"
        >
          {headline}
        </h2>
        {subheadline && (
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed">{subheadline}</p>
        )}
      </ScrollReveal>

      {/* ── Steps grid ── */}
      <div
        ref={stepsRef}
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5"
      >
        {steps.map((step) => {
          const accent = step.accentColor ?? "text-brand-green";
          return (
            <div
              key={step.phaseLabel}
              style={{ opacity: 0 }}
              className="relative p-6 rounded-xl bg-white/80 backdrop-blur-xl shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* Stage label + number badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`font-mono text-[10px] font-bold uppercase tracking-wider ${accent}`}>
                    {step.phaseLabel}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                    <span className="font-[family-name:var(--font-manrope)] text-base font-bold text-slate-900">
                      {step.num}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-[family-name:var(--font-manrope)] font-bold text-sm text-slate-900 mb-2 leading-snug">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-500 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Footer */}
              {step.footerLabel && (
                <div className={`mt-5 pt-2 font-mono text-[11px] font-semibold ${accent}`}>
                  {step.footerLabel}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
