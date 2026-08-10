interface UsePostsListOptions {
  limit?: number;
}

// Strapi can only sort by the local `createdAt`, which differs per locale, so
// the list is fetched whole (up to this ceiling) and ordered by the canonical
// date on the client. Sorting and slicing server-side would hand each locale a
// different set of posts in a different order.
const FETCH_LIMIT = 100;

export const usePostsList = async (options: UsePostsListOptions = {}) => {
  const { locale } = useLocale();
  const { find } = useStrapi();
  const { getImage } = useStrapiImage();
  const { getTimestamp, format } = usePostDate();

  const { data: response } = await useAsyncData(
    `posts-list-${locale.value}`,
    () =>
      find<any>("novostis", {
        populate: {
          image: true,
          localizations: { fields: ["locale", "createdAt"] },
        },
        pagination: { start: 0, limit: FETCH_LIMIT },
        sort: "createdAt:desc",
        locale: locale.value,
      })
  );

  const posts = computed(() => {
    const sorted = [...(response.value?.data ?? [])].sort(
      (a: any, b: any) => (getTimestamp(b) ?? 0) - (getTimestamp(a) ?? 0)
    );

    return (options.limit ? sorted.slice(0, options.limit) : sorted).map(
      (post: any) => ({
        id: post.documentId,
        image: getImage(post.image?.url),
        title: post.title,
        text: post.text,
        createdAt: format(getTimestamp(post)),
      })
    );
  });

  return { posts };
};
