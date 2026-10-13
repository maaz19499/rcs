"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

// ── Types ──────────────────────────────────────────────────────────────────────
export interface ServiceHeroBreadcrumb {
  label: string;
  href?: string;
}

export interface ServiceHeroMetric {
  value: string;
  label: string;
  /** Tailwind text-color for the value. Default "text-brand-green" */
  valueColor?: string;
}

export interface ServiceHeroChip {
  label: string;
  /** Tailwind text-color for the label. Default "text-slate-900" */
  color?: string;
}

export interface ServiceHeroProps {
  /** Breadcrumb trail — last item is current page (no href) */
  breadcrumbs?: ServiceHeroBreadcrumb[];
  /** Eyebrow pill text, e.g. "ICT System Integration // Enterprise Infrastructure" */
  eyebrow: string;
  headline: string;
  /** Second headline line rendered with the brand gradient */
  headlineGradient?: string;
  subheadline: string;
  /** Short highlight chips shown below the CTAs */
  chips?: ServiceHeroChip[];
  /** Primary CTA label */
  ctaPrimary?: string;
  /** Secondary CTA label (download / explore) */
  ctaSecondary?: string;
  ctaSecondaryHref?: string;
  /** Up to 4 translucent metric badges below the CTAs */
  metrics?: ServiceHeroMetric[];
}

// ── Icons ──────────────────────────────────────────────────────────────────────
function IconShield({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}
function IconDownload({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
  );
}
function IconChevronRight({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  );
}
function IconHome({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
  );
}

export default function ServiceHero({
  breadcrumbs = [],
  eyebrow,
  headline,
  headlineGradient,
  subheadline,
  chips = [],
  ctaPrimary,
  ctaSecondary,
  ctaSecondaryHref = "#",
  metrics = [],
}: ServiceHeroProps) {
  const t = useTranslations("common");
  const primaryLabel = ctaPrimary ?? t("talk_to_experts");
  const breadRef   = useRef<HTMLElement>(null);
  const pillRef    = useRef<HTMLDivElement>(null);
  const h1Ref      = useRef<HTMLHeadingElement>(null);
  const subRef     = useRef<HTMLParagraphElement>(null);
  const ctaRef     = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(breadRef.current,  { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.4 })
        .fromTo(pillRef.current,   { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.55 }, "-=0.2")
        .fromTo(h1Ref.current,     { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.65 }, "-=0.3")
        .fromTo(subRef.current,    { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.6  }, "-=0.35")
        .fromTo(ctaRef.current,    { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.5  }, "-=0.3")
        .fromTo(
          metricsRef.current ? Array.from(metricsRef.current.children) : [],
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
          "-=0.25"
        );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="service-hero"
      aria-labelledby="service-hero-heading"
      className="w-full max-w-[1360px] mx-auto px-6 md:px-10 pt-10 sm:pt-16 pb-20 sm:pb-28 flex flex-col items-center text-center relative"
    >
      {/* ── Ambient glow ── */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] h-[320px] bg-gradient-to-r from-brand-green/20 via-brand-green-dark/12 to-brand-orange/15 rounded-full blur-[110px] pointer-events-none -z-10" />

      {/* ── Breadcrumb ── */}
      {breadcrumbs.length > 0 && (
        <nav
          ref={breadRef}
          aria-label="Breadcrumb"
          style={{ opacity: 0 }}
          className="flex items-center gap-1.5 text-slate-500 text-xs font-mono mb-8 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-sm"
        >
          <Link href="/" className="hover:text-brand-green transition-colors flex items-center gap-1">
            <IconHome className="w-3.5 h-3.5" />
            {t("home")}
          </Link>
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-1.5">
              <IconChevronRight className="w-3 h-3 opacity-40" />
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-brand-green transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-slate-900 font-semibold">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
      )}

      {/* ── Eyebrow pill ── */}
      <div
        ref={pillRef}
        style={{ opacity: 0 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-white shadow-sm mb-6"
      >
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green" />
        </span>
        <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand-green">
          {eyebrow}
        </span>
      </div>

      {/* ── H1 ── */}
      <h1
        id="service-hero-heading"
        ref={h1Ref}
        style={{ opacity: 0 }}
        className="font-[family-name:var(--font-manrope)] text-4xl sm:text-5xl lg:text-[58px] font-extrabold text-slate-900 leading-tight tracking-tight max-w-4xl mb-6"
      >
        {headline}
        {headlineGradient && (
          <>
            {" "}
            <span className="bg-gradient-to-r from-brand-green to-brand-green-dark bg-clip-text text-transparent">
              {headlineGradient}
            </span>
          </>
        )}
      </h1>

      {/* ── Subheadline ── */}
      <p
        ref={subRef}
        style={{ opacity: 0 }}
        className="text-slate-600 text-base sm:text-lg lg:text-xl max-w-3xl leading-relaxed mb-10"
      >
        {subheadline}
      </p>

      {/* ── CTAs ── */}
      <div ref={ctaRef} style={{ opacity: 0 }} className="flex flex-wrap items-center justify-center gap-3 mb-12">
        <a
          href="#service-cta"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-gradient-to-r from-brand-green to-brand-green-dark text-white font-[family-name:var(--font-manrope)] font-bold text-sm shadow-lg shadow-brand-green/25 hover:shadow-brand-green/40 hover:-translate-y-0.5 transition-all"
        >
          <IconShield className="w-4 h-4" />
          <span>{primaryLabel}</span>
        </a>
        {ctaSecondary && (
          <a
            href={ctaSecondaryHref}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-white border border-slate-200 text-slate-700 font-[family-name:var(--font-manrope)] font-semibold text-sm hover:border-slate-300 hover:-translate-y-0.5 transition-all"
          >
            <IconDownload className="w-4 h-4 text-brand-green" />
            <span>{ctaSecondary}</span>
          </a>
        )}
      </div>

      {/* ── Highlight chips ── */}
      {chips.length > 0 && (
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {chips.map((chip) => (
            <span
              key={chip.label}
              className={`px-4 py-2 rounded-full glass-card border border-white shadow-sm font-mono text-[11px] font-bold uppercase tracking-wider ${chip.color ?? "text-slate-900"}`}
            >
              {chip.label}
            </span>
          ))}
        </div>
      )}

      {/* ── Metric badges ── */}
      {metrics.length > 0 && (
        <div
          ref={metricsRef}
          className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-3"
        >
          {metrics.map((m) => (
            <div
              key={m.label}
              style={{ opacity: 0 }}
              className="flex flex-col items-center justify-center p-5 rounded-xl glass-card border border-white shadow-sm hover:shadow-md transition-all"
            >
              <span className={`font-[family-name:var(--font-manrope)] text-2xl sm:text-3xl font-extrabold leading-none mb-1.5 ${m.valueColor ?? "text-brand-green"}`}>
                {m.value}
              </span>
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500 text-center">
                {m.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
