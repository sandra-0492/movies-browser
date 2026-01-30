import { fetchFromAPI } from "../TMDb/fetchFromAPI";

export const getGenres = () =>
  fetchFromAPI({
    path: "/genre/movie/list",
  });
