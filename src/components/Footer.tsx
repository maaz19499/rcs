import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
const STACK_LINKS = [
  "link_stack1",
  "link_stack2",
  "link_stack3",
  "link_stack4",
  "link_stack5",
  "link_stack6",
] as const;

const MANAGED_LINKS = [
  "link_managed1",
  "link_managed2",
  "link_managed3",
  "link_managed4",
  "link_managed5",
  "link_managed6",
] as const;

const LEGAL_LINKS = ["legal1", "legal2", "legal3", "legal4"] as const;

type FooterKey = keyof ReturnType<typeof useTranslations<"footer">>;

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-brand-navy text-slate-300 pt-20 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-slate-800">
          {/* Brand column */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <Link href="/" aria-label="RCS Arabia Homepage" className="flex items-center gap-3 mb-4">
              <div className="w-full h-full rounded-xl bg-white border border-slate-700 flex items-center justify-center">
                {/* <span className="font-[family-name:var(--font-manrope)] font-extrabold text-white text-base">
                  R<span className="text-brand-green">C</span>
                  <span className="text-brand-orange">S</span>
                </span> */}
                <Image 
                 className="dark:invert h-[66.6px] w-[180px]"
              src="/Rcs_Logo.png"
              alt="Next.js logo"
              width={180}
              height={66.6}
              priority
                />
              </div>
              {/* <div>
                <div className="font-[family-name:var(--font-manrope)] font-extrabold text-white text-lg tracking-tight">
                  RCS ARABIA
                </div>
                <div className="text-[10px] text-slate-400 font-mono">{t("company_full_name")}</div>
              </div> */}
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed mb-6">
              {t("tagline")}
            </p>

            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-slate-800 text-[11px] font-mono text-emerald-400 border border-emerald-500/20">
                {t("cert1")}
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-800 text-[11px] font-mono text-slate-300 border border-slate-700">
                {t("cert2")}
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-800 text-[11px] font-mono text-amber-400 border border-amber-500/20">
                {t("cert3")}
              </span>
            </div>
          </div>

          {/* Enterprise Stack */}
          <div>
            <div className="font-[family-name:var(--font-manrope)] font-bold text-white text-xs tracking-wider uppercase mb-4">
              {t("stack_heading")}
            </div>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {STACK_LINKS.map((key) => (
                <li key={key}>
                  <Link href="/services" className="hover:text-emerald-400 transition-colors">
                    {t(key as FooterKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Managed & Practices */}
          <div>
            <div className="font-[family-name:var(--font-manrope)] font-bold text-white text-xs tracking-wider uppercase mb-4">
              {t("managed_heading")}
            </div>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {MANAGED_LINKS.map((key) => (
                <li key={key}>
                  <Link href="/services" className="hover:text-emerald-400 transition-colors">
                    {t(key as FooterKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Central Directorate */}
          <div>
            <div className="font-[family-name:var(--font-manrope)] font-bold text-white text-xs tracking-wider uppercase mb-4">
              {t("hq_heading")}
            </div>
            <address className="not-italic text-xs text-slate-400 space-y-2">
              <p className="font-medium text-slate-200">{t("hq_name")}</p>
              <p>{t("hq_pobox")}</p>
              <p>{t("hq_country")}</p>
              <div className="pt-2">
                <span className="text-slate-500 block text-[11px]">{t("toll_free_label")}</span>
                <a
                  href="tel:920088800"
                  className="text-emerald-400 font-bold hover:underline font-mono text-sm"
                >
                  {t("toll_free_number")}
                </a>
              </div>
              <div>
                <span className="text-slate-500 block text-[11px]">{t("support_label")}</span>
                <a
                  href="tel:+966508453085"
                  className="text-amber-400 font-bold hover:underline font-mono text-xs"
                >
                  {t("support_number")}
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom governance bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>{t("copyright")}</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {LEGAL_LINKS.map((key) => (
              <Link key={key} href="/" className="hover:text-slate-300 transition-colors">
                {t(key as FooterKey)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
