"use client";

import { useTranslations } from "next-intl";
import { ArrowRight, Mail } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ContactDetails() {
  const t = useTranslations("contact_details");

  return (
    <section
      id="contact-details"
      aria-labelledby="contact-details-heading"
      className="w-full max-w-[1360px] mx-auto px-6 md:px-10 py-24"
    >
      <ScrollReveal y={28}>
        {/* Section header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <div className="rcs-tag mb-4">{t("badge")}</div>
          <h2
            id="contact-details-heading"
            className="font-display text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight mb-4"
          >
            {t("headline")}
          </h2>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
            {t("subheadline")}
          </p>
        </div>

        {/* Email channel */}
        <div className="max-w-md mx-auto">
          <a
            href="mailto:info@rcsarabia.sa"
            className="rcs-card rcs-card-interactive group p-6 rounded-2xl flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-surface-raised border border-border flex items-center justify-center mb-5 text-brand-blue group-hover:scale-105 transition-transform">
                <Mail className="w-6 h-6" aria-hidden="true" />
              </div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-text-muted block mb-1">
                {t("ch1_eyebrow")}
              </span>
              <h3 className="font-display text-base font-bold text-text-primary mb-2">
                {t("ch1_title")}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {t("ch1_desc")}
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-border flex items-center justify-between">
              <span className="font-mono text-sm font-semibold text-brand-blue truncate">
                {t("ch1_value")}
              </span>
              <ArrowRight className="w-4 h-4 text-brand-blue rtl:-scale-x-100 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
            </div>
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
