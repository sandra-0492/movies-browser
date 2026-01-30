import { PersonDetails } from "./PersonDetails";
import { actions, selectors } from "./personDetailsSlice";
import { DetailsPage } from "../../common/detailsPage/DetailsPage";

export const PersonDetailsPage = () => (
  <DetailsPage
    statusSelector={selectors.selectStatus}
    fetchAction={actions.fetch}
    clearAction={actions.clear}
  >
    <PersonDetails />
  </DetailsPage>
);
