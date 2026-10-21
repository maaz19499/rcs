"use client";

import { useTranslations } from "next-intl";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Link } from "@/i18n/navigation";

// ── Icons ──────────────────────────────────────────────────────────────────────
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
function IconSpeed({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

export default function WhatWeOfferCTA() {
  const t = useTranslations("what_we_offer_cta");

  return (
    <section
      id="what-we-offer-cta"
      aria-labelledby="wwo-cta-heading"
      className="w-full max-w-[1360px] mx-auto px-6 md:px-10 py-24 lg:py-32 mb-12"
    >
      <ScrollReveal y={36}>
        <div className="rcs-card rcs-card-spectrum relative p-10 pt-14 sm:p-16 sm:pt-20 rounded-3xl overflow-hidden text-center flex flex-col items-center">

          {/* Ambient backlight */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-blue/15 rounded-full blur-[100px] pointer-events-none animate-[pulseSlow_8s_ease-in-out_infinite]" />
          <div className="absolute -bottom-16 end-0 w-64 h-64 bg-spectrum-cyan/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl flex flex-col items-center gap-6">

            <h2
              id="wwo-cta-heading"
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
              <Link href="/contact" className="rcs-button rcs-button-secondary w-full sm:w-auto rounded-full px-8">
                <span>{t("cta_secondary")}</span>
              </Link>
            </div>

            {/* Direct contact details */}
            <ul className="w-full pt-6 border-t border-border flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-text-secondary text-sm">
              <li className="flex items-center gap-1.5">
                <IconPhone className="w-4 h-4 shrink-0 text-link" />
                <span>{t("label_toll_free")}:</span>
                <a
                  href="tel:920088800"
                  dir="ltr"
                  className="text-text-primary hover:text-link transition-colors font-semibold tabular-nums"
                >
                  920088800
                </a>
              </li>
              <li className="flex items-center gap-1.5">
                <IconChat className="w-4 h-4 shrink-0 text-link" />
                <span>{t("label_whatsapp")}:</span>
                <a
                  href="https://wa.me/966508453085"
                  target="_blank"
                  rel="noopener noreferrer"
                  dir="ltr"
                  className="text-text-primary hover:text-link transition-colors font-semibold tabular-nums"
                >
                  +966 50 845 3085
                </a>
              </li>
              <li className="flex items-center gap-1.5">
                <IconMail className="w-4 h-4 shrink-0 text-link" />
                <span>{t("label_inquiries")}:</span>
                <a
                  href="mailto:info@rcsarabia.com"
                  dir="ltr"
                  className="text-text-primary hover:text-link transition-colors font-semibold tabular-nums"
                >
                  info@rcsarabia.com
                </a>
              </li>
              <li className="flex items-center gap-1.5">
                <IconSpeed className="w-4 h-4 shrink-0 text-link" />
                <span>{t("label_response")}:</span>
                <span className="text-text-primary font-semibold">{t("response_value")}</span>
              </li>
            </ul>

          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
