import { all, call, put, takeLatest, delay } from "redux-saga/effects";
import { demoDelay } from "../bothPageTypes/demoDelay";

function* fetchDetailsHandler(action, getDetails, getCredits, actions) {
  const id = action.payload;
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
      }),
    );
  } catch (error) {
    yield put(actions.fetchError());
  }
}

export function* detailsSaga({ getDetails, getCredits, actions }) {
  yield takeLatest(
    actions.fetch.type,
    fetchDetailsHandler,
    getDetails,
    getCredits,
    actions
  );
}
