"use client";

import { useTranslations } from "next-intl";
import { ArrowLeft, Mail } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { LegalBody } from "@/components/LegalPage";
import { Link } from "@/i18n/navigation";
import type { InfoPageKey } from "@/lib/info-pages";

type Section = { heading: string; body: string };

const PARTNER_COUNT = 7;
const PROJECT_COUNT = 6;

/** Partner names and roles, as already published on the homepage. */
function PartnerList() {
  const t = useTranslations("partners");
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {Array.from({ length: PARTNER_COUNT }, (_, i) => i + 1).map((n) => (
        <li key={n} className="rcs-card rounded-2xl p-5">
          <div className="font-display text-sm font-bold text-text-primary">{t(`partner${n}_name`)}</div>
          <div className="text-xs text-text-muted mt-1">{t(`partner${n}_role`)}</div>
        </li>
      ))}
    </ul>
  );
}

/** Project references, as already published on the homepage. */
function ProjectList() {
  const t = useTranslations("project_references");
  return (
    <div>
      <p className="text-xs text-text-muted mb-4">{t("attribution")}</p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {Array.from({ length: PROJECT_COUNT }, (_, i) => i + 1).map((n) => (
          <li key={n} className="rcs-card rounded-2xl p-5">
            <span className="rcs-tag rcs-tag-brand mb-3">{t(`project${n}_tag`)}</span>
            <div className="font-display text-sm font-bold text-text-primary">{t(`project${n}_title`)}</div>
            <p className="text-sm text-text-secondary leading-relaxed mt-1">{t(`project${n}_desc`)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function InfoPage({ pageKey }: { pageKey: InfoPageKey }) {
  const t = useTranslations(`info_pages.${pageKey}`);
  const tc = useTranslations("info_pages.common");
  const sections = t.raw("sections") as Section[];
  const mailto = `mailto:${t("request.email")}?subject=${encodeURIComponent(t("request.subject"))}`;

  return (
    <div className="w-full max-w-[860px] mx-auto px-6 md:px-10 py-16 lg:py-24">
      <ScrollReveal y={16}>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-link transition-colors mb-10 group"
        >
          <ArrowLeft className="w-4 h-4 rtl:rotate-180 transition-transform group-hover:-translate-x-0.5 rtl:group-hover:translate-x-0.5" aria-hidden="true" />
          {tc("back_home")}
        </Link>
      </ScrollReveal>

      <ScrollReveal y={24} className="mb-12">
        <div className="rcs-tag rcs-tag-brand mb-4">{t("badge")}</div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-text-primary tracking-tight mb-6">
          {t("headline")}
        </h1>
        <p className="text-base text-text-secondary leading-relaxed max-w-2xl">{t("intro")}</p>
      </ScrollReveal>

      <hr className="spectrum-gradient-rule mb-12" aria-hidden="true" />

      <div className="flex flex-col gap-6">
        {pageKey === "partners" && (
          <ScrollReveal>
            <PartnerList />
          </ScrollReveal>
        )}
        {pageKey === "case_studies" && (
          <ScrollReveal>
            <ProjectList />
          </ScrollReveal>
        )}

        {sections.map(({ heading, body }) => (
          <ScrollReveal key={heading}>
            <section className="rcs-card rounded-2xl p-7 sm:p-8">
              <h2 className="font-display text-base font-bold text-text-primary mb-4">{heading}</h2>
              <LegalBody text={body} />
            </section>
          </ScrollReveal>
        ))}

        <ScrollReveal>
          <section className="rcs-card rcs-card-spectrum rounded-2xl p-7 sm:p-8" aria-labelledby={`${pageKey}-request`}>
            <h2 id={`${pageKey}-request`} className="font-display text-lg font-bold text-text-primary mb-2">
              {t("request.heading")}
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-6 max-w-xl">{t("request.body")}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={mailto} className="rcs-button rcs-button-primary rounded-full px-6 gap-2">
                <Mail className="w-4 h-4" aria-hidden="true" />
                <span>{t("request.button")}</span>
              </a>
              <Link href="/contact" className="rcs-button rcs-button-secondary rounded-full px-6">
                <span>{tc("contact_us")}</span>
              </Link>
            </div>
            <p className="text-xs text-text-muted mt-4" dir="ltr">
              {t("request.email")}
            </p>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
}
