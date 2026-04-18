import type { Ref } from "vue";

interface ProductsListOptions {
  page?: Ref<number> | number;
  limit?: number;
}

export const useProductsList = async (options: ProductsListOptions = {}) => {
  const { locale } = useLocale();
  const { find } = useStrapi();
  const { getImage } = useStrapiImage();

  const page = isRef(options.page) ? options.page : ref(options.page ?? 1);

  const { data: response } = await useAsyncData(
    `products-list-${locale.value}`,
    () =>
      find<any>("tovaries", {
        populate: { image: true, pod_kategoriyas: true },
        pagination: {
          page: page.value,
          pageSize: options.limit ?? 25,
        },
        locale: locale.value,
      }),
    { watch: [page] }
  );

  const products = computed(() =>
    response.value?.data?.map((product: any) => ({
      id: product.documentId,
      name: product.name,
      category: product.pod_kategoriyas?.[0]?.name,
      image: getImage(product.image?.url),
    })) ?? []
  );

  const pagination = computed(
    () =>
      response.value?.meta?.pagination ?? {
        total: 0,
        pageSize: 25,
        page: 1,
        pageCount: 1,
      }
  );

  return { products, pagination };
};
