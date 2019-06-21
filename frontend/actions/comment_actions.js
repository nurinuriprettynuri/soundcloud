import * as APIUtil from "../util/comment_util";

export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";
export const CLEAR_COMMENT_ERRORS = "CLEAR_COMMENT_ERRORS";

export const receiveAllComments = comments => ({
  type: RECEIVE_ALL_COMMENTS,
  comments
});

export const receiveComment = comment => {
  console.log(comment);
  return { type: RECEIVE_COMMENT, comment };
};

export const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment: comment
});

export const receiveErrors = errors => ({
  type: RECEIVE_COMMENT_ERRORS,
  errors
});

export const clearErrors = () => ({
  tyle: CLEAR_COMMENT_ERRORS
});

export const fetchAllComments = () =>
  APIUtil.fetchAllComments().then(
    comments => dispatch(receiveAllComments(comments)),
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const fetchComment = id =>
  APIUtil.fetchComment(id).then(
    comment => dispatch(receiveComment(comment)),
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const createComment = comment => dispatch =>
  APIUtil.createComment(comment).then(
    comment => dispatch(receiveComment(comment)),
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const deleteComment = id => dispatch =>
  APIUtil.deleteComment(id).then(
    comment => dispatch(removeComment(comment)),
    err => dispatch(receiveErrors(err.responseJSON))
  );
