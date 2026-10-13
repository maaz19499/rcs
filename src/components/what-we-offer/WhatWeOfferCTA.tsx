"use client";

import { useTranslations } from "next-intl";
import ScrollReveal from "@/components/ui/ScrollReveal";

// ── Icons ──────────────────────────────────────────────────────────────────────
function IconLock({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
    </svg>
  );
}
function IconArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}
function IconPhone({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}
function IconChat({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
    </svg>
  );
}
function IconMail({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}
function IconBolt({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  );
}

export default function WhatWeOfferCTA() {
  const t = useTranslations("what_we_offer_cta");

  return (
    <section
      id="what-we-offer-cta"
      aria-labelledby="wwo-cta-heading"
      className="w-full max-w-[1360px] mx-auto px-6 md:px-10 pb-20 lg:pb-28"
    >
      <ScrollReveal y={32}>
        <div className="relative rounded-2xl bg-brand-navy text-white p-8 md:p-14 overflow-hidden shadow-2xl">

          {/* ── Glow orbs ── */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-green/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-brand-orange/20 rounded-full blur-[100px] pointer-events-none" />

          {/* ── Main content row ── */}
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">

            {/* Left: eyebrow + headline + subheadline */}
            <div className="space-y-4 max-w-2xl">
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/10 text-emerald-300">
                <IconLock className="w-3.5 h-3.5 shrink-0" />
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest">
                  {t("eyebrow")}
                </span>
              </div>

              {/* Headline */}
              <h2
                id="wwo-cta-heading"
                className="font-[family-name:var(--font-manrope)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
              >
                {t("headline")}
              </h2>

              {/* Subheadline */}
              <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
                {t("subheadline")}
              </p>
            </div>

            {/* Right: CTA buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto shrink-0">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-brand-green text-white font-[family-name:var(--font-manrope)] font-bold text-sm shadow-md hover:bg-brand-green-dark active:scale-[0.98] transition-all"
              >
                <span>{t("cta_primary")}</span>
                <IconArrowRight className="w-[18px] h-[18px]" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-[family-name:var(--font-manrope)] font-semibold text-sm transition-all"
              >
                {t("cta_secondary")}
              </a>
            </div>
          </div>

          {/* ── Contact matrix ── */}
          <div className="relative z-10 mt-10 pt-8 border-t border-white/20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-slate-400">

            {/* Toll-Free */}
            <div className="space-y-1">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-white block">
                {t("label_toll_free")}
              </span>
              <a
                href="tel:920088800"
                className="text-brand-green font-bold text-base hover:underline flex items-center gap-1.5"
              >
                <IconPhone className="w-[18px] h-[18px] shrink-0" />
                <span>920088800</span>
              </a>
            </div>

            {/* WhatsApp */}
            <div className="space-y-1">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-white block">
                {t("label_whatsapp")}
              </span>
              <a
                href="https://wa.me/966508453085"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-green font-bold text-base hover:underline flex items-center gap-1.5"
              >
                <IconChat className="w-[18px] h-[18px] shrink-0" />
                <span>+966 50 845 3085</span>
              </a>
            </div>

            {/* Email */}
            <div className="space-y-1">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-white block">
                {t("label_inquiries")}
              </span>
              <a
                href="mailto:info@rcsarabia.com"
                className="text-white font-medium text-base hover:text-brand-green transition-colors flex items-center gap-1.5"
              >
                <IconMail className="w-[18px] h-[18px] shrink-0" />
                <span>info@rcsarabia.com</span>
              </a>
            </div>

            {/* Response time */}
            <div className="space-y-1">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-white block">
                {t("label_response")}
              </span>
              <div className="text-white font-semibold text-base flex items-center gap-1.5">
                <IconBolt className="w-[18px] h-[18px] shrink-0 text-brand-green" />
                <span>{t("response_value")}</span>
              </div>
            </div>

          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
