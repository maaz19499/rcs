"use client";

import { useTranslations } from "next-intl";
import ScrollReveal from "@/components/ui/ScrollReveal";

// ── Icons ─────────────────────────────────────────────────────────────────────
function IconDomain({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
    </svg>
  );
}
function IconFlight({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.768 59.768 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
  );
}
function IconLocation({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
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
function IconShield({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
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
function IconArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function RegionalPresence() {
  const t = useTranslations("regional_presence");
  const common = useTranslations("common");

  return (
    <section
      id="regional-presence"
      aria-labelledby="regional-presence-heading"
      className="w-full max-w-[1360px] mx-auto px-6 md:px-10 py-24 lg:py-32 relative"
    >
      {/* Section header */}
      <ScrollReveal className="flex flex-col items-center text-center mb-14" y={28}>
        <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-3">
          {common("strategic_footprint")}
        </span>
        <h2
          id="regional-presence-heading"
          className="font-[family-name:var(--font-manrope)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight"
        >
          {t("headline")}
        </h2>
        <p className="text-slate-500 text-base sm:text-lg max-w-xl mt-3 leading-relaxed">
          {t("body")}
        </p>
      </ScrollReveal>

      {/* Office cards grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

        {/* ── Riyadh HQ — col-span-7 ── */}
        <ScrollReveal className="lg:col-span-7" delay={0} y={36}>
          <div className="h-full p-8 sm:p-10 rounded-3xl glass-card border border-white shadow-md flex flex-col justify-between relative overflow-hidden">

            {/* Header row */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-500/10 font-mono text-[11px] font-bold uppercase tracking-wider text-brand-green mb-2">
                  <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                  {t("office1_value")}
                </span>
                <h3 className="font-[family-name:var(--font-manrope)] text-2xl font-bold text-slate-900">
                  {t("riyadh_title")}
                </h3>
                <p className="text-sm text-slate-500 mt-0.5">
                  {t("riyadh_subtitle")}
                </p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-brand-green shrink-0 ml-4">
                <IconDomain className="w-6 h-6" />
              </div>
            </div>

            {/* Details */}
            <div className="space-y-4 py-4 border-t border-b border-slate-200/60">
              {/* Address */}
              <div className="flex items-start gap-3 text-slate-500">
                <IconLocation className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                <p className="text-sm">
                  <strong className="text-slate-900 font-semibold">{t("location_label")}</strong>{" "}
                  {t("riyadh_address")}
                </p>
              </div>

              {/* Scope grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/80">
                  <div className="font-mono text-[10px] uppercase font-bold text-slate-400">{t("scope_label")}</div>
                  <div className="text-sm font-semibold text-slate-800 mt-1">{t("scope_value")}</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/80">
                  <div className="font-mono text-[10px] uppercase font-bold text-slate-400">{t("logistics_label")}</div>
                  <div className="text-sm font-semibold text-slate-800 mt-1">{t("logistics_value")}</div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3 text-slate-500">
                <IconClock className="w-5 h-5 shrink-0 mt-0.5" />
                <p className="text-xs leading-relaxed">
                  <span className="text-slate-700 font-medium">{t("hours_label")}</span>{" "}
                  {t("hours_value")}{" "}
                  <span className="text-brand-green font-bold">{t("hours_noc")}</span>
                </p>
              </div>
            </div>

            {/* CTA row */}
            <div className="pt-5 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <a
                  href="tel:920088800"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-brand-green to-brand-green-dark text-white font-semibold text-sm shadow-sm hover:shadow-emerald-500/30 hover:-translate-y-0.5 transition-all"
                >
                  <IconPhone className="w-4 h-4" />
                  <span>920088800</span>
                </a>
                <a
                  href="https://wa.me/966508453085"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 font-semibold text-sm hover:border-brand-green/40 hover:-translate-y-0.5 transition-all"
                >
                  <IconChat className="w-4 h-4 text-brand-green" />
                  <span>+966 50 845 3085</span>
                </a>
              </div>
              <span className="font-mono text-[11px] text-slate-400">{t("pobox_short")}</span>
            </div>
          </div>
        </ScrollReveal>

        {/* ── Dubai Regional — col-span-5 ── */}
        <ScrollReveal className="lg:col-span-5" delay={0.15} y={36}>
          <div className="h-full p-8 sm:p-10 rounded-3xl glass-card border border-white shadow-md flex flex-col justify-between relative overflow-hidden">

            {/* Header row */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-500/10 font-mono text-[11px] font-bold uppercase tracking-wider text-brand-orange mb-2">
                  <span className="w-2 h-2 rounded-full bg-brand-orange" />
                  {t("dubai_badge")}
                </span>
                <h3 className="font-[family-name:var(--font-manrope)] text-2xl font-bold text-slate-900">
                  {t("dubai_title")}
                </h3>
                <p className="text-sm text-slate-500 mt-0.5">
                  {t("dubai_subtitle")}
                </p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-brand-orange shrink-0 ml-4">
                <IconFlight className="w-6 h-6" />
              </div>
            </div>

            {/* Details */}
            <div className="space-y-4 py-4 border-t border-b border-slate-200/60">
              {/* Address */}
              <div className="flex items-start gap-3 text-slate-500">
                <IconLocation className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                <p className="text-sm">
                  <strong className="text-slate-900 font-semibold">{t("location_label")}</strong>{" "}
                  {t("dubai_address")}
                </p>
              </div>

              {/* Mandate */}
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/80">
                <div className="font-mono text-[10px] uppercase font-bold text-slate-400">{t("mandate_label")}</div>
                <div className="text-sm font-semibold text-slate-800 mt-1">
                  {t("mandate_value")}
                </div>
              </div>

              {/* Cross-border note */}
              <div className="flex items-start gap-3 text-slate-500">
                <IconShield className="w-5 h-5 shrink-0 mt-0.5" />
                <p className="text-xs leading-relaxed">
                  {t("cross_border_note")}
                </p>
              </div>
            </div>

            {/* CTA row */}
            <div className="pt-5 flex items-center justify-between">
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 font-semibold text-sm hover:border-brand-orange/40 hover:-translate-y-0.5 transition-all"
              >
                <span>{common("schedule_briefing")}</span>
                <IconArrowRight className="w-4 h-4" />
              </a>
              <span className="font-mono text-[11px] font-bold uppercase text-brand-orange">
                {common("gcc_express")}
              </span>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
