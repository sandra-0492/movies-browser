import { useSelector } from "react-redux";
import { actions, selectors } from "./personListSlice";
import { ListPage } from "../../common/listPage/ListPage";
import { People } from "../../common/bothPageTypes/People";

export const PersonListPage = () => {
  const people = useSelector(selectors.selectResults);

  return (
    <ListPage
      selectors={selectors}
      actions={actions}
      emptyQuerytext="Popular people"
    >
      <People people={people} />
    </ListPage>
  );
};
