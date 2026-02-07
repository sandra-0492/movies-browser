import { fetchFromAPI } from "../../common/bothPageTypes/TMDb/fetchFromAPI";

export const getPopularPeople = ({ page }) =>
  fetchFromAPI({
    path: "/person/popular",
    parameters: {
      page,
    },
  });

export const searchPeople = ({ query, page }) =>
  fetchFromAPI({
    path: "/search/person",
    parameters: {
      page,
      query,
    },
  });
