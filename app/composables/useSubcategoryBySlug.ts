import type { Ref } from "vue";

export const useSubcategoryBySlug = async (
  documentId: string | Ref<string>
) => {
  const { locale } = useLocale();
  const { findOne } = useStrapi();
  const { getImage } = useStrapiImage();

  const idRef = isRef(documentId) ? documentId : ref(documentId);

  const { data: response } = await useAsyncData(
    `subcategory-${idRef.value}-${locale.value}`,
    () =>
      findOne<any>("pod-kategoriyas", idRef.value, {
        populate: {
          image: true,
          tovaries: { populate: { image: true, pod_kategoriyas: true } },
        },
        locale: locale.value,
      })
  );

  const subcategory = computed(() => {
    const s = response.value?.data;
    if (!s) return null;
    return {
      id: s.documentId,
      name: s.name,
      banner: getImage(s.image?.url),
    };
  });

  const products = computed(() =>
    (response.value?.data?.tovaries ?? []).map((p: any) => ({
      id: p.documentId,
      name: p.name,
      category: p.pod_kategoriyas?.[0]?.name,
      image: getImage(p.image?.url),
    }))
  );

  return { subcategory, products };
};
