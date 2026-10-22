import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

type Messages = { [key: string]: unknown };

const isPlainObject = (value: unknown): value is Messages =>
  typeof value === "object" && value !== null && !Array.isArray(value);

/**
 * Overlay `override` on `base`. Objects merge key by key; anything else
 * (strings, numbers, arrays) in `override` replaces the base value, so a
 * translated list never mixes with English items.
 */
function deepMerge(base: Messages, override: Messages): Messages {
  const result: Messages = { ...base };
  for (const [key, value] of Object.entries(override)) {
    const existing = result[key];
    result[key] =
      isPlainObject(existing) && isPlainObject(value) ? deepMerge(existing, value) : value;
  }
  return result;
}

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as "en" | "ar")) {
    locale = routing.defaultLocale;
  }

  const defaultMessages = (await import(`../../messages/${routing.defaultLocale}.json`))
    .default as Messages;

  // Any key missing from the active locale falls back to the default locale
  // (English), so untranslated pages render instead of throwing.
  const messages =
    locale === routing.defaultLocale
      ? defaultMessages
      : deepMerge(
          defaultMessages,
          (await import(`../../messages/${locale}.json`)).default as Messages,
        );

  return { locale, messages };
});
