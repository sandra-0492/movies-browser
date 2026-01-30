import { useSelector } from "react-redux";
import { actions, selectors } from "./movieListSlice";
import { ListPage } from "../../common/listPage/ListPage";
import { Movies } from "../../common/bothPageTypes/Movies";

export const MovieListPage = () => {
  const movies = useSelector(selectors.selectResults);

  return (
    <ListPage
      selectors={selectors}
      actions={actions}
      emptyQuerytext="Popular movies"
    >
      <Movies movies={movies} />
    </ListPage>
  );
};
