"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { useGsapStagger } from "@/lib/hooks/useGsapStagger";

// ── Types ──────────────────────────────────────────────────────────────────────
export interface ServiceAdvantageItem {
  title: string;
  description: string;
}

export interface ServiceAdvantageCallout {
  /** Large display value, e.g. "30+" */
  value: string;
  label: string;
  note?: string;
}

export interface ServiceAdvantageProps {
  badge: string;
  headline: string;
  /** Accent part of the headline rendered with the brand gradient */
  headlineAccent?: string;
  subheadline?: string;
  items: ServiceAdvantageItem[];
  callout?: ServiceAdvantageCallout;
}

export default function ServiceAdvantage({
  badge,
  headline,
  headlineAccent,
  subheadline,
  items,
  callout,
}: ServiceAdvantageProps) {
  const pillarsRef = useGsapStagger<HTMLDivElement>({ stagger: 0.08, y: 28, start: "top 84%" });

  return (
    <section
      id="service-advantage"
      aria-labelledby="service-advantage-heading"
      className="w-full max-w-[1360px] mx-auto px-6 md:px-10 py-24 lg:py-32"
    >
      {/* ── Centred header ── */}
      <ScrollReveal className="flex flex-col items-center text-center mb-16 space-y-3 max-w-3xl mx-auto" y={24}>
        <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand-green">
          {badge}
        </span>
        <h2
          id="service-advantage-heading"
          className="font-[family-name:var(--font-manrope)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight"
        >
          {headline}
          {headlineAccent && (
            <>
              {" "}
              <span className="bg-gradient-to-r from-brand-green to-brand-green-dark bg-clip-text text-transparent">
                {headlineAccent}
              </span>
            </>
          )}
        </h2>
        {subheadline && (
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed">{subheadline}</p>
        )}
      </ScrollReveal>

      {/* ── Advantage grid ── */}
      <div
        ref={pillarsRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5"
      >
        {callout && (
          <div
            style={{ opacity: 0 }}
            className="p-5 rounded-xl bg-white shadow-sm flex flex-col justify-center"
          >
            <span className="font-[family-name:var(--font-manrope)] text-5xl font-extrabold leading-none block mb-3 text-brand-green">
              {callout.value}
            </span>
            <h3 className="font-[family-name:var(--font-manrope)] font-bold text-sm text-slate-900 mb-2 leading-snug">
              {callout.label}
            </h3>
            {callout.note && (
              <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-brand-orange">
                {callout.note}
              </p>
            )}
          </div>
        )}
        {items.map((item) => (
          <div
            key={item.title}
            style={{ opacity: 0 }}
            className="p-5 rounded-xl bg-white shadow-sm"
          >
            <h3 className="font-[family-name:var(--font-manrope)] font-bold text-sm text-slate-900 mb-2 leading-snug">
              {item.title}
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
