import {
  RECEIVE_ALL_COMMENTS,
  RECEIVE_COMMENT,
  REMOVE_COMMENT
} from "../actions/comment_actions";

import { RECEIVE_TRACK } from "../actions/track_actions";
import merge from "lodash/merge";

const commentReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_COMMENTS:
      return action.comments;
    case RECEIVE_COMMENT:
      return merge({}, state, { [action.comment.id]: action.comment });
    case REMOVE_COMMENT:
      newState = merge({}, state);
      delete newState[action.commentId];
      return newState;
    case RECEIVE_TRACK:
      return action.comments;
    default:
      return state;
  }
};

export default commentReducer;
