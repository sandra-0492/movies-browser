import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import movieListReducer from "../features/movieList/movieListSlice";
import movieDetailsReducer from "../features/movieDetails/movieDetailsSlice";
import personDetailsReducer from "../features/personDetails/personDetailsSlice";
import personListReducer from "../features/personList/personListSlice";
import genresReducer from "../common/bothPageTypes/genres/genresSlice";
import saga from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    movieList: movieListReducer,
    movieDetails: movieDetailsReducer,
    personDetails: personDetailsReducer,
    personList: personListReducer,
    genres: genresReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(saga);

export default store;
