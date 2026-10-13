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
function IconBolt({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
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
  ctaSecondaryHref = "tel:920088800",
  contactChips,
}: ServiceCTAProps) {
  const t = useTranslations("common");
  const defaultChips: ServiceCTAContactChip[] = [
    { label: t("chip_switchboard"), value: "920088800",         href: "tel:920088800",               icon: IconPhone, iconColor: "text-brand-green" },
    { label: t("chip_whatsapp"),    value: "+966 50 845 3085",  href: "https://wa.me/966508453085",  icon: IconChat,  iconColor: "text-brand-green" },
    { label: t("chip_email"),       value: "info@rcsarabia.com", href: "mailto:info@rcsarabia.com",  icon: IconMail,  iconColor: "text-brand-green" },
    { label: t("chip_triage_sla"),  value: t("chip_triage_value"), href: undefined,                  icon: IconBolt,  iconColor: "text-brand-orange" },
  ];
  const chips = contactChips ?? defaultChips;
  const eyebrowLabel = eyebrow ?? t("executive_consultation");
  const primaryLabel = ctaPrimary ?? t("talk_to_experts");
  const secondaryLabel = ctaSecondary ?? t("call_cta");

  return (
    <section
      id="service-cta"
      aria-labelledby="service-cta-heading"
      className="w-full max-w-[1360px] mx-auto px-6 md:px-10 pt-10 pb-24 lg:pb-32"
    >
      <ScrollReveal y={32}>
        <div className="relative rounded-3xl bg-white shadow-xl overflow-hidden p-10 sm:p-16 lg:p-20 flex flex-col items-center text-center">

          {/* ── Ambient glow ── */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-brand-green/8 blur-3xl pointer-events-none" />

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-600 font-mono text-[11px] font-bold uppercase tracking-wider mb-6">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
            </svg>
            {eyebrowLabel}
          </div>

          {/* Headline */}
          <h2
            id="service-cta-heading"
            className="font-[family-name:var(--font-manrope)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight max-w-3xl mb-5"
          >
            {headline}
          </h2>

          {/* Subheadline */}
          <p className="text-slate-500 text-base sm:text-lg max-w-2xl leading-relaxed mb-10">
            {subheadline}
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <a
              href={ctaPrimaryHref}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-gradient-to-r from-brand-green to-brand-green-dark text-white font-[family-name:var(--font-manrope)] font-bold text-sm shadow-lg shadow-brand-green/25 hover:shadow-brand-green/40 hover:-translate-y-0.5 transition-all"
            >
              <span>{primaryLabel}</span>
              <IconArrowRight className="w-4 h-4" />
            </a>
            <a
              href={ctaSecondaryHref}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-[family-name:var(--font-manrope)] font-semibold text-sm transition-all"
            >
              <IconPhone className="w-4 h-4 text-brand-green" />
              <span>{secondaryLabel}</span>
            </a>
          </div>

          {/* Contact chips strip */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-slate-500 text-xs">
            {chips.map((chip) => {
              const Icon = chip.icon ?? IconPhone;
              const inner = (
                <div className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-50 border border-slate-100">
                  <Icon className={`w-3.5 h-3.5 ${chip.iconColor ?? "text-brand-green"}`} />
                  <span>{chip.label}: <strong className="text-slate-700">{chip.value}</strong></span>
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
