const BASE_URL = "https://api.themoviedb.org/3";

const size = {
  medium: "w342",
  big: "w1280",
};

export const getImageUrl = ({ path, size }) =>
  path && `${BASE_URL}${sizes[size]}${path}`;
