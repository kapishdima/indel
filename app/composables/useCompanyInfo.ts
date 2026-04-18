export const useCompanyInfo = async () => {
  const { locale } = useLocale();
  const { find } = useStrapi();
  const { getImage } = useStrapiImage();

  const { data: response } = await useAsyncData(
    `company-info-${locale.value}`,
    async () => {
      const [info, team] = await Promise.all([
        find<any>("o-kompanii", {
          populate: {
            first_image: true,
            second_image: true,
            third_image: true,
            main_image: true,
          },
          locale: locale.value,
        }),
        find<any>("komandas", {
          populate: { avatar: true },
          locale: locale.value,
        }),
      ]);
      return { info: info.data, team: team.data };
    }
  );

  const companyInfo = computed(() => {
    const data = response.value?.info;
    if (!data) return null;
    const node = Array.isArray(data) ? data[0] : data;
    return {
      ...node,
      main_image: getImage(node?.main_image?.url),
      first_image: getImage(node?.first_image?.url),
      second_image: getImage(node?.second_image?.url),
      third_image: getImage(node?.third_image?.url),
    };
  });

  const team = computed(() =>
    (response.value?.team ?? []).map((member: any) => ({
      ...member,
      avatar: getImage(member?.avatar?.url),
    }))
  );

  return { companyInfo, team };
};
