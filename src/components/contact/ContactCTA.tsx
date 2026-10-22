"use client";

import { useTranslations } from "next-intl";
import { ArrowRight, ClipboardCheck, Mail, ShieldCheck, Users } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

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

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
            {/* Eyebrow pill */}
            <div className="rcs-tag">
              <span className="w-2 h-2 rounded-full bg-brand-blue animate-ping" />
              <span>{t("eyebrow")}</span>
            </div>

            {/* Headline */}
            <h2
              id="contact-cta-heading"
              className="font-display text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-text-primary leading-tight"
            >
              {t("headline")}
            </h2>

            {/* Subheadline */}
            <p className="text-text-secondary text-base sm:text-lg max-w-2xl leading-relaxed">
              {t("subheadline")}
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a
                href="#contact-form"
                className="rcs-button rcs-button-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-display font-bold text-sm"
              >
                <span>{t("cta_primary")}</span>
                <ArrowRight className="w-5 h-5 rtl:-scale-x-100" aria-hidden="true" />
              </a>
              <a
                href="mailto:info@rcsarabia.sa"
                className="rcs-button rcs-button-secondary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-display font-semibold text-sm"
              >
                <Mail className="w-5 h-5 text-brand-blue" aria-hidden="true" />
                <span>{t("cta_secondary")}</span>
              </a>
            </div>

            {/* Credibility strip */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 pt-6 mt-2 border-t border-border text-text-secondary text-xs font-mono">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-brand-blue" aria-hidden="true" />
                {t("metric1")}
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-brand-blue" aria-hidden="true" />
                {t("metric2")}
              </span>
              <span className="flex items-center gap-1.5">
                <ClipboardCheck className="w-4 h-4 text-brand-blue" aria-hidden="true" />
                {t("metric3")}
              </span>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
