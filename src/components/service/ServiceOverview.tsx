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
            <div className="rcs-tag text-xs font-semibold w-fit">
              {badge.replace(/\s*\/\/\s*/g, " · ")}
            </div>

            {/* H2 */}
            <h2
              id="service-overview-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight leading-tight"
            >
              {headline}
            </h2>

            {/* Body paragraphs */}
            {body.map((para, i) => (
              <p key={i} className={`leading-relaxed ${i === 0 ? "text-text-primary text-base sm:text-lg" : "text-text-secondary text-sm sm:text-base"}`}>
                {para}
              </p>
            ))}

            {/* Inline metric cards */}
            {stats.length > 0 && (
              <div className="grid grid-cols-2 gap-4 pt-2">
                {stats.map((m, i) => {
                  const Icon = m.icon ?? defaultIcons[i % defaultIcons.length];
                  return (
                    <div key={m.label} className="rcs-card rcs-card-interactive p-4 rounded-2xl flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-surface-brand text-link flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-display text-xl font-extrabold text-text-primary leading-none mb-0.5">
                          {m.value}
                        </p>
                        <p className="text-text-muted text-xs leading-snug">{m.label}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* ── Right: image column ── */}
          <div className="lg:col-span-6 relative">
            <div className="rcs-card rcs-card-spectrum relative rounded-3xl overflow-hidden shadow-2xl">
              {image ? (
                <img
                  src={image}
                  alt={imageAlt}
                  className="w-full h-[420px] sm:h-[480px] object-cover"
                />
              ) : (
                /* Placeholder when no image is provided */
                <div className="w-full h-[420px] sm:h-[480px] bg-surface flex items-center justify-center">
                  <span className="text-xs text-text-muted uppercase tracking-widest font-semibold">
                    {t("service_image")}
                  </span>
                </div>
              )}

              {/* Top-left live HUD */}
              {imageHudTitle && (
                <div className="absolute top-4 start-4 px-3.5 py-2.5 rounded-xl glass-card flex items-center gap-2.5 shadow-lg">
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-blue animate-pulse shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-text-primary">
                      {imageHudTitle}
                    </span>
                    {imageHudStatus && (
                      <span className="text-text-muted text-[10px]">{imageHudStatus}</span>
                    )}
                  </div>
                </div>
              )}

              {/* Bottom-right metric HUD */}
              {imageHudMetricLabel && (
                <div className="absolute bottom-4 end-4 p-3.5 rounded-xl glass-card flex flex-col gap-1.5 max-w-[220px] shadow-lg">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[10px] text-text-muted uppercase font-semibold">{imageHudMetricLabel}</span>
                    {imageHudMetricValue && (
                      <span className="text-xs text-link font-bold">{imageHudMetricValue}</span>
                    )}
                  </div>
                  <div className="w-full bg-surface-muted h-1.5 rounded-full overflow-hidden">
                    <div className="bg-brand-blue h-full rounded-full" style={{ width: "88%" }} />
                  </div>
                  {imageHudNote && (
                    <p className="text-text-muted text-[10px]">{imageHudNote}</p>
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
