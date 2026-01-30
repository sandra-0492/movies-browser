import { createDetailsSlice } from "../../common/detailsPage/detailsSlice";

export const personDetailsSlice = createDetailsSlice({
  name: "personDetails",
});

export const { actions, selectors } = personDetailsSlice;

export default personDetailsSlice.reducer;
