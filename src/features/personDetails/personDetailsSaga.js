import { actions } from "./personDetailsSlice";
import { getPersonDetails, getPersonCredits } from "./personDetailsAPI";
import { detailsSaga } from "../../common/detailsPage/detailsSaga";

export function* watchFetchPersonDetails() {
  yield detailsSaga({
    getDetails: getPersonDetails,
    getCredits: getPersonCredits,
    actions,
  });
}
