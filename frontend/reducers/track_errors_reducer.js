import {
  RECEIVE_TRACK_ERRORS,
  RECEIVE_TRACK,
  CLEAR_TRACK_ERRORS
} from "../actions/track_actions";

export default (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_TRACK_ERRORS:
      debugger;
      return action.errors;
    case RECEIVE_TRACK:
      return [];
    case CLEAR_TRACK_ERRORS:
      return [];
    default:
      return state;
  }
};
