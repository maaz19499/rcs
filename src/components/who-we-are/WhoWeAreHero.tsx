"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { gsap } from "gsap";

// SVG icons replacing Material Symbols (no external icon font needed)
function IconAssuredWorkload({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}
function IconHandshake({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.82m2.56-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
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
function IconSecurity({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
    </svg>
  );
}

const CHIPS = [
  { icon: IconAssuredWorkload, color: "text-brand-green",      titleKey: "chip1_title", descKey: "chip1_desc" },
  { icon: IconHandshake,       color: "text-brand-orange",     titleKey: "chip2_title", descKey: "chip2_desc" },
  { icon: IconVerified,        color: "text-brand-green-dark", titleKey: "chip3_title", descKey: "chip3_desc" },
  { icon: IconSecurity,        color: "text-slate-700",        titleKey: "chip4_title", descKey: "chip4_desc" },
] as const;

type HeroKey = keyof ReturnType<typeof useTranslations<"who_we_are_hero">>;

export default function WhoWeAreHero() {
  const t = useTranslations("who_we_are_hero");

  const pillRef    = useRef<HTMLDivElement>(null);
  const h1Ref      = useRef<HTMLHeadingElement>(null);
  const subRef     = useRef<HTMLParagraphElement>(null);
  const chipsRef   = useRef<HTMLDivElement>(null);

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
      id="who-we-are-hero"
      aria-labelledby="wwa-hero-heading"
      className="w-full max-w-[1360px] mx-auto px-6 md:px-10 pt-16 sm:pt-24 pb-20 sm:pb-28 flex flex-col items-center text-center relative"
    >
      {/* Eyebrow pill */}
      <div
        ref={pillRef}
        style={{ opacity: 0 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-white shadow-sm mb-8"
      >
        <span className="inline-block w-2 h-2 rounded-full bg-brand-green animate-pulse" />
        <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-brand-green">
          {t("eyebrow_primary")}
        </span>
        <span className="w-1 h-1 rounded-full bg-slate-300" />
        <span className="font-mono text-[11px] text-slate-500 tracking-normal">
          {t("eyebrow_secondary")}
        </span>
      </div>

      {/* H1 */}
      <h1
        id="wwa-hero-heading"
        ref={h1Ref}
        style={{ opacity: 0 }}
        className="font-[family-name:var(--font-manrope)] text-4xl sm:text-5xl lg:text-[58px] font-extrabold text-slate-900 leading-[1.1] tracking-tight max-w-5xl mb-6"
      >
        {t("headline")}{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-green-dark">
          {t("headline_gradient")}
        </span>
      </h1>

      {/* Subtitle */}
      <p
        ref={subRef}
        style={{ opacity: 0 }}
        className="text-slate-600 text-base sm:text-lg lg:text-xl max-w-3xl leading-relaxed mb-12"
      >
        {t("subheadline")}
      </p>

      {/* Telemetry chips strip */}
      <div
        ref={chipsRef}
        className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-3"
      >
        {CHIPS.map(({ icon: Icon, color, titleKey, descKey }) => (
          <div
            key={titleKey}
            style={{ opacity: 0 }}
            className="flex items-center gap-3 p-3 sm:p-4 rounded-xl glass-card border border-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
          >
            <Icon className={`w-6 h-6 shrink-0 ${color}`} />
            <div className="text-left">
              <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-900">
                {t(titleKey as HeroKey)}
              </div>
              <div className="text-[11px] text-slate-500 leading-tight mt-0.5">
                {t(descKey as HeroKey)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
