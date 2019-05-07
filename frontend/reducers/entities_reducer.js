import { combineReducers } from "redux";

import users from "./users_reducer";
import tracks from "./tracks_reducer";
import tags from "./tags_reducer";

export default combineReducers({
  tracks,
  users,
  tags
});
