interface UseCategoriesListOptions {
  section?: string;
}

export const useCategoriesList = async (
  options: UseCategoriesListOptions = {}
) => {
  const { locale } = useLocale();
  const { find } = useStrapi();
  const { getImage } = useStrapiImage();

  const sectionKey = options.section ?? "all";

  const { data: response } = await useAsyncData(
    `categories-${sectionKey}-${locale.value}`,
    () =>
      find<any>("categories", {
        populate: { image: true, pod_kategoriyas: true },
        ...(options.section
          ? { filters: { section: { $eq: options.section } } }
          : {}),
        locale: locale.value,
      })
  );

  const categories = computed(() =>
    (response.value?.data ?? [])
      .map((cat: any) => ({
        id: cat.documentId,
        name: cat.Name,
        section: cat.section,
        image: getImage(cat.image?.url),
        order: cat.order,
        children:
          !cat.pod_kategoriyas?.length
            ? null
            : cat.pod_kategoriyas.map((sub: any) => ({
                id: sub.documentId,
                name: sub.name,
              })),
      }))
      .sort((a: any, b: any) => (a.order ?? 0) - (b.order ?? 0))
  );

  return { categories };
};
