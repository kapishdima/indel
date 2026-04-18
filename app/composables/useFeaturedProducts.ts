export const useFeaturedProducts = async () => {
  const { locale } = useLocale();
  const { find } = useStrapi();
  const { getImage } = useStrapiImage();

  const { data: response } = await useAsyncData(
    `featured-products-${locale.value}`,
    () =>
      find<any>("tovary-glavnayas", {
        populate: { image: true },
        locale: locale.value,
      })
  );

  const products = computed(() =>
    response.value?.data?.map((product: any) => ({
      id: product.documentId,
      name: product.name,
      link: product.link,
      image: getImage(product.image?.url),
    })) ?? []
  );

  return { products };
};
