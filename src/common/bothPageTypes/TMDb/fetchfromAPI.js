import { buildQueryString } from "../buildQueryString";

const API_KEY = "64ac986c586016d0646be000556db945";
const API_URL = "https://api.themoviedb.org/3";

export const getchFromAPI = async ({ path, parameters }) => {
  const defaultParameters = {
    api_key: API_KEY,
  };

  const allParameters = {
    ...defaultParameters,
    ...(parameters || {}),
  };

  const response = await fetch(
    `${API_URL}${path}?${buildQueryString(allParameters)}`,
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};
