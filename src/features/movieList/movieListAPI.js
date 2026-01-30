import { fetchFromAPI } from "../../common/bothPageTypes/TMDb/fetchfromAPI";

export const getPopularMovies = ({ page }) =>
  fetchFromAPI({
    path: "/movie/popular",
    parameters: {
      page,
    },
  });

export const searchMovies = ({ query, page }) =>
  fetchFromAPI({
    path: "/search/movie",
    parameters: {
      page,
      query,
    },
  });
