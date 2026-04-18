export const useHomeImages = async () => {
  const { locale } = useLocale();
  const { find } = useStrapi();
  const { getImage } = useStrapiImage();

  const { data: response } = await useAsyncData(
    `home-images-${locale.value}`,
    () =>
      find<any>("glavnaya-kartinki", {
        populate: "*",
        locale: locale.value,
      })
  );

  const images = computed(() => {
    const data = response.value?.data;
    if (!data) return null;
    const node = Array.isArray(data) ? data[0] : data;
    return {
      about: getImage(node?.about_image?.url),
    };
  });

  return { images };
};
