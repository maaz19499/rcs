"use client";

import { useTranslations } from "next-intl";
import { ArrowRight, Mail, Phone, MessageCircle } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const CHANNELS = [
  {
    eyebrowKey: "ch1_eyebrow",
    titleKey: "ch1_title",
    descKey: "ch1_desc",
    valueKey: "ch1_value",
    href: "mailto:info@rcsarabia.sa",
    Icon: Mail,
  },
  {
    eyebrowKey: "ch2_eyebrow",
    titleKey: "ch2_title",
    descKey: "ch2_desc",
    valueKey: "ch2_value",
    href: "tel:+966112296888",
    Icon: Phone,
  },
  {
    eyebrowKey: "ch3_eyebrow",
    titleKey: "ch3_title",
    descKey: "ch3_desc",
    valueKey: "ch3_value",
    href: "https://wa.me/966112296888",
    Icon: MessageCircle,
  },
] as const;

type ContactDetailsKey = keyof ReturnType<typeof useTranslations<"contact_details">>;

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

        {/* Contact channels */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
          {CHANNELS.map(({ eyebrowKey, titleKey, descKey, valueKey, href, Icon }) => (
            <a
              key={valueKey}
              href={href}
              target={href.startsWith("https://") ? "_blank" : undefined}
              rel={href.startsWith("https://") ? "noopener noreferrer" : undefined}
              className="rcs-card rcs-card-interactive group p-6 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-raised border border-border flex items-center justify-center mb-5 text-brand-blue group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-text-muted block mb-1">
                  {t(eyebrowKey as ContactDetailsKey)}
                </span>
                <h3 className="font-display text-base font-bold text-text-primary mb-2">
                  {t(titleKey as ContactDetailsKey)}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {t(descKey as ContactDetailsKey)}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-border flex items-center justify-between">
                <span className="font-mono text-sm font-semibold text-brand-blue truncate" dir="ltr">
                  {t(valueKey as ContactDetailsKey)}
                </span>
                <ArrowRight className="w-4 h-4 text-brand-blue rtl:-scale-x-100 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
              </div>
            </a>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
