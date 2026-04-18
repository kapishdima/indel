interface UsePostsListOptions {
  limit?: number;
}

export const usePostsList = async (options: UsePostsListOptions = {}) => {
  const { locale } = useLocale();
  const { find } = useStrapi();
  const { getImage } = useStrapiImage();

  const { data: response } = await useAsyncData(
    `posts-list-${locale.value}-${options.limit ?? "all"}`,
    () =>
      find<any>("novostis", {
        populate: { image: true },
        ...(options.limit
          ? { pagination: { start: 0, limit: options.limit } }
          : {}),
        sort: "createdAt:desc",
        locale: locale.value,
      })
  );

  const posts = computed(() =>
    (response.value?.data ?? []).map((post: any) => ({
      id: post.documentId,
      image: getImage(post.image?.url),
      title: post.title,
      text: post.text,
      createdAt: new Date(post.createdAt).toLocaleDateString(),
    }))
  );

  return { posts };
};
