import { useTranslations } from "next-intl";

const REGION_KEYS = [
  "region_sa", "region_uae", "region_qa", "region_kw", "region_bh", "region_om",
] as const;

const HUBS = [
  { badge: "hub_hq_badge", title: "hub_hq_title", desc: "hub_hq_desc", sla: "hub_hq_sla", primary: true },
  { badge: "hub_wr_badge", title: "hub_wr_title", desc: "hub_wr_desc", sla: "hub_wr_sla", primary: false },
  { badge: "hub_ep_badge", title: "hub_ep_title", desc: "hub_ep_desc", sla: "hub_ep_sla", primary: false },
] as const;

const FACTS = [
  { label: "hq_label", value: "hq_value" },
  { label: "west_label", value: "west_value" },
  { label: "east_label", value: "east_value" },
] as const;

export default function RegionalPresence() {
  const t = useTranslations("regional");

  return (
    <section className="py-24 bg-surface/60 border-t border-border relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left info column */}
          <div className="lg:col-span-5">
            <h2 className="font-extrabold tracking-tight text-3xl sm:text-4xl mb-4">
              {t("headline")}
            </h2>
            <p className="text-text-secondary text-base leading-relaxed mb-6">{t("body")}</p>

            <dl className="space-y-3 text-sm">
              {FACTS.map(({ label, value }) => (
                <div
                  key={label}
                  className="p-3.5 rounded-xl bg-surface border border-border flex items-center justify-between gap-2"
                >
                  <dt className="font-bold text-text-primary">{t(label)}</dt>
                  <dd className="text-link font-semibold text-end">{t(value)}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right: hubs */}
          <div className="lg:col-span-7">
            <div className="rcs-card rcs-card-spectrum rounded-3xl p-6 pt-8 sm:p-8 sm:pt-10">
              <div className="flex items-center justify-between pb-4 border-b border-border mb-6">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success" />
                  </span>
                  <span className="font-display font-bold text-sm text-text-primary">
                    {t("map_title")}
                  </span>
                </div>
                <span className="text-sm text-text-muted">{t("map_subtitle")}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {HUBS.map(({ badge, title, desc, sla, primary }) => (
                  <div
                    key={badge}
                    className={`p-4 rounded-xl text-center border ${
                      primary ? "bg-surface-brand border-border-brand" : "bg-surface-muted border-border"
                    }`}
                  >
                    <div
                      className={`w-9 h-9 rounded-full mx-auto flex items-center justify-center font-bold text-xs mb-2 ${
                        primary ? "bg-brand-blue text-text-on-brand" : "bg-surface text-link border border-border-strong"
                      }`}
                    >
                      {t(badge)}
                    </div>
                    <div className="font-display font-bold text-sm text-text-primary">{t(title)}</div>
                    <div className="text-xs text-text-secondary mt-1">{t(desc)}</div>
                    <div className="mt-3 rcs-tag">{t(sla)}</div>
                  </div>
                ))}
              </div>

              <ul className="mt-6 pt-5 border-t border-border flex flex-wrap items-center justify-center gap-2 text-xs text-text-secondary font-medium">
                {REGION_KEYS.map((key) => (
                  <li key={key} className="px-2.5 py-1 rounded-md bg-surface-muted">
                    {t(key)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
