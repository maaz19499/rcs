"use client";

import { useTranslations } from "next-intl";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useGsapStagger } from "@/lib/hooks/useGsapStagger";
import { Link } from "@/i18n/navigation";
import { ArrowLeft } from "lucide-react";

type LegalNamespace = "privacy_policy" | "terms_of_service";

type Section = { heading: string; body: string };

/** Renders \n\n as paragraph breaks and • as bullet points */
function LegalBody({ text }: { text: string }) {
  const paragraphs = text.split("\n\n");
  return (
    <div className="space-y-3">
      {paragraphs.map((para, i) => {
        // Bullet paragraph: lines starting with •
        if (para.trim().startsWith("•")) {
          const lines = para.split("\n").filter(Boolean);
          return (
            <ul key={i} className="space-y-1.5 ps-1">
              {lines.map((line, j) => (
                <li key={j} className="flex items-start gap-2 text-sm text-text-secondary leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-link shrink-0" aria-hidden="true" />
                  <span>{line.replace(/^•\s*/, "")}</span>
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} className="text-sm text-text-secondary leading-relaxed">
            {para}
          </p>
        );
      })}
    </div>
  );
}

export default function LegalPage({ namespace }: { namespace: LegalNamespace }) {
  const t = useTranslations(namespace);
  const sections = t.raw("sections") as Section[];
  const cardsRef = useGsapStagger<HTMLDivElement>({ stagger: 0.07, y: 24, start: "top 85%" });

  return (
    <div className="w-full max-w-[860px] mx-auto px-6 md:px-10 py-16 lg:py-24">

      {/* Back link */}
      <ScrollReveal y={16}>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-link transition-colors mb-10 group"
        >
          <ArrowLeft className="w-4 h-4 rtl:rotate-180 group-hover:-translate-x-0.5 rtl:group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
          Home
        </Link>
      </ScrollReveal>

      {/* Hero */}
      <ScrollReveal y={24} className="mb-12">
        <div className="rcs-tag rcs-tag-brand mb-4">{t("badge")}</div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-text-primary tracking-tight mb-4">
          {t("headline")}
        </h1>
        <p className="text-xs text-text-muted mb-6">{t("last_updated")}</p>
        <p className="text-base text-text-secondary leading-relaxed max-w-2xl">
          {t("intro")}
        </p>
      </ScrollReveal>

      {/* Divider */}
      <hr className="spectrum-gradient-rule mb-12" aria-hidden="true" />

      {/* Sections */}
      <div ref={cardsRef} className="flex flex-col gap-6">
        {sections.map(({ heading, body }) => (
          <div
            key={heading}
            style={{ opacity: 0 }}
            className="rcs-card rounded-2xl p-7 sm:p-8"
          >
            <h2 className="font-display text-base font-bold text-text-primary mb-4">
              {heading}
            </h2>
            <LegalBody text={body} />
          </div>
        ))}
      </div>

    </div>
  );
}
