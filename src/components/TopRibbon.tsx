import { getTranslations } from "next-intl/server";

export default async function TopRibbon() {
  const t = await getTranslations("ribbon");

  return (
    <aside className="relative z-50 bg-brand-navy text-slate-300 text-xs py-2 px-6 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            {t("tagline")}
          </span>
          <span className="hidden md:inline text-slate-600">|</span>
          <a
            href="tel:920088800"
            className="hidden md:inline-flex items-center gap-1 hover:text-white transition-colors"
          >
            <svg
              className="w-3.5 h-3.5 text-brand-orange"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            <span>
              {t("toll_free_label")}{" "}
              <strong className="text-white">{t("toll_free_number")}</strong>
            </span>
          </a>
          <a
            href="mailto:info@rcsarabia.com"
            className="hidden lg:inline-flex items-center gap-1 hover:text-white transition-colors text-slate-400"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            <span>{t("email")}</span>
          </a>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-slate-400 hidden sm:inline">{t("hq")}</span>
          <div className="flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-300 font-mono text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>{t("cert")}</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
