export const useGlobalTexts = () => {
  const { locale } = useLocale();
  const { find } = useStrapi();

  const { data: response } = useAsyncData(
    `global-texts-${locale.value}`,
    () => find<any>("teksty", { locale: locale.value })
  );

  const texts = computed(() => {
    const data = response.value?.data;
    if (!data) return null;
    return Array.isArray(data) ? data[0] ?? null : data;
  });

  return { texts };
};
