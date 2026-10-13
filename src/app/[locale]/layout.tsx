import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Inter, Manrope, Space_Grotesk, Noto_Sans_Arabic } from "next/font/google";
import type { Metadata } from "next";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TopRibbon from "@/components/TopRibbon";
import AmbientOrbs from "@/components/AmbientOrbs";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["500", "600", "700"],
});

const notoArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto-arabic",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  const siteName = "RCS Arabia";
  const title = t("title");
  const description = t("description");

  return {
    title,
    description,
    metadataBase: new URL("https://rcsarabia.com"),
    openGraph: {
      title,
      description,
      siteName,
      locale: locale === "ar" ? "ar_SA" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        ar: "/ar",
      },
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();
  const isRtl = locale === "ar";

  return (
    <html
      lang={locale}
      dir={isRtl ? "rtl" : "ltr"}
      className={`${inter.variable} ${manrope.variable} ${spaceGrotesk.variable} ${notoArabic.variable} scroll-smooth`}
    >
      <body
        className={`antialiased bg-[#FAF8F5] text-slate-900 selection:bg-brand-green/20 selection:text-brand-green-dark ${
          isRtl ? "font-[family-name:var(--font-noto-arabic)]" : "font-[family-name:var(--font-inter)]"
        }`}
      >
        <NextIntlClientProvider messages={messages}>
          <AmbientOrbs />
          {/* <TopRibbon /> */}
          <Navbar />
          <main className="relative z-10">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
