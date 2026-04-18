import type { Ref } from "vue";

export const usePostBySlug = async (documentId: string | Ref<string>) => {
  const { locale } = useLocale();
  const { findOne } = useStrapi();
  const { getImage } = useStrapiImage();

  const idRef = isRef(documentId) ? documentId : ref(documentId);

  const { data: response } = await useAsyncData(
    `post-${idRef.value}-${locale.value}`,
    () =>
      findOne<any>("novostis", idRef.value, {
        populate: { image: true },
        locale: locale.value,
      })
  );

  const post = computed(() => {
    const p = response.value?.data;
    if (!p) return null;
    return {
      id: p.documentId,
      title: p.title,
      text: p.text,
      image: getImage(p.image?.url),
      createdAt: new Date(p.createdAt).toLocaleDateString(),
    };
  });

  return { post };
};
