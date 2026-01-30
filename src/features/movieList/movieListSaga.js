import { actions } from "./movieListSlice";
import { listSaga } from "../../common/listPage/listSaga";
import { getPopularMovies, searchMovies } from "./movieListAPI";

export function* watchFetchMovies() {
  yield listSaga({
    getPopular: getPopularMovies,
    search: searchMovies,
    actions,
  });
}
