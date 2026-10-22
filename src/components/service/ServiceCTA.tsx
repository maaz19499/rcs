"use client";

import { useTranslations } from "next-intl";
import ScrollReveal from "@/components/ui/ScrollReveal";

// ── Types ──────────────────────────────────────────────────────────────────────
export interface ServiceCTAContactChip {
  label: string;
  value: string;
  href?: string;
  /** Tailwind icon color class. Default "text-brand-green" */
  iconColor?: string;
  icon?: React.FC<{ className?: string }>;
}

export interface ServiceCTAProps {
  /** Eyebrow label */
  eyebrow?: string;
  headline: string;
  subheadline: string;
  /** Primary button label */
  ctaPrimary?: string;
  ctaPrimaryHref?: string;
  /** Secondary button label */
  ctaSecondary?: string;
  ctaSecondaryHref?: string;
  /** Up to 4 contact chips in the strip below the buttons */
  contactChips?: ServiceCTAContactChip[];
}

// ── Icons ──────────────────────────────────────────────────────────────────────
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

export default function ServiceCTA({
  eyebrow,
  headline,
  subheadline,
  ctaPrimary,
  ctaPrimaryHref = "#service-cta",
  ctaSecondary,
  ctaSecondaryHref = "mailto:info@rcsarabia.com",
  contactChips,
}: ServiceCTAProps) {
  const t = useTranslations("common");
  const defaultChips: ServiceCTAContactChip[] = [
    { label: t("chip_email"), value: "info@rcsarabia.com", href: "mailto:info@rcsarabia.com", icon: IconMail, iconColor: "text-brand-blue" },
  ];
  const chips = contactChips ?? defaultChips;
  const eyebrowLabel = eyebrow ?? t("executive_consultation");
  const primaryLabel = ctaPrimary ?? t("talk_to_experts");
  const secondaryLabel = ctaSecondary ?? t("email_us");

  return (
    <section
      id="service-cta"
      aria-labelledby="service-cta-heading"
      className="w-full max-w-[1360px] mx-auto px-6 md:px-10 pt-10 pb-24 lg:pb-32"
    >
      <ScrollReveal y={32}>
        <div className="rcs-card-spectrum relative rounded-3xl overflow-hidden p-10 sm:p-16 lg:p-20 flex flex-col items-center text-center">

          {/* ── Ambient glow ── */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-brand-blue/10 blur-3xl pointer-events-none" />

          {/* Eyebrow */}
          <div className="rcs-tag mb-6">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
            </svg>
            {eyebrowLabel}
          </div>

          {/* Headline */}
          <h2
            id="service-cta-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight max-w-3xl mb-5"
          >
            {headline}
          </h2>

          {/* Subheadline */}
          <p className="text-text-secondary text-base sm:text-lg max-w-2xl leading-relaxed mb-10">
            {subheadline}
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <a
              href={ctaPrimaryHref}
              className="rcs-button rcs-button-primary inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-display font-bold text-sm"
            >
              <span>{primaryLabel}</span>
              <IconArrowRight className="w-4 h-4" />
            </a>
            <a
              href={ctaSecondaryHref}
              className="rcs-button rcs-button-secondary inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-display font-semibold text-sm"
            >
              <IconMail className="w-4 h-4 text-brand-blue" />
              <span>{secondaryLabel}</span>
            </a>
          </div>

          {/* Contact chips strip */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-text-secondary text-xs">
            {chips.map((chip) => {
              const Icon = chip.icon ?? IconMail;
              const inner = (
                <div className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-surface-raised border border-border text-text-secondary">
                  <Icon className="w-3.5 h-3.5 text-brand-blue" />
                  <span>{chip.label}: <strong className="text-text-primary font-medium">{chip.value}</strong></span>
                </div>
              );
              return chip.href ? (
                <a key={chip.value} href={chip.href} {...(chip.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="hover:opacity-80 transition-opacity">
                  {inner}
                </a>
              ) : (
                <div key={chip.value}>{inner}</div>
              );
            })}
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
}
