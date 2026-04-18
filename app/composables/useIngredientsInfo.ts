export const useIngredientsInfo = async () => {
  const { locale } = useLocale();
  const { find } = useStrapi();
  const { getImage } = useStrapiImage();

  const { data: response } = await useAsyncData(
    `ingredients-info-${locale.value}`,
    () =>
      find<any>("ingredienty-stranicza", {
        populate: {
          food_image: true,
          pharm_image: true,
          cosm_image: true,
          banner: true,
        },
        locale: locale.value,
      })
  );

  const info = computed(() => {
    const data = response.value?.data;
    if (!data) return null;
    const node = Array.isArray(data) ? data[0] : data;
    return {
      foodTitle: node?.food_name,
      pharmTitle: node?.pharm_name,
      cosmTitle: node?.cosm_name,
      images: {
        banner: getImage(node?.banner?.url),
        food: getImage(node?.food_image?.url),
        pharm: getImage(node?.pharm_image?.url),
        cosm: getImage(node?.cosm_image?.url),
      },
    };
  });

  return { info };
};
