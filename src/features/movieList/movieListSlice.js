import { createListSlice } from "../../common/listPage/listSlice";

export const movieListSlice = createListSlice({
  name: "movieList",
});

export const { actions, selectors } = movieListSlice;

export default movieListSlice.reducer;
