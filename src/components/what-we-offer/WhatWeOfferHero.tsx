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

const CHIPS = [
  { icon: IconHub,      titleKey: "chip1_title", descKey: "chip1_desc" },
  { icon: IconVerified, titleKey: "chip2_title", descKey: "chip2_desc" },
  { icon: IconDomain,   titleKey: "chip3_title", descKey: "chip3_desc" },
  { icon: IconFlag,     titleKey: "chip4_title", descKey: "chip4_desc" },
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
      className="relative w-full max-w-[1360px] mx-auto px-6 md:px-10 pt-16 sm:pt-24 pb-20 sm:pb-28 flex flex-col items-center text-center overflow-hidden"
    >
      {/* ── Ambient glow orbs ── */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] h-[340px] bg-brand-blue/15 rounded-full blur-[110px] pointer-events-none -z-10 animate-[pulseSlow_8s_ease-in-out_infinite]" />
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-spectrum-cyan/10 rounded-full blur-[90px] pointer-events-none -z-10" />

      {/* ── Content wrapper ── */}
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6">

        {/* Eyebrow pill */}
        <div
          ref={pillRef}
          style={{ opacity: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
          <span className="text-sm font-medium text-text-secondary">
            {t("eyebrow_secondary")}
          </span>
        </div>

        {/* H1 */}
        <h1
          id="wwo-hero-heading"
          ref={h1Ref}
          style={{ opacity: 0 }}
          className="text-4xl sm:text-5xl lg:text-[58px] font-extrabold text-text-primary leading-[1.1] tracking-tight text-balance max-w-5xl"
        >
          {t("headline")} {t("headline_gradient")}
        </h1>

        {/* Subheadline */}
        <p
          ref={subRef}
          style={{ opacity: 0 }}
          className="text-text-secondary text-base sm:text-lg lg:text-xl max-w-3xl leading-relaxed text-balance"
        >
          {t("subheadline")}
        </p>

        {/* Cards */}
        <div
          ref={chipsRef}
          className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-4 text-start"
        >
          {CHIPS.map(({ icon: Icon, titleKey, descKey }) => (
            <div
              key={titleKey}
              style={{ opacity: 0 }}
              className="rcs-card rcs-card-interactive flex items-center gap-3 p-4"
            >
              <div className="w-10 h-10 rounded-xl bg-surface-brand text-link flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <div className="font-display text-sm font-bold text-text-primary leading-snug">
                  {t(titleKey as HeroKey)}
                </div>
                <div className="text-xs text-text-muted leading-snug mt-0.5">
                  {t(descKey as HeroKey)}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
