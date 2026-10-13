"use client";

import { useTranslations } from "next-intl";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { sendContactMessage } from "@/app/actions";
import { SectionBadge } from "@/components/ui/SectionHeader";
import { CheckCircle, Phone, MessageCircle, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useGsapStagger } from "@/lib/hooks/useGsapStagger";

type CTAKey = keyof ReturnType<typeof useTranslations<"cta">>;

function SubmitButton({ label, pendingLabel }: { label: string; pendingLabel: string }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className={cn(
        "w-full mt-2 py-4 rounded-full font-[family-name:var(--font-manrope)] font-bold text-sm tracking-wide text-white flex items-center justify-center gap-2 transition-all",
        pending
          ? "bg-emerald-400 cursor-not-allowed"
          : "bg-gradient-to-r from-brand-green to-brand-green-dark shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/40 hover:-translate-y-0.5"
      )}
    >
      {pending ? pendingLabel : label}
      {!pending && (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
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
    {
      href: "tel:920088800",
      icon: Phone,
      label: t("phone_label"),
      value: t("phone_number"),
      hoverBorder: "hover:border-brand-green/50",
      iconClass: "bg-emerald-50 text-brand-green group-hover:bg-brand-green group-hover:text-white",
    },
    {
      href: "https://wa.me/966508453085",
      icon: MessageCircle,
      label: t("whatsapp_label"),
      value: t("whatsapp_number"),
      hoverBorder: "hover:border-brand-orange/50",
      iconClass: "bg-amber-50 text-brand-orange group-hover:bg-brand-orange group-hover:text-white",
    },
    {
      href: "mailto:info@rcsarabia.com",
      icon: Mail,
      label: t("email_label"),
      value: t("email_value"),
      hoverBorder: "hover:border-slate-300",
      iconClass: "bg-slate-100 text-slate-800 group-hover:bg-slate-900 group-hover:text-white",
    },
  ] as const;

  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Contact channels column */}
          <div className="lg:col-span-5">
            <ScrollReveal y={28}>
              <SectionBadge variant="green" className="mb-2">{t("badge")}</SectionBadge>
              <h2 className="font-[family-name:var(--font-manrope)] text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-4">
                {t("headline")}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                {t("subheadline")}
              </p>
            </ScrollReveal>

            <div ref={channelsRef} className="space-y-4">
              {CHANNELS.map(({ href, icon: Icon, label, value, hoverBorder, iconClass }) => (
                <a
                  key={href}
                  href={href}
                  target={href.startsWith("https://wa") ? "_blank" : undefined}
                  rel={href.startsWith("https://wa") ? "noopener noreferrer" : undefined}
                  className={cn(
                    "glass-card p-4 rounded-2xl flex items-center gap-4 transition-all group",
                    hoverBorder
                  )}
                >
                  <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center transition-colors shrink-0", iconClass)}>
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">{label}</div>
                    <div className="font-[family-name:var(--font-manrope)] text-lg font-bold text-slate-900">{value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Briefing request form */}
          <ScrollReveal className="lg:col-span-7" delay={0.15} y={32}>
            <div className="glass-card rounded-3xl p-8 sm:p-10 shadow-2xl border border-white">
              <h3 className="font-[family-name:var(--font-manrope)] text-2xl font-bold text-slate-900 mb-1">
                {t("form_title")}
              </h3>
              <p className="text-xs text-slate-500 mb-6">{t("form_subtitle")}</p>

              {state?.success ? (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-brand-green text-sm font-medium">
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  <span>{t("success_body")}</span>
                </div>
              ) : (
                <form action={formAction} className="space-y-4">
                  <div>
                    <label
                      htmlFor="briefing-name"
                      className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                    >
                      {t("field_name")}
                    </label>
                    <input
                      id="briefing-name"
                      name="name"
                      type="text"
                      required
                      placeholder={t("field_name_placeholder" as CTAKey)}
                      className="w-full px-4 py-3 rounded-xl bg-white/90 border border-slate-200 text-slate-900 text-sm focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green outline-none transition-all placeholder:text-slate-400"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="briefing-email"
                        className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                      >
                        {t("field_email")}
                      </label>
                      <input
                        id="briefing-email"
                        name="email"
                        type="email"
                        required
                        placeholder={t("field_email_placeholder" as CTAKey)}
                        className="w-full px-4 py-3 rounded-xl bg-white/90 border border-slate-200 text-slate-900 text-sm focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green outline-none transition-all placeholder:text-slate-400"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="briefing-phone"
                        className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                      >
                        {t("field_phone")}
                      </label>
                      <input
                        id="briefing-phone"
                        name="subject"
                        type="tel"
                        required
                        placeholder={t("field_phone_placeholder" as CTAKey)}
                        className="w-full px-4 py-3 rounded-xl bg-white/90 border border-slate-200 text-slate-900 text-sm focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green outline-none transition-all placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="briefing-domain"
                        className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                      >
                        {t("field_domain")}
                      </label>
                      <select
                        id="briefing-domain"
                        name="message"
                        className="w-full px-4 py-3 rounded-xl bg-white/90 border border-slate-200 text-slate-900 text-sm focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green outline-none transition-all"
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
                        className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                      >
                        {t("field_urgency")}
                      </label>
                      <select
                        id="briefing-urgency"
                        className="w-full px-4 py-3 rounded-xl bg-white/90 border border-slate-200 text-slate-900 text-sm focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green outline-none transition-all"
                      >
                        <option>{t("urgency_opt1" as CTAKey)}</option>
                        <option>{t("urgency_opt2" as CTAKey)}</option>
                        <option>{t("urgency_opt3" as CTAKey)}</option>
                      </select>
                    </div>
                  </div>

                  {state?.error && (
                    <p className="text-sm text-red-600">{state.error}</p>
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
