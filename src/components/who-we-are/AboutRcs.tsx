"use client";

import { useTranslations } from "next-intl";
import { useGsapStagger } from "@/lib/hooks/useGsapStagger";
import ScrollReveal from "@/components/ui/ScrollReveal";

// ── Inline SVGs replacing Material Symbols ───────────────────────────────────
function IconDelivery({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
function IconBadge({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  );
}
function IconBuilding({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
    </svg>
  );
}

// ── Static data ───────────────────────────────────────────────────────────────
const DIFFERENTIATORS = [
  { icon: IconDelivery, bg: "bg-emerald-500/10", color: "text-brand-green",  titleKey: "diff1_title", descKey: "diff1_desc" },
  { icon: IconBadge,    bg: "bg-slate-100",      color: "text-slate-600",    titleKey: "diff2_title", descKey: "diff2_desc" },
] as const;

const STATS = [
  { valueKey: "stat1_value", labelKey: "stat1_label", descKey: "stat1_desc", color: "text-brand-green"      },
  { valueKey: "stat2_value", labelKey: "stat2_label", descKey: "stat2_desc", color: "text-brand-orange"     },
  { valueKey: "stat3_value", labelKey: "stat3_label", descKey: "stat3_desc", color: "text-brand-green-dark" },
] as const;

type AboutRcsKey = keyof ReturnType<typeof useTranslations<"about_rcs">>;

// ── Component ─────────────────────────────────────────────────────────────────
export default function AboutRcs() {
  const t = useTranslations("about_rcs");

  const diffsRef  = useGsapStagger<HTMLDivElement>({ stagger: 0.13, y: 24, start: "top 82%" });
  const statsRef  = useGsapStagger<HTMLDivElement>({ stagger: 0.12, y: 20, start: "top 82%" });

  return (
    <section
      id="about-rcs"
      aria-labelledby="about-rcs-heading"
      className="w-full max-w-[1360px] mx-auto px-6 md:px-10 py-24 lg:py-32 relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* ── Left column: narrative + differentiators + stats ── */}
        <div className="lg:col-span-7 flex flex-col gap-8">

          {/* Badge + headline + body */}
          <ScrollReveal y={32}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-50 text-brand-green border border-emerald-200 font-mono text-[11px] font-bold uppercase tracking-wider mb-4">
              {t("badge")}
            </div>

            <h2
              id="about-rcs-heading"
              className="font-[family-name:var(--font-manrope)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
            >
              {t("headline")}
            </h2>

            <p className="mt-5 text-slate-600 text-base sm:text-lg leading-relaxed">
              {t("body")}
            </p>
          </ScrollReveal>

          {/* Differentiators 2-col grid */}
          <div ref={diffsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {DIFFERENTIATORS.map(({ icon: Icon, bg, color, titleKey, descKey }) => (
              <div
                key={titleKey}
                style={{ opacity: 0 }}
                className="p-5 rounded-xl glass-card border border-white shadow-sm"
              >
                <div className={`w-9 h-9 rounded-lg ${bg} flex items-center justify-center mb-3`}>
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
                <div className="font-[family-name:var(--font-manrope)] font-bold text-sm text-slate-900 mb-1">
                  {t(titleKey as AboutRcsKey)}
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {t(descKey as AboutRcsKey)}
                </p>
              </div>
            ))}
          </div>

          {/* Stats row */}
          <div ref={statsRef} className="grid grid-cols-3 gap-3">
            {STATS.map(({ valueKey, labelKey, descKey, color }) => (
              <div
                key={valueKey}
                style={{ opacity: 0 }}
                className="p-4 rounded-xl bg-white/80 border border-slate-200/80 text-left shadow-sm"
              >
                <div className={`font-[family-name:var(--font-manrope)] text-3xl lg:text-4xl font-extrabold tracking-tight ${color}`}>
                  {t(valueKey as AboutRcsKey)}
                </div>
                <div className="font-[family-name:var(--font-manrope)] font-semibold text-xs text-slate-900 mt-1">
                  {t(labelKey as AboutRcsKey)}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  {t(descKey as AboutRcsKey)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right column: visual card ── */}
        <ScrollReveal className="lg:col-span-5 relative" delay={0.15} y={40}>
          <div className="relative rounded-3xl overflow-hidden glass-card border border-white shadow-2xl group">
            {/* Glass specular highlight */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-white/10 pointer-events-none rounded-3xl z-20" />

            <div className="relative w-full h-[480px] rounded-2xl overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida/AEtjO1VFufxdFafB9Oepn2ll3eboIQN2mFHMJM6dm2bRgYRtssjSOHqYbQkm_VOzvEkoyQcy6nFDmiJfRCeWLLoh2c_XG7EdMYXARa0h2wK--0sd9ABG0ZtJDY1Mq-9kZmyvUYA-tGL_pKfBcbeJ3m27Y4LnT0LUhm7gwIoLX5YG-F-ZFi3oJxy_2omeh6O_n8QKLaFEeloXkSydz3oOFXNhgwpw7uHMKDYZ0FrbbynTebUr2kbuUmEv34Bi-ElV"
                alt={t("img_alt")}
                width={640}
                height={480}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

              {/* Live telemetry pill */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-emerald-500/40 text-emerald-400 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>{t("hud_status")}</span>
              </div>

              {/* Bottom floating card */}
              <div className="absolute bottom-4 inset-x-4 z-10 p-4 rounded-xl glass-card border border-white shadow-lg flex items-center justify-between">
                <div>
                  <div className="font-[family-name:var(--font-manrope)] font-bold text-sm text-slate-900">
                    {t("card_title")}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    {t("card_subtitle")}
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-brand-green shrink-0">
                  <IconBuilding className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
