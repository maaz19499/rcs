"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import ScrollReveal from "@/components/ui/ScrollReveal";

// ── Icons ──────────────────────────────────────────────────────────────────────
function IconTerminal({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
    </svg>
  );
}
function IconCheck({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}
function IconPlus({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
  );
}
function IconSend({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}
function IconAttach({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
    </svg>
  );
}
function IconLock({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
    </svg>
  );
}
function IconTaskAlt({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
function IconChevron({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

// ── Service chip data ──────────────────────────────────────────────────────────
const SERVICE_KEYS = [
  "service1", "service2", "service3", "service4", "service5",
] as const;
type ServiceKey = typeof SERVICE_KEYS[number];

type FormState = "idle" | "submitting" | "success";

const inputClass =
  "w-full h-12 pl-10 pr-4 rtl:pl-4 rtl:pr-10 rounded-lg bg-surface-raised border border-border text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all";

const selectClass =
  "w-full h-12 pl-10 pr-8 rtl:pl-8 rtl:pr-10 rounded-lg bg-surface-raised border border-border text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all appearance-none cursor-pointer";

const labelClass = "text-sm font-semibold text-text-primary flex items-center justify-between";

export default function ContactForm() {
  const t = useTranslations("contact_form");
  const [state, setState]           = useState<FormState>("idle");
  const [selected, setSelected]     = useState<Set<ServiceKey>>(new Set());
  const [fileName, setFileName]     = useState<string | null>(null);

  function toggleChip(key: ServiceKey) {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  }

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    setFileName(file ? file.name : null);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    await new Promise((r) => setTimeout(r, 900));
    setState("success");
  }

  return (
    <section
      id="contact-form"
      aria-labelledby="contact-form-heading"
      className="w-full max-w-[1360px] mx-auto px-6 md:px-10 py-10"
    >
      <ScrollReveal y={32}>
        <div className="rcs-card relative rounded-2xl p-8 sm:p-12 lg:p-16 overflow-hidden">

          {/* Glow accents */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />

          {/* Card header */}
          <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 mb-8 border-b border-border">
            <div className="flex flex-col max-w-2xl">
              <div className="flex items-center gap-2 mb-2">
                <IconTerminal className="w-5 h-5 text-brand-blue" />
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-text-secondary">
                  {t("badge")}
                </span>
              </div>
              <h2
                id="contact-form-heading"
                className="font-display text-2xl sm:text-3xl font-extrabold text-text-primary tracking-tight"
              >
                {t("headline")}
              </h2>
              <p className="text-text-secondary text-sm mt-1.5 leading-relaxed">{t("subheadline")}</p>
            </div>
          </div>

          {/* ── Success state ── */}
          {state === "success" ? (
            <div className="relative z-10 flex flex-col items-center gap-5 py-16 text-center">
              <div className="w-16 h-16 rounded-full bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center">
                <IconTaskAlt className="w-8 h-8 text-brand-blue" />
              </div>
              <p className="font-display text-xl font-bold text-text-primary">
                {t("success_title")}
              </p>
              <p className="text-text-secondary text-base max-w-lg leading-relaxed">
                {t("success_message")}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="relative z-10 flex flex-col gap-8">

              {/* ── Row 1: Name / Company / Email ── */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {/* Full Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="cf-name" className={labelClass}>
                    {t("field_name")} <span className="text-red-500 font-normal text-xs">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 rtl:left-auto rtl:right-3.5 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
                    </span>
                    <input id="cf-name" name="name" type="text" required placeholder={t("field_name_placeholder")} className={inputClass} />
                  </div>
                </div>

                {/* Entity / Organization */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="cf-company" className={labelClass}>
                    {t("field_company")} <span className="text-red-500 font-normal text-xs">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 rtl:left-auto rtl:right-3.5 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>
                    </span>
                    <input id="cf-company" name="company" type="text" required placeholder={t("field_company_placeholder")} className={inputClass} />
                  </div>
                </div>

                {/* Corporate Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="cf-email" className={labelClass}>
                    {t("field_email")} <span className="text-red-500 font-normal text-xs">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 rtl:left-auto rtl:right-3.5 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                    </span>
                    <input id="cf-email" name="email" type="email" required placeholder={t("field_email_placeholder")} className={inputClass} />
                  </div>
                </div>
              </div>

              {/* ── Row 2: Phone / Jurisdiction / Timeline ── */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="cf-phone" className={labelClass}>
                    {t("field_phone")}
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 rtl:left-auto rtl:right-3.5 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                    </span>
                    <input id="cf-phone" name="phone" type="tel" placeholder={t("field_phone_placeholder")} className={inputClass} />
                  </div>
                </div>

                {/* Jurisdiction select */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="cf-country" className={labelClass}>
                    {t("field_country")} <span className="text-red-500 font-normal text-xs">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 rtl:left-auto rtl:right-3.5 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
                    </span>
                    <select id="cf-country" name="country" required className={selectClass}>
                      <option value="KSA">Saudi Arabia (KSA)</option>
                      <option value="UAE">United Arab Emirates (UAE)</option>
                      <option value="BHR">Bahrain</option>
                      <option value="KWT">Kuwait</option>
                      <option value="QAT">Qatar</option>
                      <option value="OMN">Oman</option>
                      <option value="INT">International Enterprise</option>
                    </select>
                    <IconChevron className="absolute right-3.5 rtl:right-auto rtl:left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
                  </div>
                </div>

                {/* Deployment timeline select */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="cf-timeline" className={labelClass}>
                    {t("field_timeline")}
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 rtl:left-auto rtl:right-3.5 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>
                    </span>
                    <select id="cf-timeline" name="timeline" className={selectClass}>
                      <option value="immediate">{t("timeline_opt1")}</option>
                      <option value="q1">{t("timeline_opt2")}</option>
                      <option value="planned">{t("timeline_opt3")}</option>
                      <option value="advisory">{t("timeline_opt4")}</option>
                    </select>
                    <IconChevron className="absolute right-3.5 rtl:right-auto rtl:left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* ── Service chip multi-selector ── */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-text-primary">
                    {t("service_label")}{" "}
                    <span className="text-text-secondary font-normal">{t("service_hint")}</span>
                  </label>
                  <span className="text-brand-blue text-xs font-semibold font-mono">
                    {selected.size} selected
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {SERVICE_KEYS.map((key) => {
                    const active = selected.has(key);
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => toggleChip(key)}
                        className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                          active
                            ? "bg-brand-blue text-white shadow-sm"
                            : "bg-surface-raised border border-border text-text-secondary hover:text-text-primary hover:border-brand-blue/40"
                        }`}
                      >
                        {active ? (
                          <IconCheck className="w-3.5 h-3.5" />
                        ) : (
                          <IconPlus className="w-3.5 h-3.5 text-text-muted" />
                        )}
                        {t(key)}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* ── Project details ── */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <label htmlFor="cf-details" className="text-sm font-semibold text-text-primary">
                    {t("field_details")}
                  </label>
                  <span className="text-xs text-text-secondary">{t("field_details_hint")}</span>
                </div>
                <textarea
                  id="cf-details"
                  name="details"
                  rows={4}
                  placeholder={t("field_details_placeholder")}
                  className="w-full px-4 py-3 rounded-lg bg-surface-raised border border-border text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all resize-none"
                />
              </div>

              {/* ── Submit bar ── */}
              <div className="flex flex-col lg:flex-row items-center justify-between gap-5 pt-2">
                {/* Privacy note */}
                <div className="flex items-center gap-2.5 text-text-secondary text-xs">
                  <div className="w-7 h-7 rounded bg-surface-raised border border-border flex items-center justify-center shrink-0">
                    <IconLock className="w-4 h-4 text-brand-blue" />
                  </div>
                  <span>{t("privacy_note")}</span>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
                  {/* Attach file */}
                  <label className="w-full sm:w-auto cursor-pointer">
                    <input type="file" accept=".pdf,.xlsx,.xls" className="hidden" onChange={handleFile} />
                    <span className="w-full sm:w-auto px-5 py-3 rounded-lg bg-surface-raised border border-border hover:bg-surface text-text-secondary hover:text-text-primary text-sm font-semibold inline-flex items-center justify-center gap-2 transition-colors">
                      <IconAttach className="w-4 h-4" />
                      {fileName ?? t("attach_label")}
                    </span>
                  </label>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={state === "submitting"}
                    className="rcs-button rcs-button-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-display font-bold text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {state === "submitting" ? (
                      <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    ) : (
                      <IconSend className="w-4 h-4" />
                    )}
                    {t("cta")}
                  </button>
                </div>
              </div>

            </form>
          )}
        </div>
      </ScrollReveal>
    </section>
  );
}
