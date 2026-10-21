"use client";

import { useTranslations } from "next-intl";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { sendContactMessage } from "@/app/actions";
import { CheckCircle, Phone, MessageCircle, Mail } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useGsapStagger } from "@/lib/hooks/useGsapStagger";

type CTAKey = keyof ReturnType<typeof useTranslations<"cta">>;

function SubmitButton({ label, pendingLabel }: { label: string; pendingLabel: string }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="rcs-button rcs-button-primary w-full mt-2 rounded-full py-4 disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {pending ? pendingLabel : label}
      {!pending && (
        <svg className="w-4 h-4 rtl:-scale-x-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.269 20.876L5.999 12zm0 0h7.5" />
        </svg>
      )}
    </button>
  );
}

export default function FinalCTA() {
  const t = useTranslations("cta");
  const [state, formAction] = useActionState(sendContactMessage, null);
  const channelsRef = useGsapStagger<HTMLDivElement>({ stagger: 0.12, y: 24, start: "top 85%" });

  const CHANNELS = [
    { href: "tel:920088800", icon: Phone, label: t("phone_label"), value: t("phone_number") },
    { href: "https://wa.me/966508453085", icon: MessageCircle, label: t("whatsapp_label"), value: t("whatsapp_number") },
    { href: "mailto:info@rcsarabia.com", icon: Mail, label: t("email_label"), value: t("email_value") },
  ] as const;
  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Contact channels column */}
          <div className="lg:col-span-5">
            <ScrollReveal y={28}>
              <h2 className="font-extrabold tracking-tight text-3xl sm:text-4xl mb-4">
                {t("headline")}
              </h2>
              <p className="text-text-secondary text-base leading-relaxed mb-8">
                {t("subheadline")}
              </p>
            </ScrollReveal>

            <div ref={channelsRef} className="space-y-4">
              {CHANNELS.map(({ href, icon: Icon, label, value }) => (
                <a
                  key={href}
                  href={href}
                  target={href.startsWith("https://wa") ? "_blank" : undefined}
                  rel={href.startsWith("https://wa") ? "noopener noreferrer" : undefined}
                  className="group rcs-card rcs-card-interactive p-4 rounded-2xl flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-surface-brand text-link transition-colors group-hover:bg-brand-blue group-hover:text-text-on-brand">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-xs text-text-muted font-medium">{label}</div>
                    <div dir="ltr" className="font-display text-lg font-bold text-text-primary text-start">{value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Briefing request form */}
          <ScrollReveal className="lg:col-span-7" delay={0.15} y={32}>
            <div className="rcs-card rcs-card-spectrum rounded-3xl p-8 pt-10 sm:p-10 sm:pt-12">
              <h3 className="font-display text-2xl font-bold text-text-primary mb-1">
                {t("form_title")}
              </h3>
              <p className="text-sm text-text-secondary mb-6">{t("form_subtitle")}</p>

              {state?.success ? (
                <div className="flex items-center gap-3 p-4 rounded-xl status-success border border-success/30 text-sm font-medium">
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  <span>{t("success_body")}</span>
                </div>
              ) : (
                <form action={formAction} className="space-y-4">
                  <div>
                    <label
                      htmlFor="briefing-name"
                      className="rcs-label"
                    >
                      {t("field_name")}
                    </label>
                    <input
                      id="briefing-name"
                      name="name"
                      type="text"
                      required
                      placeholder={t("field_name_placeholder" as CTAKey)}
                      className="rcs-input"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="briefing-email"
                        className="rcs-label"
                      >
                        {t("field_email")}
                      </label>
                      <input
                        id="briefing-email"
                        name="email"
                        type="email"
                        required
                        placeholder={t("field_email_placeholder" as CTAKey)}
                        className="rcs-input"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="briefing-phone"
                        className="rcs-label"
                      >
                        {t("field_phone")}
                      </label>
                      <input
                        id="briefing-phone"
                        name="subject"
                        type="tel"
                        required
                        placeholder={t("field_phone_placeholder" as CTAKey)}
                        className="rcs-input"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="briefing-domain"
                        className="rcs-label"
                      >
                        {t("field_domain")}
                      </label>
                      <select
                        id="briefing-domain"
                        name="message"
                        className="rcs-select"
                      >
                        <option>{t("domain_opt1" as CTAKey)}</option>
                        <option>{t("domain_opt2" as CTAKey)}</option>
                        <option>{t("domain_opt3" as CTAKey)}</option>
                        <option>{t("domain_opt4" as CTAKey)}</option>
                        <option>{t("domain_opt5" as CTAKey)}</option>
                        <option>{t("domain_opt6" as CTAKey)}</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="briefing-urgency"
                        className="rcs-label"
                      >
                        {t("field_urgency")}
                      </label>
                      <select
                        id="briefing-urgency"
                        className="rcs-select"
                      >
                        <option>{t("urgency_opt1" as CTAKey)}</option>
                        <option>{t("urgency_opt2" as CTAKey)}</option>
                        <option>{t("urgency_opt3" as CTAKey)}</option>
                      </select>
                    </div>
                  </div>

                  {state?.error && (
                    <p className="rcs-error" role="alert">{state.error}</p>
                  )}

                  <SubmitButton label={t("submit")} pendingLabel={t("submitting")} />
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
