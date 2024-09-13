export function getDefaultLocale() {
  const localesString = process.env.NEXT_PUBLIC_SUPPORTED_LOCALES;

  if (!localesString) {
    throw new Error(
      "The environment variable NEXT_PUBLIC_SUPPORTED_LOCALES is required"
    );
  }

  const defaultLocale = process.env.NEXT_PUBLIC_DEFAULT_LOCALE;

  if (!defaultLocale) {
    throw new Error(
      "The environment variable NEXT_PUBLIC_DEFAULT_LOCALE is required"
    );
  }

  return defaultLocale;
}

export function getLocales() {
  const localesString = process.env.NEXT_PUBLIC_SUPPORTED_LOCALES;

  if (!localesString) {
    throw new Error(
      "The environment variable NEXT_PUBLIC_SUPPORTED_LOCALES is required"
    );
  }

  return localesString.split(",");
}

export const i18n = {
  defaultLocale: getDefaultLocale(),
  locales: getLocales(),
} as const;

export type Locale = (typeof i18n)["locales"][number];
