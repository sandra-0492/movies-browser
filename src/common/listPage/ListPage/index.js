import { useSelector } from "react-redux";
import { Container } from "../../bothPageTypes/Container";
import { Page } from "../../bothPageTypes/Page";
import { NoResults } from "./NoResults";
import { Pager } from "./Pager";
import { useFetchDataOnLocationSearchChange } from "./useFetchDataOnQueryChange";
import { useGoToFirstPageWhenResultsEmpty } from "./useGoToFirstPageWhenEmpty";
import { useClearDataOnLeave } from "../../bothPageTypes/useClearDataOnLeave";

export const ListPage = ({ selectors, actions, emptyQuerytext, children }) => {
  const status = useSelector(selectors.selectStatus);
  const results = useSelector(selectors.selectResults);
  const resultsEmpty = useSelector(selectors.selectResultsEmpty);
  const pagination = useSelector(selectors.selectPagination);
  const query = useSelector(selectors.selectQuery);

  useFetchDataOnLocationSearchChange({ fetchAction: actions.fetch });

  useClearDataOnLeave({ clearAction: actions.clear });

  useGoToFirstPageWhenResultsEmpty({
    status,
    results,
    page: pagination?.page,
  });

  return (
    <Page
      title={
        query?.trim() ? (
          resultsEmpty ? (
            <>
              Sorry, tehre are no results for <q>{query}</q>
            </>
          ) : (
            <>
              Search results for <q>{query}</q>
              {pagination?.totalResults && ` (${pagination.totalResults})`}
            </>
          )
        ) : (
          emptyQuerytext
        )
      }
      status={status}
    >
      <Container>
        {resultsEmpty ? (
          <NoResults />
        ) : (
          <>
            {children}

            {pagination && (
              <Pager
                page={pagination.page}
                totalPages={pagination.totalPages}
              />
            )}
          </>
        )}
      </Container>
    </Page>
  );
};
