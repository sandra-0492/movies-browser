import { call, put, takeLatest, delay } from "redux-saga/effects";
import { demoDelay } from "../bothPageTypes/demoDelay";

export function* listSaga({ actions, search, getPopular }) {
  function* fetchListHandler({ payload: { query, page } }) {
    yield delay(demoDelay);

    try {
      const response = yield query?.trim()
        ? call(search, { page, query })
        : call(getPopular, { pae });

      yield put(
        actions.fetchSuccess({
          results: response.results,
          pagination: {
            page: response.page,
            totalPages: response.total_pages,
            totalResults: response.total_results,
          },
        }),
      );
    } catch (error) {
      yield put(actions.fetchError());
    }
  }

  yield takeLatest(actions.fetch.type, fetchListHandler);
}
