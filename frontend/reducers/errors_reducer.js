import { combineReducers } from "redux";

import session from "./session_errors_reducer";
import track from "./track_errors_reducer";
import tag from "./tag_errors_reducer";

export default combineReducers({
  session,
  track,
  tag
});
