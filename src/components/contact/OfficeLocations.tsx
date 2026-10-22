"use client";

import { useTranslations } from "next-intl";
import { ArrowRight, Building2, Landmark } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const OFFICES = [
  { key: "office1", Icon: Landmark, stripe: "from-brand-blue to-accent-cyan" },
  { key: "office2", Icon: Building2, stripe: "from-accent-purple to-brand-blue" },
] as const;

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

        {/* Office cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {OFFICES.map(({ key, Icon, stripe }) => (
            <div
              key={key}
              className="rcs-card relative rounded-2xl p-8 lg:p-10 flex flex-col justify-between gap-8 overflow-hidden"
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stripe}`} />

              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="rcs-tag rcs-tag-brand mb-3">
                    {t(`${key}_badge`)}
                  </span>
                  <h3 className="font-display text-2xl font-extrabold text-text-primary">
                    {t(`${key}_city`)}
                  </h3>
                  <p className="text-sm text-text-secondary mt-0.5">
                    {t(`${key}_country`)}
                  </p>
                  <p className="text-sm text-text-secondary leading-relaxed mt-5">
                    {t(`${key}_note`)}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-surface-brand text-brand-blue flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <a
                  href="mailto:info@rcsarabia.sa"
                  className="inline-flex items-center gap-1.5 text-brand-blue text-sm font-semibold hover:gap-2.5 transition-all"
                >
                  {t("cta")}
                  <ArrowRight className="w-4 h-4 rtl:-scale-x-100" aria-hidden="true" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
