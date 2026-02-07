import { call, put, takeLatest, delay } from "redux-saga/effects";
import { fetchGenres, fetchGenresError, fetchGenresSuccess } from "./genresSlice";
import { getGenres } from "./genresApi";
import { demoDelay } from "../demoDelay";

const convertGenresArrayToObject = (genres) =>
  Object.fromEntries(genres.map(({ id, name }) => [id, name]));

function* fetchGenresHandler() {
  yield delay(demoDelay);

  try {
    const genresResponse = yield call(getGenres);
    yield put(fetchGenresSuccess(convertGenresArrayToObject(genresResponse)));
  } catch (error) {
    yield put(fetchGenresError());
  }
}

export function* watchFetchGenres() {
  yield takeLatest(fetchGenres.type, fetchGenresHandler);
}
