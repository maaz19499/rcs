"use client";

import { useTranslations } from "next-intl";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Link } from "@/i18n/navigation";

// ── Icons ─────────────────────────────────────────────────────────────────────
function IconArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
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

// ── Component ─────────────────────────────────────────────────────────────────
export default function WhoWeAreCTA() {
  const t = useTranslations("who_we_are_cta");

  return (
    <section
      id="who-we-are-cta"
      aria-labelledby="wwa-cta-heading"
      className="w-full max-w-[1360px] mx-auto px-6 md:px-10 py-24 lg:py-32 mb-12"
    >
      <ScrollReveal y={36}>
        <div className="rcs-card rcs-card-spectrum relative p-10 pt-14 sm:p-16 sm:pt-20 rounded-3xl overflow-hidden text-center flex flex-col items-center">

          {/* Ambient backlight */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-blue/15 rounded-full blur-[100px] pointer-events-none animate-[pulseSlow_8s_ease-in-out_infinite]" />
          <div className="absolute -bottom-16 end-0 w-64 h-64 bg-spectrum-cyan/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl flex flex-col items-center gap-6">

            <h2
              id="wwa-cta-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary"
            >
              {t("headline")}
            </h2>

            <p className="text-text-secondary text-base sm:text-lg max-w-2xl leading-relaxed">
              {t("subheadline")}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
              <Link href="/contact" className="rcs-button rcs-button-primary group w-full sm:w-auto rounded-full px-8">
                <span>{t("cta_primary")}</span>
                <IconArrowRight className="w-4 h-4 rtl:-scale-x-100 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
              </Link>
              <Link href="/what-we-offer" className="rcs-button rcs-button-secondary w-full sm:w-auto rounded-full px-8">
                <span>{t("cta_secondary")}</span>
              </Link>
            </div>

            {/* Direct contact: email only */}
            <ul className="w-full pt-6 border-t border-border flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-text-secondary text-sm">
              <li className="flex items-center gap-1.5">
                <IconMail className="w-4 h-4 shrink-0 text-link" />
                <span>{t("email_label")}:</span>
                <a
                  href="mailto:info@rcsarabia.com"
                  dir="ltr"
                  className="text-text-primary hover:text-link transition-colors font-semibold tabular-nums"
                >
                  info@rcsarabia.com
                </a>
              </li>
            </ul>

          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
