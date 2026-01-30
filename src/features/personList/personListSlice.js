import { createListSlice } from "../../common/listPage/listSlice";

export const personListSlice = createListSlice({
  name: "personList",
});

export const { actions, selectors } = personListSlice;

export default personListSlice.reducer;
