import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "initial",
  genres: {}, // { [id]: name }
};

export const genresSlice = createSlice({
  name: "genres",
  initialState,
  reducers: {
    fetchGenres: (state) => {
      state.status = "loading";
    },
    fetchGenresSuccess: (state, { payload: genres }) => {
      state.status = "success";
      state.genres = genres;
    },
    fetchGenresError: (state) => {
      state.status = "error";
    },
  },
});

export const { fetchGenres, fetchGenresSuccess, fetchGenresError } =
  genresSlice.actions;

export const selectGenresAll = (state) => state.genres.genres;
export const selectGenresStatus = (state) => state.genres.status;

export default genresSlice.reducer;
