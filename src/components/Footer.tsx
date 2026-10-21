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

          {/* Technology solutions */}
          <div>
            <div className={columnHeading}>{t("stack_heading")}</div>
            <ul className="space-y-2.5 text-sm">
              {STACK_LINKS.map((key) => (
                <li key={key}>
                  <Link href="/what-we-offer" className={footerLink}>
                    {t(key as FooterKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Project and engineering */}
          <div>
            <div className={columnHeading}>{t("managed_heading")}</div>
            <ul className="space-y-2.5 text-sm">
              {MANAGED_LINKS.map((key) => (
                <li key={key}>
                  <Link href="/what-we-offer" className={footerLink}>
                    {t(key as FooterKey)}
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
              <p>{t("hq_pobox")}</p>
              <p>{t("hq_country")}</p>
              <div className="pt-2">
                <span className="text-text-muted block text-xs">{t("toll_free_label")}</span>
                <a
                  href="tel:920088800"
                  dir="ltr"
                  className="inline-block text-link font-bold hover:underline tabular-nums"
                >
                  {t("toll_free_number")}
                </a>
              </div>
              <div>
                <span className="text-text-muted block text-xs">{t("support_label")}</span>
                <a
                  href="tel:+966508453085"
                  dir="ltr"
                  className="inline-block text-link font-bold hover:underline tabular-nums"
                >
                  {t("support_number")}
                </a>
              </div>
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
