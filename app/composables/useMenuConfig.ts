export const useMenuConfig = async () => {
  const { locale } = useLocale();
  const { find } = useStrapi();

  const { data: response } = await useAsyncData(
    `menu-config-${locale.value}`,
    () =>
      find<any>("menyu", {
        locale: locale.value,
      })
  );

  const menu = computed(() => {
    const data = response.value?.data;
    if (!data) return null;
    return Array.isArray(data) ? data[0] ?? null : data;
  });

  return { menu };
};
