import { MovieDetails } from "./MovieDetails";
import { actions, selectors } from "./movieDetailsSlice";
import { DetailsPage } from "../../common/detailsPage/DetailsPage";

export const MovieDetailsPage = () => (
  <DetailsPage
    statusSelector={selectors.selectStatus}
    fetchAction={actions.fetch}
    clearAction={actions.clear}
  >
    <MovieDetails />
  </DetailsPage>
);
