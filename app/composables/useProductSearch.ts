import type { Ref } from "vue";

export const useProductSearch = (initialQuery: string = "") => {
  const { locale } = useLocale();
  const { find } = useStrapi();
  const { getImage } = useStrapiImage();
  const { formatPost } = usePostDate();

  const query = ref(initialQuery);
  const products = ref<any[]>([]);
  const posts = ref<any[]>([]);
  const loading = ref(false);

  const search = async () => {
    if (!query.value) {
      products.value = [];
      posts.value = [];
      return;
    }

    loading.value = true;
    try {
      const [productsRes, postsRes] = await Promise.all([
        find<any>("tovaries", {
          populate: { image: true, pod_kategoriyas: true },
          locale: locale.value,
          filters: {
            $or: [
              { name: { $containsi: query.value } },
              { description: { $containsi: query.value } },
              { excert: { $containsi: query.value } },
            ],
          },
        }),
        find<any>("novostis", {
          populate: {
            image: true,
            localizations: { fields: ["locale", "createdAt"] },
          },
          locale: locale.value,
          filters: {
            $or: [
              { title: { $containsi: query.value } },
              { text: { $containsi: query.value } },
            ],
          },
        }),
      ]);

      products.value = (productsRes.data ?? []).map((product: any) => ({
        id: product.documentId,
        name: product.name,
        category: product.pod_kategoriyas?.[0]?.name,
        image: getImage(product.image?.url),
      }));

      posts.value = (postsRes.data ?? []).map((post: any) => ({
        id: post.documentId,
        title: post.title,
        text: post.text,
        image: getImage(post.image?.url),
        createdAt: formatPost(post),
      }));
    } finally {
      loading.value = false;
    }
  };

  return { query, products, posts, loading, search };
};
