import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import LegalPage from "@/components/LegalPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "terms_of_service_meta" });

  const title       = t("title");
  const description = t("description");

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/terms-of-service`,
      languages: {
        en: "/en/terms-of-service",
        ar: "/ar/terms-of-service",
      },
    },
    openGraph: {
      title,
      description,
      locale: locale === "ar" ? "ar_SA" : "en_US",
      type: "website",
      url: `https://rcsarabia.com/${locale}/terms-of-service`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function TermsOfServicePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <LegalPage namespace="terms_of_service" />;
}
