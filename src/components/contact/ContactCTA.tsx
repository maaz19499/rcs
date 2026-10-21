"use client";

import { useTranslations } from "next-intl";
import ScrollReveal from "@/components/ui/ScrollReveal";

function IconArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}
function IconPhone({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}
function IconVerified({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    </svg>
  );
}
function IconLock({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
    </svg>
  );
}
function IconEngineering({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
    </svg>
  );
}

export default function ContactCTA() {
  const t = useTranslations("contact_cta");

  return (
    <section
      id="contact-cta"
      aria-labelledby="contact-cta-heading"
      className="w-full max-w-[1360px] mx-auto px-6 md:px-10 pt-20 pb-24 lg:pb-32 mb-12"
    >
      <ScrollReveal y={36}>
        <div className="rcs-card-spectrum relative rounded-3xl overflow-hidden p-10 sm:p-16 lg:p-20">

          {/* Ambient glows */}
          <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-brand-blue/15 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-accent-cyan/10 rounded-full blur-[120px] pointer-events-none" />

          {/* HUD SVG */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
            <circle cx="90%" cy="50%" r="280" fill="none" stroke="currentColor" strokeDasharray="4 8" strokeWidth="1.5" className="text-brand-blue" />
            <circle cx="90%" cy="50%" r="180" fill="none" stroke="currentColor" strokeDasharray="2 6" strokeWidth="1.5" className="text-accent-cyan" />
          </svg>

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
            {/* Eyebrow pill */}
            <div className="rcs-tag">
              <span className="w-2 h-2 rounded-full bg-brand-blue animate-ping" />
              <span>{t("eyebrow")}</span>
            </div>

            {/* Headline */}
            <h2
              id="contact-cta-heading"
              className="font-display text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-primary leading-tight"
            >
              {t("headline")}
            </h2>

            {/* Subheadline */}
            <p className="text-secondary text-base sm:text-lg max-w-2xl leading-relaxed">
              {t("subheadline")}
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a
                href="#contact-form"
                className="rcs-button rcs-button-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-display font-bold text-sm"
              >
                <span>{t("cta_primary")}</span>
                <IconArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:920088800"
                className="rcs-button rcs-button-secondary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-display font-semibold text-sm"
              >
                <IconPhone className="w-5 h-5 text-brand-blue" />
                <span>{t("cta_secondary")}</span>
              </a>
            </div>

            {/* Metrics strip */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 pt-6 mt-2 border-t border-border text-secondary text-xs font-mono">
              <span className="flex items-center gap-1.5 text-brand-blue">
                <IconVerified className="w-4 h-4" />
                {t("metric1")}
              </span>
              <span className="text-muted/40">•</span>
              <span className="flex items-center gap-1.5">
                <IconEngineering className="w-4 h-4 text-brand-blue" />
                {t("metric2")}
              </span>
              <span className="text-muted/40">•</span>
              <span className="flex items-center gap-1.5 text-brand-blue">
                <IconLock className="w-4 h-4" />
                {t("metric3")}
              </span>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
