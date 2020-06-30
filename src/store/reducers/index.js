import { combineReducers } from "redux";

import sideNavReducer from "./sidenav.reducer";
import a4SheetReducer from "./a4sheet.reducer";

export default combineReducers({
  a4Sheet: a4SheetReducer,
  sideNav: sideNavReducer,
});
