import { fetchFromAPI } from "../TMDb/fetchFromAPI";

export const getGenres = async () => {
  const response = await fetchFromAPI({
    path: "/genre/movie/list",
  });
  return response.genres;
};
