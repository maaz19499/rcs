"use client";

import { useTranslations } from "next-intl";
import { ArrowRight, Building2, Landmark, MapPin, Phone } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function OfficeLocations() {
  const t = useTranslations("contact_offices");

  return (
    <section
      id="contact-offices"
      aria-labelledby="contact-offices-heading"
      className="w-full max-w-[1360px] mx-auto px-6 md:px-10 py-24"
    >
      {/* Section header */}
      <ScrollReveal y={28}>
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="rcs-tag mb-4">{t("badge")}</div>
          <h2
            id="contact-offices-heading"
            className="font-display text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight mb-4"
          >
            {t("headline")}
          </h2>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
            {t("subheadline")}
          </p>
        </div>
      </ScrollReveal>

      {/* Office cards */}
      <ScrollReveal y={24} className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
        {/* Riyadh HQ */}
        <div className="rcs-card relative rounded-2xl p-8 lg:p-10 flex flex-col justify-between gap-8 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue to-accent-cyan" />
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <span className="rcs-tag rcs-tag-brand mb-3">
                {t("office1_badge")}
              </span>
              <h3 className="font-display text-2xl font-extrabold text-text-primary">
                {t("office1_city")}
              </h3>
              <p className="text-sm text-text-secondary mt-0.5">
                {t("office1_country")}
              </p>
              <p className="text-sm text-text-secondary leading-relaxed mt-4">
                {t("office1_note")}
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex items-start gap-2 text-sm text-text-secondary">
                  <MapPin className="w-4 h-4 text-link mt-0.5 shrink-0" aria-hidden="true" />
                  <span>{t("office1_address")}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-text-secondary">
                  <Phone className="w-4 h-4 text-link shrink-0" aria-hidden="true" />
                  <a
                    href={`tel:${t("office1_phone")}`}
                    dir="ltr"
                    className="text-link font-semibold hover:underline"
                  >
                    {t("office1_phone")}
                  </a>
                </div>
              </div>
            </div>
            <div className="w-12 h-12 rounded-xl bg-surface-brand text-brand-blue flex items-center justify-center shrink-0">
              <Landmark className="w-6 h-6" aria-hidden="true" />
            </div>
          </div>
          <div className="pt-6 border-t border-border">
            <a
              href="mailto:info@rcsarabia.com"
              className="inline-flex items-center gap-1.5 text-brand-blue text-sm font-semibold hover:gap-2.5 transition-all"
            >
              {t("cta")}
              <ArrowRight className="w-4 h-4 rtl:-scale-x-100" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Dubai Partner/Frontline Office */}
        <div className="rcs-card relative rounded-2xl p-8 lg:p-10 flex flex-col justify-between gap-8 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-purple to-brand-blue" />
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="rcs-tag mb-3">
                {t("office2_badge")}
              </span>
              <h3 className="font-display text-2xl font-extrabold text-text-primary">
                {t("office2_city")}
              </h3>
              <p className="text-sm text-text-secondary mt-0.5">
                {t("office2_country")}
              </p>
              <p className="text-sm text-text-secondary leading-relaxed mt-5">
                {t("office2_note")}
              </p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-surface-brand text-brand-blue flex items-center justify-center shrink-0">
              <Building2 className="w-6 h-6" aria-hidden="true" />
            </div>
          </div>
          <div className="pt-6 border-t border-border">
            <a
              href="mailto:info@rcsarabia.com"
              className="inline-flex items-center gap-1.5 text-brand-blue text-sm font-semibold hover:gap-2.5 transition-all"
            >
              {t("cta")}
              <ArrowRight className="w-4 h-4 rtl:-scale-x-100" aria-hidden="true" />
            </a>
          </div>
        </div>
      </ScrollReveal>

      {/* Google Map embed — sits outside any overflow-hidden wrapper */}
      <div className="rounded-2xl overflow-hidden border border-border w-full" style={{ minHeight: 420 }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3625.686011477708!2d46.7037505753646!3d24.668933878054816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDQwJzA4LjIiTiA0NsKwNDInMjIuOCJF!5e0!3m2!1sen!2sin!4v1792931352104!5m2!1sen!2sin"
          width="100%"
          height="420"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="RCS Arabia Headquarters Location"
        />
      </div>
    </section>
  );
}
