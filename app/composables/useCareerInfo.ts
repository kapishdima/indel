export const useCareerInfo = async () => {
  const { locale } = useLocale();
  const { find } = useStrapi();
  const { getImage } = useStrapiImage();

  const { data: response } = await useAsyncData(
    `career-info-${locale.value}`,
    () =>
      find<any>("career", {
        populate: { banner_img: true, section_img: true },
        locale: locale.value,
      })
  );

  const careerInfo = computed(() => {
    const data = response.value?.data;
    if (!data) return null;
    const node = Array.isArray(data) ? data[0] : data;
    return {
      ...node,
      banner_img: getImage(node?.banner_img?.url),
      section_img: getImage(node?.section_img?.url),
    };
  });

  return { careerInfo };
};
