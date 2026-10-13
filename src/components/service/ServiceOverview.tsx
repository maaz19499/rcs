"use client";

import { useTranslations } from "next-intl";
import ScrollReveal from "@/components/ui/ScrollReveal";

// ── Types ──────────────────────────────────────────────────────────────────────
export interface ServiceOverviewInlineMetric {
  value: string;
  label: string;
  /** SVG icon render fn */
  icon?: React.FC<{ className?: string }>;
}

export interface ServiceOverviewProps {
  /** Eyebrow pill text */
  badge: string;
  /** Section H2 */
  headline: string;
  /** Two body paragraphs */
  body: string[];
  /** Stat cards shown below body text */
  stats?: ServiceOverviewInlineMetric[];
  /** Optional right-column image src */
  image?: string;
  /** Image alt text */
  imageAlt?: string;
  /** Live HUD overlay — top-left of image */
  imageHudTitle?: string;
  imageHudStatus?: string;
  /** Progress bar HUD — bottom-right of image */
  imageHudMetricLabel?: string;
  imageHudMetricValue?: string;
  imageHudNote?: string;
}

// ── Default inline-metric icons ───────────────────────────────────────────────
function IconHub({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
    </svg>
  );
}
function IconTimer({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

export default function ServiceOverview({
  badge,
  headline,
  body,
  stats = [],
  image,
  imageAlt = "",
  imageHudTitle,
  imageHudStatus,
  imageHudMetricLabel,
  imageHudMetricValue,
  imageHudNote,
}: ServiceOverviewProps) {
  const t = useTranslations("common");
  const defaultIcons = [IconHub, IconTimer];

  return (
    <section
      id="service-overview"
      aria-labelledby="service-overview-heading"
      className="w-full max-w-[1360px] mx-auto px-6 md:px-10 py-24 lg:py-32"
    >
      <ScrollReveal y={28}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* ── Left: text column ── */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-green/10 text-brand-green font-mono text-[11px] font-bold uppercase tracking-wider w-fit">
              <span className="w-3.5 h-3.5 shrink-0">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
              </span>
              {badge}
            </div>

            {/* H2 */}
            <h2
              id="service-overview-heading"
              className="font-[family-name:var(--font-manrope)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
            >
              {headline}
            </h2>

            {/* Body paragraphs */}
            {body.map((para, i) => (
              <p key={i} className={`leading-relaxed ${i === 0 ? "text-slate-700 text-base sm:text-lg" : "text-slate-500 text-sm sm:text-base"}`}>
                {para}
              </p>
            ))}

            {/* Inline metric cards */}
            {stats.length > 0 && (
              <div className="grid grid-cols-2 gap-4 pt-2">
                {stats.map((m, i) => {
                  const Icon = m.icon ?? defaultIcons[i % defaultIcons.length];
                  return (
                    <div key={m.label} className="p-4 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-brand-green shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-[family-name:var(--font-manrope)] text-xl font-extrabold text-slate-900 leading-none mb-0.5">
                          {m.value}
                        </p>
                        <p className="text-slate-500 text-xs leading-snug">{m.label}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* ── Right: image column ── */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-900">
              {image ? (
                <img
                  src={image}
                  alt={imageAlt}
                  className="w-full h-[420px] sm:h-[480px] object-cover"
                />
              ) : (
                /* Placeholder when no image is provided */
                <div className="w-full h-[420px] sm:h-[480px] bg-gradient-to-br from-slate-800 to-brand-navy flex items-center justify-center">
                  <span className="font-mono text-[11px] text-white/30 uppercase tracking-widest">
                    {t("service_image")}
                  </span>
                </div>
              )}

              {/* Top-left live HUD */}
              {imageHudTitle && (
                <div className="absolute top-4 left-4 px-3 py-2.5 rounded-xl bg-white/90 backdrop-blur-md shadow-lg flex items-center gap-2.5">
                  <span className="h-3 w-3 rounded-full bg-brand-green animate-pulse shrink-0" />
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] font-bold text-slate-900 uppercase tracking-wider">
                      {imageHudTitle}
                    </span>
                    {imageHudStatus && (
                      <span className="text-slate-500 text-[10px]">{imageHudStatus}</span>
                    )}
                  </div>
                </div>
              )}

              {/* Bottom-right metric HUD */}
              {imageHudMetricLabel && (
                <div className="absolute bottom-4 right-4 p-3 rounded-xl bg-white/90 backdrop-blur-md shadow-lg flex flex-col gap-1.5 max-w-[220px]">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-[10px] text-slate-500 uppercase">{imageHudMetricLabel}</span>
                    {imageHudMetricValue && (
                      <span className="font-mono text-[11px] text-brand-green font-bold">{imageHudMetricValue}</span>
                    )}
                  </div>
                  <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-brand-green h-full rounded-full" style={{ width: "88%" }} />
                  </div>
                  {imageHudNote && (
                    <p className="text-slate-400 text-[10px]">{imageHudNote}</p>
                  )}
                </div>
              )}
            </div>
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
}
