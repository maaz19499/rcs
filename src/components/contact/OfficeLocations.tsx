"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import ScrollReveal from "@/components/ui/ScrollReveal";

// ── Icons ──────────────────────────────────────────────────────────────────────
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
function IconMail({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
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
function IconClock({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
function IconMap({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );
}
function IconScope({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
    </svg>
  );
}
function IconArrow({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}
function IconTarget({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 12m-1 0a1 1 0 102 0 1 1 0 00-2 0M12 5v2m0 10v2M5 12H7m10 0h2" />
      <circle cx="12" cy="12" r="9" strokeWidth={1.8} />
    </svg>
  );
}

export default function OfficeLocations() {
  const t = useTranslations("contact_offices");

  return (
    <section
      id="contact-offices"
      aria-labelledby="contact-offices-heading"
      className="w-full max-w-[1360px] mx-auto px-6 md:px-10 py-24"
    >
      <ScrollReveal y={28}>
        {/* Section header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="rcs-tag mb-4">
            {t("badge")}
          </div>
          <h2
            id="contact-offices-heading"
            className="font-display text-3xl sm:text-4xl font-extrabold text-primary tracking-tight mb-4"
          >
            {t("headline")}
          </h2>
          <p className="text-secondary text-base sm:text-lg leading-relaxed">
            {t("subheadline")}
          </p>
        </div>

        {/* Office cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* ── Card A: Saudi Arabia ── */}
          <div className="rcs-card group relative rounded-2xl p-8 lg:p-10 flex flex-col justify-between overflow-hidden">
            {/* Top stripe */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue to-accent-cyan" />

            <div>
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-brand-blue block">
                    {t("office1_eyebrow")}
                  </span>
                  <h3 className="font-display text-2xl font-extrabold text-primary mt-1">
                    {t("office1_country")}
                  </h3>
                </div>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded bg-surface-raised border border-border text-brand-blue font-mono text-[10px] font-bold uppercase tracking-wider shrink-0">
                  <IconTarget className="w-3 h-3" />
                  {t("office1_badge")}
                </span>
              </div>

              {/* Coordinate badge */}
              <div className="p-4 rounded-xl bg-surface-raised border border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center text-brand-blue shadow-sm shrink-0">
                    <IconMap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-semibold text-sm text-primary block">{t("office1_coord_label")}</span>
                    <span className="font-mono text-xs text-muted">{t("office1_coord")}</span>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-surface-brand text-brand-blue">
                  {t("office1_coverage")}
                </span>
              </div>

              {/* Attributes list */}
              <div className="flex flex-col gap-4 text-sm text-secondary">
                <div className="flex items-start gap-3">
                  <IconMap className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-primary block font-mono text-[10px] uppercase tracking-wider mb-0.5">{t("office1_address_label")}</strong>
                    {t("office1_address")}
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <IconScope className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-primary block font-mono text-[10px] uppercase tracking-wider mb-0.5">{t("office1_scope_label")}</strong>
                    {t("office1_scope")}
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <IconPhone className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-primary block font-mono text-[10px] uppercase tracking-wider mb-0.5">{t("office1_phone_label")}</strong>
                    <span>
                      Unified:{" "}
                      <a href="tel:920088800" className="text-brand-blue font-semibold hover:underline">920088800</a>
                      {" "}| Emergency:{" "}
                      <a href="tel:+966508453085" className="text-primary font-medium hover:underline">+966 50 845 3085</a>
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <IconClock className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-primary block font-mono text-[10px] uppercase tracking-wider mb-0.5">{t("office1_hours_label")}</strong>
                    {t("office1_hours")}{" "}
                    <span className="text-brand-blue font-semibold">({t("office1_hours_noc")})</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action bar */}
            <div className="pt-6 mt-6 border-t border-border flex items-center justify-between">
              <a href="tel:920088800" className="inline-flex items-center gap-1.5 text-brand-blue text-sm font-semibold hover:gap-2.5 rtl:hover:-translate-x-1 transition-all">
                {t("office1_cta")}
                <IconArrow className="w-4 h-4" />
              </a>
              <span className="flex items-center gap-1.5 text-muted text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-brand-blue inline-block" />
                {t("office1_tz")}
              </span>
            </div>
          </div>

          {/* ── Card B: Dubai, UAE ── */}
          <div className="rcs-card group relative rounded-2xl p-8 lg:p-10 flex flex-col justify-between overflow-hidden">
            {/* Top stripe */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-purple to-brand-blue" />

            <div>
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-brand-blue block">
                    {t("office2_eyebrow")}
                  </span>
                  <h3 className="font-display text-2xl font-extrabold text-primary mt-1">
                    {t("office2_country")}
                  </h3>
                </div>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded bg-surface-raised border border-border text-brand-blue font-mono text-[10px] font-bold uppercase tracking-wider shrink-0">
                  <IconBuilding className="w-3 h-3" />
                  {t("office2_badge")}
                </span>
              </div>

              {/* Coordinate badge */}
              <div className="p-4 rounded-xl bg-surface-raised border border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center text-brand-blue shadow-sm shrink-0">
                    <IconBuilding className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-semibold text-sm text-primary block">{t("office2_coord_label")}</span>
                    <span className="font-mono text-xs text-muted">{t("office2_coord")}</span>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-surface-brand text-brand-blue">
                  {t("office2_coverage")}
                </span>
              </div>

              {/* Attributes list */}
              <div className="flex flex-col gap-4 text-sm text-secondary">
                <div className="flex items-start gap-3">
                  <IconMap className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-primary block font-mono text-[10px] uppercase tracking-wider mb-0.5">{t("office2_address_label")}</strong>
                    {t("office2_address")}
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <IconScope className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-primary block font-mono text-[10px] uppercase tracking-wider mb-0.5">{t("office2_scope_label")}</strong>
                    {t("office2_scope")}
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <IconMail className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-primary block font-mono text-[10px] uppercase tracking-wider mb-0.5">{t("office2_desk_label")}</strong>
                    <a href="mailto:dubai@rcsarabia.com" className="text-brand-blue font-semibold hover:underline">
                      dubai@rcsarabia.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <IconClock className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-primary block font-mono text-[10px] uppercase tracking-wider mb-0.5">{t("office2_hours_label")}</strong>
                    {t("office2_hours")}{" "}
                    <span className="text-muted">({t("office2_hours_note")})</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action bar */}
            <div className="pt-6 mt-6 border-t border-border flex items-center justify-between">
              <a href="mailto:dubai@rcsarabia.com" className="inline-flex items-center gap-1.5 text-brand-blue text-sm font-semibold hover:gap-2.5 rtl:hover:-translate-x-1 transition-all">
                {t("office2_cta")}
                <IconArrow className="w-4 h-4" />
              </a>
              <span className="flex items-center gap-1.5 text-muted text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-brand-blue inline-block" />
                {t("office2_tz")}
              </span>
            </div>
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
}
