import type { Ref } from "vue";

interface UseCategoryBySlugOptions {
  withProducts?: boolean;
  withSubcategories?: boolean;
}

export const useCategoryBySlug = async (
  documentId: string | Ref<string>,
  options: UseCategoryBySlugOptions = {}
) => {
  const withProducts = options.withProducts !== false;
  const withSubcategories = options.withSubcategories !== false;

  const { locale } = useLocale();
  const { findOne } = useStrapi();
  const { getImage } = useStrapiImage();

  const idRef = isRef(documentId) ? documentId : ref(documentId);

  const populate: Record<string, any> = { image: true };
  if (withSubcategories) {
    populate.pod_kategoriyas = { populate: { image: true } };
  }
  if (withProducts) {
    populate.tovaries = { populate: { image: true, pod_kategoriyas: true } };
  }

  const { data: response } = await useAsyncData(
    `category-${idRef.value}-${locale.value}`,
    () =>
      findOne<any>("categories", idRef.value, {
        populate,
        locale: locale.value,
      })
  );

  const category = computed(() => {
    const c = response.value?.data;
    if (!c) return null;
    return {
      id: c.documentId,
      name: c.Name,
      section: c.section,
      banner: getImage(c.image?.url),
    };
  });

  const subcategories = computed(() =>
    !withSubcategories
      ? []
      : (response.value?.data?.pod_kategoriyas ?? [])
          .map((sub: any) => ({
            id: sub.documentId,
            name: sub.name,
            image: getImage(sub.image?.url),
            order: sub.order,
          }))
          .sort((a: any, b: any) => (a.order ?? 0) - (b.order ?? 0))
  );

  const products = computed(() =>
    !withProducts
      ? []
      : (response.value?.data?.tovaries ?? []).map((p: any) => ({
          id: p.documentId,
          name: p.name,
          category: p.pod_kategoriyas?.[0]?.name,
          image: getImage(p.image?.url),
        }))
  );

  return { category, subcategories, products };
};
