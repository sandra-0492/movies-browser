import { all } from "redux-saga/effects";
import { watchFetchMovies } from "../features/movieList/movieListSaga";
import { watchFetchMovieDetails } from "../features/movieDetails/movieDetailsSaga";
import { watchFetchPersonDetails } from "../features/personDetails/personDetailsSaga";
import { watchFetchPeople } from "../features/personList/personListSaga";
import { watchFetchGenres } from "../common/bothPageTypes/genres/genresSaga";

export default function* saga() {
  yield all([
    watchFetchMovies(),
    watchFetchMovieDetails(),
    watchFetchPersonDetails(),
    watchFetchPeople(),
    watchFetchGenres(),
  ]);
}
