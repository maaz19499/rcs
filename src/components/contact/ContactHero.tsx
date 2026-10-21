"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { gsap } from "gsap";

// ── Icons ─────────────────────────────────────────────────────────────────────
function IconSensors({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.348 14.652a3.75 3.75 0 010-5.304m5.304 0a3.75 3.75 0 010 5.304m-7.425 2.121a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.807-3.808-9.98 0-13.788m13.788 0c3.808 3.807 3.808 9.98 0 13.788M12 12h.008v.008H12V12z" />
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
function IconShield({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}
function IconGlobe({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  );
}

type ChipKey = "chip1" | "chip2" | "chip3" | "chip4";

const CHIPS: { key: ChipKey; Icon: React.FC<{ className?: string }>; pulse?: boolean }[] = [
  { key: "chip1", Icon: IconSensors, pulse: true },
  { key: "chip2", Icon: IconTimer },
  { key: "chip3", Icon: IconShield },
  { key: "chip4", Icon: IconGlobe },
];

export default function ContactHero() {
  const t = useTranslations("contact_hero");

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
      id="contact-hero"
      aria-labelledby="contact-hero-heading"
      className="w-full max-w-[1360px] mx-auto px-6 md:px-10 pt-16 sm:pt-24 pb-20 sm:pb-28 flex flex-col items-center text-center relative"
    >
      {/* Eyebrow pill */}
      <div
        ref={pillRef}
        style={{ opacity: 0 }}
        className="rcs-tag mb-8"
      >
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue" />
        </span>
        <span>{t("eyebrow")}</span>
      </div>

      {/* H1 */}
      <h1
        id="contact-hero-heading"
        ref={h1Ref}
        style={{ opacity: 0 }}
        className="font-display text-4xl sm:text-5xl lg:text-[58px] font-extrabold text-primary leading-[1.08] tracking-tight max-w-4xl mb-6"
      >
        {t("headline")} {t("headline_gradient")}
      </h1>

      {/* Subtitle */}
      <p
        ref={subRef}
        style={{ opacity: 0 }}
        className="text-secondary text-base sm:text-lg lg:text-xl max-w-3xl leading-relaxed mb-12"
      >
        {t("subheadline")}
      </p>

      {/* Telemetry chips */}
      <div
        ref={chipsRef}
        className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
      >
        {CHIPS.map(({ key, Icon, pulse }) => (
          <div
            key={key}
            style={{ opacity: 0 }}
            className="rcs-card p-3.5 flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-full bg-surface-raised border border-border flex items-center justify-center shrink-0 text-brand-blue">
              <Icon className="w-[18px] h-[18px]" />
            </div>
            <div className="flex flex-col text-left rtl:text-right min-w-0">
              <span className="font-mono text-[11px] font-bold text-primary truncate">
                {t(`${key}_title` as Parameters<typeof t>[0])}
              </span>
              <span className="text-[11px] flex items-center gap-1 text-secondary">
                {pulse && <span className="w-1.5 h-1.5 rounded-full bg-brand-blue inline-block" />}
                {t(`${key}_desc` as Parameters<typeof t>[0])}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
