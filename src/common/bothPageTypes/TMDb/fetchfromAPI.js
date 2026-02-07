import { buildQueryString } from "../buildQueryString";

const API_KEY = "64ac986c586016d0646be000556db945";
const API_URL = "https://api.themoviedb.org/3";

export const fetchFromAPI = async ({ path, parameters = {} }) => {
  const allParameters = {
    api_key: API_KEY,
    ...parameters,
  };

  const response = await fetch(`${API_URL}${path}?${buildQueryString(allParameters)}`);

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`TMDb API error ${response.status}: ${errorText}`);
  }

  return response.json();
};
