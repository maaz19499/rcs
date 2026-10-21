"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useGsapStagger } from "@/lib/hooks/useGsapStagger";
import ScrollReveal from "@/components/ui/ScrollReveal";

// ── Inline SVG icons ──────────────────────────────────────────────────────────
function IconDelivery({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
function IconBadge({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  );
}
function IconBuilding({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
    </svg>
  );
}

// ── Static data ───────────────────────────────────────────────────────────────
const DIFFERENTIATORS = [
  { icon: IconDelivery, titleKey: "diff1_title", descKey: "diff1_desc" },
  { icon: IconBadge,    titleKey: "diff2_title", descKey: "diff2_desc" },
] as const;

const STATS = [
  { valueKey: "stat1_value", labelKey: "stat1_label", descKey: "stat1_desc" },
  { valueKey: "stat2_value", labelKey: "stat2_label", descKey: "stat2_desc" },
  { valueKey: "stat3_value", labelKey: "stat3_label", descKey: "stat3_desc" },
] as const;

type AboutRcsKey = keyof ReturnType<typeof useTranslations<"about_rcs">>;

// ── Component ─────────────────────────────────────────────────────────────────
export default function AboutRcs() {
  const t = useTranslations("about_rcs");

  const diffsRef = useGsapStagger<HTMLDivElement>({ stagger: 0.13, y: 24, start: "top 82%" });
  const statsRef = useGsapStagger<HTMLDivElement>({ stagger: 0.12, y: 20, start: "top 82%" });

  return (
    <section
      id="about-rcs"
      aria-labelledby="about-rcs-heading"
      className="w-full max-w-[1360px] mx-auto px-6 md:px-10 py-24 lg:py-32 relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* ── Left column: narrative + differentiators + stats ── */}
        <div className="lg:col-span-7 flex flex-col gap-8">

          <ScrollReveal y={32}>
            <h2
              id="about-rcs-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight leading-tight"
            >
              {t("headline")}
            </h2>

            <p className="mt-5 text-text-secondary text-base sm:text-lg leading-relaxed">
              {t("body")}
            </p>
          </ScrollReveal>

          {/* Differentiators */}
          <div ref={diffsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {DIFFERENTIATORS.map(({ icon: Icon, titleKey, descKey }) => (
              <div
                key={titleKey}
                style={{ opacity: 0 }}
                className="rcs-card rcs-card-interactive p-5"
              >
                <div className="w-10 h-10 rounded-xl bg-surface-brand text-link flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="font-display font-bold text-base text-text-primary mb-1">
                  {t(titleKey as AboutRcsKey)}
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {t(descKey as AboutRcsKey)}
                </p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {STATS.map(({ valueKey, labelKey, descKey }) => (
              <div
                key={valueKey}
                style={{ opacity: 0 }}
                className="rcs-card rcs-card-spectrum p-4 pt-6 text-start"
              >
                <div className="font-display text-3xl lg:text-4xl font-extrabold tracking-tight text-link">
                  {t(valueKey as AboutRcsKey)}
                </div>
                <div className="font-display font-semibold text-sm text-text-primary mt-1">
                  {t(labelKey as AboutRcsKey)}
                </div>
                <div className="text-xs text-text-muted mt-0.5">
                  {t(descKey as AboutRcsKey)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right column: photo card ── */}
        <ScrollReveal className="lg:col-span-5 relative" delay={0.15} y={40}>
          <div className="relative rounded-3xl overflow-hidden rcs-card rcs-card-spectrum group">
            <div className="relative w-full h-[480px] overflow-hidden">
              <Image
                src="/hero_1.avif"
                alt={t("img_alt")}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* Status pill */}
              <div className="absolute top-6 start-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-text-primary text-xs font-semibold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
                </span>
                <span>{t("hud_status")}</span>
              </div>

              {/* Bottom floating card */}
              <div className="absolute bottom-4 inset-x-4 z-10 p-4 rounded-xl glass-card flex items-center justify-between gap-3">
                <div>
                  <div className="font-display font-bold text-sm text-text-primary">
                    {t("card_title")}
                  </div>
                  <div className="text-xs text-text-secondary mt-0.5">
                    {t("card_subtitle")}
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-surface-brand text-link flex items-center justify-center shrink-0">
                  <IconBuilding className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
