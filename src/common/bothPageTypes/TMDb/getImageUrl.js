const BASE_URL = "https://image.tmdb.org/t/p";

const imageSizes = {
  medium: "w342",
  big: "w1280",
};

export const getImageUrl = ({ path, size = "medium" }) =>
  path ? `${BASE_URL}/${imageSizes[size]}${path}` : null;
