import type { StrapiLocale } from "@nuxtjs/strapi";

export const useLocale = () => {
  const locale = ref<StrapiLocale>("uk");
  return { locale };
};
