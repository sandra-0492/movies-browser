export const buildQueryString = (parameters = {}, initialQueryString = "") => {
  const urlSearchParams = new URLSearchParams(initialQueryString);

  Object.entries(parameters).forEach(([key, value]) => {
    if (value === undefined || value === null) {
      urlSearchParams.delete(key);
    } else {
      urlSearchParams.set(key, value);
    }
  });

  return urlSearchParams.toString();
};
