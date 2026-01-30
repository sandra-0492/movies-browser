import { fetchFromAPI } from "../../common/bothPageTypes/TMDb/fetchfromAPI";

export const getMovieDetails = ({ id }) =>
  fetchFromAPI({
    path: `/movie/${id}`,
  });

export const getMovieCredits = ({ id }) =>
  fetchFromAPI({
    path: `/movie/${id}/credits`,
  });
