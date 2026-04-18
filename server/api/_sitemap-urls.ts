// server/api/_sitemap-urls.ts

interface StrapiV5Item {
  documentId: string;
  section?: string;
}

interface StrapiV5ListResponse {
  data: StrapiV5Item[];
}

export default defineEventHandler(async () => {
  const baseUrl = process.env.STRAPI_URL || "http://localhost:1337";

  try {
    const [products, posts, categories, subcategories] = await Promise.all([
      $fetch<StrapiV5ListResponse>(`${baseUrl}/api/tovaries`),
      $fetch<StrapiV5ListResponse>(`${baseUrl}/api/novostis`),
      $fetch<StrapiV5ListResponse>(`${baseUrl}/api/categories`),
      $fetch<StrapiV5ListResponse>(`${baseUrl}/api/pod-kategoriyas`),
    ]);

    const productUrls = (products.data ?? []).map((product) => ({
      loc: `/products/${product.documentId}`,
      lastmod: new Date(),
    }));

    const postsUrls = (posts.data ?? []).map((post) => ({
      loc: `/posts/${post.documentId}`,
      lastmod: new Date(),
    }));

    const categoriesUrl = (categories.data ?? []).map((category) => {
      const section =
        category.section === "ingredients" ? "ingredients" : "applications";
      return {
        loc: `/${section}/${category.documentId}`,
        lastmod: new Date(),
      };
    });

    const subcategoriesUrl = (subcategories.data ?? []).map((category) => ({
      loc: `/subcategory/${category.documentId}`,
      lastmod: new Date(),
    }));

    return [...productUrls, ...postsUrls, ...categoriesUrl, ...subcategoriesUrl];
  } catch (error) {
    console.error("[sitemap-urls]", error);
    return [];
  }
});
