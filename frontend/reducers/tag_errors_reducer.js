import { RECEIVE_TAG_ERRORS, RECEIVE_TAG } from "../actions/tag_actions";

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TAG_ERRORS:
      return action.errors;
    case RECEIVE_TAG:
      return [];
    default:
      return state;
  }
};
