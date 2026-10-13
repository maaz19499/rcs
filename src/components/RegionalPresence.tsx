import { useTranslations } from "next-intl";
import { SectionBadge } from "@/components/ui/SectionHeader";

const REGION_KEYS = [
  "region_sa", "region_uae", "region_qa", "region_kw", "region_bh", "region_om",
] as const;

export default function RegionalPresence() {
  const t = useTranslations("regional");

  return (
    <section className="py-24 bg-white/60 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left info column */}
          <div className="lg:col-span-5">
            <SectionBadge variant="green" className="mb-2">{t("badge")}</SectionBadge>
            <h2 className="font-[family-name:var(--font-manrope)] text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-4">
              {t("headline")}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              {t("body")}
            </p>

            <div className="space-y-3 font-mono text-xs">
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between gap-2">
                <span className="font-bold text-slate-900">{t("hq_label")}</span>
                <span className="text-brand-green font-bold text-right">{t("hq_value")}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between gap-2">
                <span className="font-bold text-slate-900">{t("west_label")}</span>
                <span className="text-brand-orange font-bold text-right">{t("west_value")}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between gap-2">
                <span className="font-bold text-slate-900">{t("east_label")}</span>
                <span className="text-brand-green font-bold text-right">{t("east_value")}</span>
              </div>
            </div>
          </div>

          {/* Right matrix map */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-green animate-ping" />
                  <span className="font-[family-name:var(--font-manrope)] font-bold text-sm text-slate-900">
                    {t("map_title")}
                  </span>
                </div>
                <span className="font-mono text-xs text-slate-500">{t("map_subtitle")}</span>
              </div>

              {/* Hub nodes */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* HQ */}
                <div className="p-4 rounded-xl bg-gradient-to-b from-white to-emerald-50/50 border border-emerald-200 text-center">
                  <div className="w-8 h-8 rounded-full bg-brand-green text-white mx-auto flex items-center justify-center font-bold text-xs mb-2">
                    {t("hub_hq_badge")}
                  </div>
                  <div className="font-[family-name:var(--font-manrope)] font-bold text-sm text-slate-900">{t("hub_hq_title")}</div>
                  <div className="text-[11px] text-slate-500 mt-1">{t("hub_hq_desc")}</div>
                  <div className="mt-3 px-2 py-1 rounded-full bg-emerald-100 text-emerald-800 font-mono text-[10px] font-bold">
                    {t("hub_hq_sla")}
                  </div>
                </div>

                {/* Western */}
                <div className="p-4 rounded-xl bg-gradient-to-b from-white to-amber-50/50 border border-amber-200 text-center">
                  <div className="w-8 h-8 rounded-full bg-brand-orange text-white mx-auto flex items-center justify-center font-bold text-xs mb-2">
                    {t("hub_wr_badge")}
                  </div>
                  <div className="font-[family-name:var(--font-manrope)] font-bold text-sm text-slate-900">{t("hub_wr_title")}</div>
                  <div className="text-[11px] text-slate-500 mt-1">{t("hub_wr_desc")}</div>
                  <div className="mt-3 px-2 py-1 rounded-full bg-amber-100 text-amber-800 font-mono text-[10px] font-bold">
                    {t("hub_wr_sla")}
                  </div>
                </div>

                {/* Eastern */}
                <div className="p-4 rounded-xl bg-gradient-to-b from-white to-slate-50 border border-slate-200 text-center">
                  <div className="w-8 h-8 rounded-full bg-slate-900 text-white mx-auto flex items-center justify-center font-bold text-xs mb-2">
                    {t("hub_ep_badge")}
                  </div>
                  <div className="font-[family-name:var(--font-manrope)] font-bold text-sm text-slate-900">{t("hub_ep_title")}</div>
                  <div className="text-[11px] text-slate-500 mt-1">{t("hub_ep_desc")}</div>
                  <div className="mt-3 px-2 py-1 rounded-full bg-slate-100 text-slate-800 font-mono text-[10px] font-bold">
                    {t("hub_ep_sla")}
                  </div>
                </div>
              </div>

              {/* Region tags */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-center gap-2 text-[11px] text-slate-600 font-medium">
                {REGION_KEYS.map((key) => (
                  <span key={key} className="px-2.5 py-1 rounded-md bg-slate-100">
                    {t(key)}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
