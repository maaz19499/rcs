import { useTranslations } from "next-intl";

type FAQKey = keyof ReturnType<typeof useTranslations<"faq">>;

const FAQS = [
  { qKey: "q1", aKey: "a1" },
  { qKey: "q2", aKey: "a2" },
  { qKey: "q3", aKey: "a3" },
] as const;

export default function SEOContent() {
  const t = useTranslations("faq");

  return (
    <section className="py-16 bg-surface-muted/60 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-text-primary mb-6">{t("headline")}</h2>
          <div className="max-w-none text-text-secondary leading-relaxed space-y-4">
            {t("body")
              .split("\n\n")
              .map((para, i) => (
                <p key={i}>{para}</p>
              ))}
          </div>
        </div>

        <div className="space-y-3">
          {FAQS.map(({ qKey, aKey }) => (
            <details
              key={qKey}
              className="group rcs-card rounded-xl p-4 cursor-pointer open:border-border-brand"
            >
              <summary className="flex items-center justify-between gap-4 font-display font-bold text-sm text-text-primary list-none">
                <span>{t(qKey as FAQKey)}</span>
                <svg
                  className="w-4 h-4 text-text-muted shrink-0 group-open:rotate-180 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-3 text-sm text-text-secondary leading-relaxed border-t border-border pt-3">
                {t(aKey as FAQKey)}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
