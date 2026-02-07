import { fetchFromAPI } from "../../common/bothPageTypes/TMDb/fetchFromAPI";

const fetchMovies = (path, params) => fetchFromAPI({ path, parameters: params });

export const getPopularMovies = ({ page }) => fetchMovies("/movie/popular", { page });
export const searchMovies = ({ query, page }) => fetchMovies("/search/movie", { query, page });

