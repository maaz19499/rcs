"use client";

import { useTranslations } from "next-intl";

// Client component on purpose: a server component calling useTranslations here would
// read request headers and make every page under [locale] dynamic instead of static.
export default function Loading() {
  const t = useTranslations("common");

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 rounded-full border-4 border-border border-t-brand-blue animate-spin" />
        <p className="text-sm text-secondary font-medium">{t("loading")}</p>
      </div>
    </div>
  );
}
