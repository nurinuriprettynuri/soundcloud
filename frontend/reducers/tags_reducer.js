import { RECEIVE_ALL_TAGS, RECEIVE_TAG } from "../actions/tag_actions";

import merge from "lodash/merge";

const tagReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_TAGS:
      return action.tags;
    case RECEIVE_TAG:
      return merge({}, state, action.tag);
    default:
      return state;
  }
};

export default tagReducer;
