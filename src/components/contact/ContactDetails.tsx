"use client";

import { useTranslations } from "next-intl";
import ScrollReveal from "@/components/ui/ScrollReveal";

// ── Icons ─────────────────────────────────────────────────────────────────────
function IconMail({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
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
function IconContract({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  );
}
function IconArrow({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}
function IconExternal({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
  );
}

const CHANNELS = [
  {
    key: "ch1" as const,
    Icon: IconMail,
    iconBg: "bg-brand-green/10",
    iconColor: "text-brand-green",
    valueColor: "text-brand-green",
    arrowIcon: IconArrow,
    href: "mailto:info@rcsarabia.com",
  },
  {
    key: "ch2" as const,
    Icon: IconPhone,
    iconBg: "bg-slate-100",
    iconColor: "text-slate-600",
    valueColor: "text-slate-800",
    arrowIcon: IconPhone,
    href: "tel:920088800",
  },
  {
    key: "ch3" as const,
    Icon: IconChat,
    iconBg: "bg-brand-green/10",
    iconColor: "text-brand-green",
    valueColor: "text-brand-green",
    arrowIcon: IconExternal,
    href: "https://wa.me/966508453085",
    external: true,
  },
  {
    key: "ch4" as const,
    Icon: IconContract,
    iconBg: "bg-slate-100",
    iconColor: "text-slate-600",
    valueColor: "text-slate-700",
    arrowIcon: IconArrow,
    href: "mailto:rfp@rcsarabia.com",
  },
] as const;

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
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-slate-100 mb-4">
            <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-slate-600">
              {t("badge")}
            </span>
          </div>
          <h2
            id="contact-details-heading"
            className="font-[family-name:var(--font-manrope)] text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4"
          >
            {t("headline")}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {t("subheadline")}
          </p>
        </div>

        {/* 4-channel grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {CHANNELS.map(({ key, Icon, iconBg, iconColor, valueColor, arrowIcon: ArrowIcon, href, ...rest }) => {
            const isExternal = "external" in rest && rest.external;
            return (
              <a
                key={key}
                href={href}
                {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group p-6 rounded-2xl bg-white shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-6 h-6 ${iconColor}`} />
                  </div>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    {t(`${key}_eyebrow` as Parameters<typeof t>[0])}
                  </span>
                  <h3 className="font-[family-name:var(--font-manrope)] text-base font-bold text-slate-900 mb-2">
                    {t(`${key}_title` as Parameters<typeof t>[0])}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {t(`${key}_desc` as Parameters<typeof t>[0])}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className={`font-mono text-sm font-semibold ${valueColor} truncate`}>
                    {t(`${key}_value` as Parameters<typeof t>[0])}
                  </span>
                  <ArrowIcon className={`w-4 h-4 ${iconColor} group-hover:translate-x-1 transition-transform`} />
                </div>
              </a>
            );
          })}
        </div>
      </ScrollReveal>
    </section>
  );
}
