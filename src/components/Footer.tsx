import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { PILLARS, pillarPath } from "@/lib/services-data";

const COMPANY_LINKS = [
  { key: "about", href: "/who-we-are" },
  { key: "services", href: "/what-we-offer" },
  { key: "contact", href: "/contact" },
] as const;

const LEGAL_LINKS = ["legal1", "legal2", "legal3", "legal4"] as const;

type FooterKey = keyof ReturnType<typeof useTranslations<"footer">>;

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const tPillars = useTranslations("pillars");

  const columnHeading =
    "font-heading font-bold text-text-primary text-sm mb-4";
  const footerLink =
    "text-text-secondary hover:text-link hover:underline transition-colors";

  return (
    <footer className="relative z-10 bg-surface text-text-secondary pt-20 pb-12">
      <hr className="spectrum-gradient-rule absolute inset-x-0 top-0" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-border">
          {/* Brand column */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <Link
              href="/"
              aria-label="RCS Arabia Homepage"
              className="mb-4 rounded-xl py-1 dark:bg-white dark:px-3"
            >
              <Image
                className="h-[66.6px] w-45"
                src="/Rcs_Logo.png"
                alt="RCS Arabia"
                width={180}
                height={66.6}
              />
            </Link>

            <p className="text-sm text-text-secondary max-w-sm leading-relaxed mb-6">
              {t("tagline")}
            </p>

            <div className="flex flex-wrap items-center gap-2">
              <span className="rcs-tag rcs-tag-brand">{t("cert1")}</span>
              <span className="rcs-tag">{t("cert2")}</span>
              <span className="rcs-tag">{t("cert3")}</span>
            </div>
          </div>

          {/* Services: the five pillars */}
          <div>
            <div className={columnHeading}>{t("services_heading")}</div>
            <ul className="space-y-2.5 text-sm">
              {PILLARS.map((pillar) => (
                <li key={pillar.key}>
                  <Link href={pillarPath(pillar)} className={footerLink}>
                    {tPillars(`${pillar.key}.hero.eyebrow`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className={columnHeading}>{t("company_heading")}</div>
            <ul className="space-y-2.5 text-sm">
              {COMPANY_LINKS.map(({ key, href }) => (
                <li key={key}>
                  <Link href={href} className={footerLink}>
                    {tNav(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className={columnHeading}>{t("hq_heading")}</div>
            <address className="not-italic text-sm text-text-secondary space-y-2">
              <p className="font-semibold text-text-primary">{t("hq_name")}</p>
              <p>{t("office_riyadh")}</p>
              <p>{t("office_dubai")}</p>
              <p className="pt-2">
                <a
                  href={`mailto:${t("email")}`}
                  dir="ltr"
                  className="inline-block text-link font-bold hover:underline"
                >
                  {t("email")}
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-sm text-text-muted gap-4">
          <p>{t("copyright")}</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {LEGAL_LINKS.map((key) => (
              <Link key={key} href="/" className="hover:text-link transition-colors">
                {t(key as FooterKey)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
