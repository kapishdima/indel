// server/api/_sitemap-urls.ts

interface StrapiV5Item {
  documentId: string;
  updatedAt?: string;
  publishedAt?: string;
}

interface StrapiV5Category extends StrapiV5Item {
  section?: string;
  pod_kategoriyas?: unknown[];
}

interface StrapiV5ListResponse<T> {
  data: T[];
  meta?: {
    pagination?: {
      page: number;
      pageCount: number;
    };
  };
}

const PAGE_SIZE = 100;
const SECTION_ROUTES = new Set(["pharm", "food"]);

const fetchAll = async <T extends StrapiV5Item>(
  baseUrl: string,
  collection: string,
  params: string[] = []
): Promise<T[]> => {
  const items: T[] = [];
  let page = 1;
  let pageCount = 1;

  do {
    const query = [
      ...params,
      `pagination[page]=${page}`,
      `pagination[pageSize]=${PAGE_SIZE}`,
    ].join("&");

    const response = await $fetch<StrapiV5ListResponse<T>>(
      `${baseUrl}/api/${collection}?${query}`
    );

    items.push(...(response.data ?? []));
    pageCount = response.meta?.pagination?.pageCount ?? 1;
    page += 1;
  } while (page <= pageCount);

  return items;
};

const lastmodOf = (item: StrapiV5Item) => item.updatedAt ?? item.publishedAt;

const url = (loc: string, item: StrapiV5Item) => ({
  loc,
  lastmod: lastmodOf(item),
  _i18nTransform: true,
});

export default defineEventHandler(async () => {
  const baseUrl = process.env.STRAPI_URL || "http://localhost:1337";

  try {
    const [products, posts, categories, subcategories] = await Promise.all([
      fetchAll<StrapiV5Item>(baseUrl, "tovaries"),
      fetchAll<StrapiV5Item>(baseUrl, "novostis"),
      fetchAll<StrapiV5Category>(baseUrl, "categories", [
        "populate=pod_kategoriyas",
      ]),
      fetchAll<StrapiV5Item>(baseUrl, "pod-kategoriyas"),
    ]);

    const productUrls = products.map((product) =>
      url(`/products/${product.documentId}`, product)
    );

    const postsUrls = posts.map((post) => url(`/posts/${post.documentId}`, post));

    const categoriesUrls = categories.map((category) => {
      const section = category.section ?? "";
      const inSection =
        Boolean(category.pod_kategoriyas?.length) && SECTION_ROUTES.has(section);

      return url(
        inSection
          ? `/${section}/${category.documentId}`
          : `/category/${category.documentId}`,
        category
      );
    });

    const subcategoriesUrls = subcategories.map((subcategory) =>
      url(`/subcategory/${subcategory.documentId}`, subcategory)
    );

    return [
      ...productUrls,
      ...postsUrls,
      ...categoriesUrls,
      ...subcategoriesUrls,
    ];
  } catch (error) {
    console.error(
      "[sitemap-urls] Strapi недоступен — карта будет собрана без товаров, " +
        "новостей и категорий. Проверьте STRAPI_URL перед продакшен-сборкой.",
      error
    );
    return [];
  }
});
