import { all, call, put, takeLatest, delay } from "redux-saga/effects";
import { demoDelay } from "../bothPageTypes/demoDelay";

export function* detailsSaga({ getDetails, getCredits, actions }) {
  function* fetchDetailsHandler({ payload: id }) {
    yield delay(demoDelay);

    try {
      const [details, credits] = yield all([
        call(getDetails, { id }),
        call(getCredits, { id }),
      ]);

      const { cast = [], crew = [] } = credits;

      yield put(
        actions.fetchSuccess({
          ...details,
          cast,
          crew,
        })
      );
    } catch (error) {
      yield put(actions.fetchError());
    }
  }

  yield takeLatest(actions.fetch.type, fetchDetailsHandler);
}
