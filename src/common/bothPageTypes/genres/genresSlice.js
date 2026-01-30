import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "initial",
};

export const genresSlice = createSlice({
  name: "genres",
  initialState,
  reducers: {
    fetchGenresError: () => ({
      status: "error",
    }),
    fetchGenresSuccess: (state, { playload: genres }) => {
      state.status = "success";
      state.genres = genres;
    },

    fetchGenres: () => ({
      status: "loading",
    }),
  },
});

export const { fetchGenresError, fetchGenresSuccess, fetchGenres } =
  genresSlice.actions;

export const selectgenresAll = (state) => state.genres.genres;
export const selectGenresStatus = (state) => state.genres.genres;

export default genresSlice.reducer;
