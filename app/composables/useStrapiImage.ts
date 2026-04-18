export const useStrapiImage = () => {
  const getImage = (path?: string | null): string | null => {
    if (!path) return null;
    return useStrapiMedia(path);
  };

  return { getImage };
};
