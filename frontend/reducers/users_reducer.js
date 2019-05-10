import merge from "lodash/merge";

import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_TRACK } from "../actions/track_actions";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_TRACK:
      return merge({}, state, { [action.artist.id]: action.artist });
    default:
      return state;
  }
};

export default usersReducer;
