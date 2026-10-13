"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { gsap } from "gsap";

// ── Chip icons (inline SVG, no external dependency) ───────────────────────────
function IconHub({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
    </svg>
  );
}
function IconVerified({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    </svg>
  );
}
function IconDomain({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
    </svg>
  );
}
function IconFlag({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
    </svg>
  );
}

// ── Chips — icon colour mapped to brand palette ───────────────────────────────
const CHIPS = [
  { icon: IconHub,      color: "text-brand-green",      titleKey: "chip1_title" },
  { icon: IconVerified, color: "text-brand-green-dark", titleKey: "chip2_title" },
  { icon: IconDomain,   color: "text-brand-orange",     titleKey: "chip3_title" },
  { icon: IconFlag,     color: "text-slate-700",        titleKey: "chip4_title" },
] as const;

type HeroKey = keyof ReturnType<typeof useTranslations<"what_we_offer_hero">>;

export default function WhatWeOfferHero() {
  const t = useTranslations("what_we_offer_hero");

  const pillRef  = useRef<HTMLDivElement>(null);
  const h1Ref    = useRef<HTMLHeadingElement>(null);
  const subRef   = useRef<HTMLParagraphElement>(null);
  const chipsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(pillRef.current,  { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.55 })
        .fromTo(h1Ref.current,    { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.65 }, "-=0.3")
        .fromTo(subRef.current,   { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.6  }, "-=0.35")
        .fromTo(
          chipsRef.current ? Array.from(chipsRef.current.children) : [],
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
          "-=0.25"
        );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="what-we-offer-hero"
      aria-labelledby="wwo-hero-heading"
      className="relative w-full max-w-[1360px] mx-auto px-6 md:px-10 pt-16 sm:pt-24 pb-20 sm:pb-28 overflow-hidden"
    >
      {/* ── Ambient glow orbs ── */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] h-[340px] bg-gradient-to-r from-brand-green/30 via-brand-green-dark/20 to-brand-orange/25 rounded-full blur-[110px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-brand-orange/10 rounded-full blur-[90px] pointer-events-none -z-10" />

      {/* ── Content wrapper ── */}
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6">

        {/* Eyebrow pill */}
        <div
          ref={pillRef}
          style={{ opacity: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-white shadow-sm"
        >
          {/* Animated ping dot */}
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-green" />
          </span>
          <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-slate-600">
            {t("eyebrow_primary")}
            <span className="text-slate-400 font-normal"> // </span>
            {t("eyebrow_secondary")}
          </span>
        </div>

        {/* H1 */}
        <h1
          id="wwo-hero-heading"
          ref={h1Ref}
          style={{ opacity: 0 }}
          className="font-[family-name:var(--font-manrope)] text-4xl sm:text-5xl lg:text-[58px] font-extrabold text-slate-900 leading-[1.1] tracking-tight text-balance"
        >
          {t("headline")}{" "}
          <span className="bg-gradient-to-r from-brand-green via-brand-green-dark to-brand-orange bg-clip-text text-transparent">
            {t("headline_gradient")}
          </span>
        </h1>

        {/* Subheadline */}
        <p
          ref={subRef}
          style={{ opacity: 0 }}
          className="text-slate-600 text-base sm:text-lg lg:text-xl max-w-3xl leading-relaxed text-balance"
        >
          {t("subheadline")}
        </p>

        {/* Frosted telemetry chips — flex-wrap row, single-label only */}
        <div
          ref={chipsRef}
          className="pt-2 flex flex-wrap items-center justify-center gap-3"
        >
          {CHIPS.map(({ icon: Icon, color, titleKey }) => (
            <div
              key={titleKey}
              style={{ opacity: 0 }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl glass-card border border-white shadow-sm"
            >
              <Icon className={`w-[18px] h-[18px] shrink-0 ${color}`} />
              <span className="font-[family-name:var(--font-manrope)] text-sm font-semibold text-slate-900">
                {t(titleKey as HeroKey)}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
