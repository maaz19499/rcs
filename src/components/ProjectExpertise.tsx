import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { SectionBadge, SectionHeader } from "@/components/ui/SectionHeader";

type ExpertiseKey = keyof ReturnType<typeof useTranslations<"expertise">>;

const PRACTICES = [
  { numKey: "p1_num", titleKey: "p1_title", descKey: "p1_desc", color: "text-brand-green" },
  { numKey: "p2_num", titleKey: "p2_title", descKey: "p2_desc", color: "text-brand-green" },
  { numKey: "p3_num", titleKey: "p3_title", descKey: "p3_desc", color: "text-brand-green" },
  { numKey: "p4_num", titleKey: "p4_title", descKey: "p4_desc", color: "text-brand-green" },
  { numKey: "p5_num", titleKey: "p5_title", descKey: "p5_desc", color: "text-brand-orange" },
  { numKey: "p6_num", titleKey: "p6_title", descKey: "p6_desc", color: "text-brand-green" },
] as const;

export default function ProjectExpertise() {
  const t = useTranslations("expertise");

  return (
    <section className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <SectionBadge variant="orange" className="mb-4">{t("badge")}</SectionBadge>
          <SectionHeader
            headline={t("headline")}
            subheadline={t("subheadline")}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Standard practice cards */}
          {PRACTICES.map((p) => (
            <div
              key={p.numKey}
              className="glass-card rounded-2xl p-7 border border-white hover:border-brand-green/30 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`font-mono text-xs font-bold ${p.color}`}>
                  {t(p.numKey as ExpertiseKey)}
                </span>
                <svg
                  className="w-5 h-5 text-slate-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-manrope)] font-bold text-lg text-slate-900 mb-2">
                {t(p.titleKey as ExpertiseKey)}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t(p.descKey as ExpertiseKey)}
              </p>
            </div>
          ))}

          {/* Practice 7: Full-width feature card */}
          <div className="glass-card rounded-2xl p-7 border border-white hover:border-brand-green/30 transition-all md:col-span-2 lg:col-span-3 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-xs font-bold text-brand-green">
                  {t("p7_num")}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                  {t("p7_badge")}
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-manrope)] font-bold text-xl text-slate-900 mb-2">
                {t("p7_title")}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
                {t("p7_desc")}
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-navy text-white font-[family-name:var(--font-manrope)] font-bold text-xs tracking-wide hover:bg-slate-800 transition-colors whitespace-nowrap self-start md:self-center shrink-0"
            >
              <span>{t("p7_cta")}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
