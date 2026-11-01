"use client";

import { useTranslations } from "next-intl";
import { ArrowRight, Briefcase, FileCheck2, Handshake } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { infoPagePath } from "@/lib/info-pages";

const PATHS = [
  { key: "tenders", Icon: FileCheck2, href: infoPagePath("certifications") },
  { key: "partners", Icon: Handshake, href: infoPagePath("partners") },
  { key: "careers", Icon: Briefcase, href: infoPagePath("careers") },
] as const;

/** Separate routes on the contact page for visitors who are not buying a service. */
export default function ContactPaths() {
  const t = useTranslations("contact_paths");

  return (
    <section
      aria-labelledby="contact-paths-heading"
      className="w-full max-w-[1360px] mx-auto px-6 md:px-10 py-10"
    >
      <h2 id="contact-paths-heading" className="font-display text-xl font-extrabold text-text-primary">
        {t("heading")}
      </h2>
      <p className="text-sm text-text-secondary mt-1 mb-6">{t("subheading")}</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {PATHS.map(({ key, Icon, href }) => (
          <Link
            key={key}
            href={href}
            className="rcs-card rcs-card-interactive group rounded-2xl p-6 flex flex-col gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-surface-brand text-link flex items-center justify-center">
              <Icon className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="font-display font-bold text-base text-text-primary">{t(`${key}_title`)}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">{t(`${key}_desc`)}</p>
            <ArrowRight
              className="w-4 h-4 text-link mt-auto transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1"
              aria-hidden="true"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
