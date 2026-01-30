import { actions } from "./movieDetailsSlice";
import { getMovieDetails, getMovieCredits } from "./movieDetailsAPI";
import { detailsSaga } from "../../common/detailsPage/detailsSaga";

export function* watchFetchMovieDetails() {
  yield detailsSaga({
    getDetails: getMovieDetails,
    getCredits: getMovieCredits,
    actions,
  });
}
