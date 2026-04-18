export const usePartnersList = async () => {
  const { locale } = useLocale();
  const { find } = useStrapi();
  const { getImage } = useStrapiImage();

  const { data: response } = await useAsyncData(
    `partners-list-${locale.value}`,
    () =>
      find<any>("partners", {
        populate: { logo: true },
        pagination: { page: 1, pageSize: 100 },
        locale: locale.value,
      })
  );

  const partners = computed(() =>
    (response.value?.data ?? []).map((partner: any) => ({
      ...partner,
      id: partner.documentId,
      logo: getImage(partner.logo?.[0]?.url ?? partner.logo?.url),
    }))
  );

  return { partners };
};
