import type { StrapiLocale } from "@nuxtjs/strapi";

const STRAPI_LOCALE_MAP: Record<string, StrapiLocale> = {
  "uk-UA": "uk-UA",
  en: "en",
};

export const useLocale = () => {
  const { locale: i18nLocale } = useI18n();

  const locale = computed<StrapiLocale>(
    () => STRAPI_LOCALE_MAP[i18nLocale.value] ?? "uk-UA"
  );

  return { locale };
};
