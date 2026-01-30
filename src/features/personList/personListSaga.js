import { actions } from "./personListSlice";
import { listSaga } from "../../common/listPage/listSaga";
import { getPopularPeople, searchPeople } from "./personListAPI";

export function* watchFetchPeople() {
  yield listSaga({
    getPopular: getPopularPeople,
    search: searchPeople,
    actions,
  });
}
