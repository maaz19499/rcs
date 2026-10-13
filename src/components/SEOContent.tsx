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
    <section className="py-16 bg-slate-100/60 border-t border-slate-200/80">
      <div className="max-w-5xl mx-auto px-6">
        {/* SEO body copy */}
        <div className="mb-12 text-center">
          <span className="text-xs uppercase tracking-widest font-mono font-bold text-slate-500">
            {t("badge")}
          </span>
          <h2 className="font-[family-name:var(--font-manrope)] text-2xl font-bold text-slate-800 mt-2 mb-6">
            {t("headline")}
          </h2>
          <div className="prose prose-sm max-w-none text-slate-600 leading-relaxed text-left space-y-4">
            {t("body")
              .split("\n\n")
              .map((para, i) => (
                <p key={i}>{para}</p>
              ))}
          </div>
        </div>

        {/* FAQ accordion */}
        <div className="space-y-3">
          {FAQS.map(({ qKey, aKey }) => (
            <details
              key={qKey}
              className="group glass-card rounded-xl p-4 border border-slate-200 transition-all cursor-pointer"
            >
              <summary className="flex items-center justify-between font-[family-name:var(--font-manrope)] font-bold text-sm text-slate-800 list-none">
                <span>{t(qKey as FAQKey)}</span>
                <svg
                  className="w-4 h-4 text-slate-400 shrink-0 group-open:rotate-180 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                {t(aKey as FAQKey)}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
