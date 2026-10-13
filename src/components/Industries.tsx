import { useTranslations } from "next-intl";
import { SectionBadge } from "@/components/ui/SectionHeader";

type IndustriesKey = keyof ReturnType<typeof useTranslations<"industries">>;

const SECTORS = [
  { titleKey: "sector1_title", descKey: "sector1_desc", iconColor: "text-brand-green", bgColor: "bg-emerald-500/10", icon: "realestate" },
  { titleKey: "sector2_title", descKey: "sector2_desc", iconColor: "text-brand-orange", bgColor: "bg-amber-500/10", icon: "construction" },
  { titleKey: "sector3_title", descKey: "sector3_desc", iconColor: "text-amber-700", bgColor: "bg-amber-500/10", icon: "energy" },
  { titleKey: "sector4_title", descKey: "sector4_desc", iconColor: "text-slate-700", bgColor: "bg-slate-200/60", icon: "manufacturing" },
  { titleKey: "sector5_title", descKey: "sector5_desc", iconColor: "text-blue-600", bgColor: "bg-blue-500/10", icon: "healthcare" },
  { titleKey: "sector6_title", descKey: "sector6_desc", iconColor: "text-brand-green", bgColor: "bg-emerald-500/10", icon: "hospitality" },
  { titleKey: "sector7_title", descKey: "sector7_desc", iconColor: "text-brand-orange", bgColor: "bg-amber-500/10", icon: "transport" },
  { titleKey: "sector8_title", descKey: "sector8_desc", iconColor: "text-slate-900", bgColor: "bg-slate-900/10", icon: "government" },
] as const;

function SectorIcon({ name, className }: { name: string; className: string }) {
  const icons: Record<string, React.ReactNode> = {
    realestate: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline strokeLinecap="round" strokeLinejoin="round" points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    construction: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    energy: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    manufacturing: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    healthcare: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
    ),
    hospitality: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    transport: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
    government: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
  };
  return <>{icons[name] ?? icons.government}</>;
}

export default function Industries() {
  const t = useTranslations("industries");

  return (
    <section className="py-24 bg-gradient-to-b from-white/60 to-slate-100/70 border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionBadge variant="green" className="mb-2">{t("badge")}</SectionBadge>
          <h2 className="font-[family-name:var(--font-manrope)] text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
            {t("headline")}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">{t("subheadline")}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SECTORS.map((sector) => (
            <div
              key={sector.titleKey}
              className="glass-card rounded-2xl p-6 hover:-translate-y-1 transition-all"
            >
              <div className={`w-11 h-11 rounded-xl ${sector.bgColor} flex items-center justify-center mb-4`}>
                <SectorIcon name={sector.icon} className={`w-5 h-5 ${sector.iconColor}`} />
              </div>
              <h3 className="font-[family-name:var(--font-manrope)] font-bold text-sm text-slate-900 mb-1.5 leading-snug">
                {t(sector.titleKey as IndustriesKey)}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {t(sector.descKey as IndustriesKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
