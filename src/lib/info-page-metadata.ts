import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { infoPagePath, type InfoPageKey } from "@/lib/info-pages";

export async function infoPageMetadata(
  params: Promise<{ locale: string }>,
  key: InfoPageKey,
): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: `info_pages.${key}.meta` });
  const title = t("title");
  const description = t("description");
  const path = infoPagePath(key);

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}${path}`,
      languages: { en: `/en${path}`, ar: `/ar${path}` },
    },
    openGraph: {
      title,
      description,
      locale: locale === "ar" ? "ar_SA" : "en_US",
      type: "website",
      url: `https://rcsarabia.com/${locale}${path}`,
    },
    twitter: { card: "summary_large_image", title, description },
  };
}
