import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "initial",
};

export const createDetailsSlice = ({ name }) => {
  const slice = createSlice({
    name,
    initialState,
    reducers: {
      fetchError: () => initialState,
      fetchSuccess: (_, { payload }) => ({
        status: "success",
        details: payload,
      }),
      fetch: () => ({ status: "loading" }),
      clear: () => initialState,
    },
  });

  return {
    reducer: slice.reducer,
    actions: slice.actions,
    selectors: {
      selectDetails: (state) => state[name].details,
      selectStatus: (state) => state[name].status,
    },
  };
};
