interface UseVideosListOptions {
  limit?: number;
}

export const useVideosList = async (options: UseVideosListOptions = {}) => {
  const { locale } = useLocale();
  const { find } = useStrapi();

  const { data: response } = await useAsyncData(
    `videos-list-${locale.value}-${options.limit ?? "all"}`,
    () =>
      find<any>("video-glavnayas", {
        ...(options.limit
          ? { pagination: { start: 0, limit: options.limit } }
          : {}),
        locale: locale.value,
      })
  );

  const videos = computed(() =>
    (response.value?.data ?? []).map((video: any) => ({
      id: video.documentId,
      title: video.title,
      video: video.video,
    }))
  );

  return { videos };
};
