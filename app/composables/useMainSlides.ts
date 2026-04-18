export const useMainSlides = async () => {
  const { locale } = useLocale();
  const { find } = useStrapi();
  const { getImage } = useStrapiImage();

  const { data: response } = await useAsyncData(
    `main-slides-${locale.value}`,
    () =>
      find<any>("slajder-glavnayas", {
        populate: { image: true },
        locale: locale.value,
      })
  );

  const slides = computed(() =>
    (response.value?.data ?? [])
      .map((banner: any) => ({
        ...banner,
        id: banner.documentId,
        image: getImage(banner.image?.url),
      }))
      .sort((a: any, b: any) => (a.order ?? 0) - (b.order ?? 0))
  );

  return { slides };
};
