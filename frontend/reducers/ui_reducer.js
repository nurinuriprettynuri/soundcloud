import { combineReducers } from "redux";

import modal from "./modal_reducer";
import playbar from "./playbar_reducer";

export default combineReducers({
  modal,
  playbar
});
