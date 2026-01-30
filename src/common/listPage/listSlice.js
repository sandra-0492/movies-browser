import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "initial",
};

export const createListSlice = ({ name }) => {
  const slice = createSlice({
    name,
    initialState,
    reducers: {
      fetchError: () => ({
        status: "error",
      }),
      fetchSuccess: (state, { payload: { results, pagination } }) => {
        state.status = "success";
        state.results = results;
        state.pagination = pagination;
      },
      fetch: (_, { payload: { query } }) => ({
        status: "loading",
        query,
      }),
      clear: () => initialState,
    },
  });

  const selectResults = (state) => state[name].results;

  return {
    reducer: slice.reducer,
    actions: slice.actions,
    selectors: {
      selectResults,
      selectStatus: (state) => state[name].status,
      selectQuery: (state) => state[name].query,
      selectPagination: (state) => state[name].pagination,
      selectResultsEmpty: (state) => selectResults(state)?.length === 0,
    },
  };
};
