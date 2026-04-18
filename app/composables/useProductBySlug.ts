import type { Ref } from "vue";

export const useProductBySlug = async (
  documentId: string | Ref<string>
) => {
  const { locale } = useLocale();
  const { findOne } = useStrapi();
  const { getImage } = useStrapiImage();

  const idRef = isRef(documentId) ? documentId : ref(documentId);

  const { data: response } = await useAsyncData(
    `product-${idRef.value}`,
    () =>
      findOne<any>("tovaries", idRef.value, {
        populate: { image: true, pod_kategoriyas: true },
        locale: locale.value,
      })
  );

  const product = computed(() => {
    const p = response.value?.data;
    if (!p) return null;
    return {
      id: p.documentId,
      name: p.name,
      title: p.title,
      excert: p.excert,
      description: p.description,
      video: p.video,
      seo_descripiton: p.seo_descripiton,
      seo_keywords: p.seo_keywords,
      category: p.pod_kategoriyas?.[0]?.name,
      image: getImage(p.image?.url),
    };
  });

  return { product };
};
