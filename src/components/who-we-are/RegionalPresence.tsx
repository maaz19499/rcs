"use client";

import { useTranslations } from "next-intl";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Link } from "@/i18n/navigation";

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
      <ScrollReveal className="flex flex-col items-center text-center mb-14" y={28}>
        <h2
          id="regional-presence-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight"
        >
          {t("headline")}
        </h2>
        <p className="text-text-secondary text-base sm:text-lg max-w-xl mt-3 leading-relaxed">
          {t("body")}
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

        {/* ── Riyadh HQ ── */}
        <ScrollReveal delay={0} y={36}>
          <div className="rcs-card rcs-card-spectrum h-full p-8 pt-10 sm:p-10 sm:pt-12 rounded-3xl flex flex-col justify-between">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="rcs-tag rcs-tag-brand gap-1.5 mb-3">
                  <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
                  {t("office1_value")}
                </span>
                <h3 className="font-display text-2xl font-bold text-text-primary">
                  {t("riyadh_title")}
                </h3>
                <p className="text-sm text-text-secondary mt-0.5">
                  {t("riyadh_subtitle")}
                </p>
                <p className="text-sm text-text-secondary leading-relaxed mt-5">
                  {t("riyadh_note")}
                </p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-surface-brand text-link flex items-center justify-center shrink-0">
                <IconDomain className="w-6 h-6" />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ── Dubai Regional ── */}
        <ScrollReveal delay={0.15} y={36}>
          <div className="rcs-card h-full p-8 sm:p-10 rounded-3xl flex flex-col justify-between gap-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="rcs-tag gap-1.5 mb-3">
                  <span className="w-2 h-2 rounded-full bg-text-muted" />
                  {t("dubai_badge")}
                </span>
                <h3 className="font-display text-2xl font-bold text-text-primary">
                  {t("dubai_title")}
                </h3>
                <p className="text-sm text-text-secondary mt-0.5">
                  {t("dubai_subtitle")}
                </p>
                <p className="text-sm text-text-secondary leading-relaxed mt-5">
                  {t("dubai_note")}
                </p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-surface-brand text-link flex items-center justify-center shrink-0">
                <IconFlight className="w-6 h-6" />
              </div>
            </div>

            <div>
              <Link href="/contact" className="rcs-button rcs-button-secondary group">
                <span>{common("schedule_briefing")}</span>
                <IconArrowRight className="w-4 h-4 rtl:-scale-x-100 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
              </Link>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
