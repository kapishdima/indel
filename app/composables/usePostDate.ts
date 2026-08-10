// Strapi keeps every locale of a document as its own entry, so `createdAt` is
// the moment *that translation* was added, not when the news item was published.
// The date of the document as a whole is the earliest `createdAt` among its
// locale versions, which is why every posts query populates `localizations`.
const DATE_LOCALES: Record<string, string> = {
  "uk-UA": "uk-UA",
  en: "en-US",
};

// Pinning the zone keeps the server (prerender) and the browser on the same
// calendar day instead of drifting by one.
const DATE_TIME_ZONE = "Europe/Kyiv";

export const usePostDate = () => {
  const { locale } = useLocale();

  const toTimestamp = (value?: string | null): number | null => {
    if (!value) return null;
    const time = new Date(value).getTime();
    return Number.isNaN(time) ? null : time;
  };

  const getTimestamp = (post: any): number | null => {
    const candidates = [
      toTimestamp(post?.createdAt),
      ...((post?.localizations ?? []) as any[]).map((localization) =>
        toTimestamp(localization?.createdAt)
      ),
    ].filter((time): time is number => time !== null);

    return candidates.length ? Math.min(...candidates) : null;
  };

  const format = (timestamp: number | null): string => {
    if (timestamp === null) return "";
    return new Intl.DateTimeFormat(DATE_LOCALES[locale.value] ?? "uk-UA", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      timeZone: DATE_TIME_ZONE,
    }).format(new Date(timestamp));
  };

  const formatPost = (post: any): string => format(getTimestamp(post));

  return { getTimestamp, format, formatPost };
};
