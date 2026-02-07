import { fetchFromAPI } from "../../common/bothPageTypes/TMDb/fetchFromAPI";

export const getMovieDetails = ({ id }) => {
  if (!id) throw new Error("Movie ID is required");
  return fetchFromAPI({
    path: `/movie/${id}`,
  });
};

export const getMovieCredits = ({ id }) => {
  if (!id) throw new Error("Movie ID is required");
  return fetchFromAPI({
    path: `/movie/${id}/credits`,
  });
};
