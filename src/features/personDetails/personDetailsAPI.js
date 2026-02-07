import { fetchFromAPI } from "../../common/bothPageTypes/TMDb/fetchFromAPI";

export const getPersonDetails = ({ id }) =>
  fetchFromAPI({
    path: `/person/${id}`,
  });

export const getPersonCredits = ({ id }) =>
  fetchFromAPI({
    path: `/person/${id}/movie_credits`,
  });
