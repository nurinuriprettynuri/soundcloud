import * as APIUtil from "../util/tag_util";

export const RECEIVE_ALL_TAGS = "RECEIVE_ALL_TAGS";
export const RECEIVE_TAG = "RECEIVE_TAG";
export const RECEIVE_TAG_ERRORS = "RECEIVE_TAG_ERRORS";

export const receiveAllTags = tags => ({
  type: RECEIVE_ALL_TAGS,
  tags
});

export const receiveTag = tag => ({
  type: RECEIVE_TAG,
  tag
});

export const receiveErrors = errors => ({
  type: RECEIVE_TAG_ERRORS,
  errors
});

export const fetchAllTags = () => dispatch =>
  APIUtil.fetchAllTags().then(
    tags => dispatch(receiveAllTags(tags)),
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const fetchTag = id => dispatch =>
  APIUtil.fetchTag(id).then(
    tags => dispatch(receiveTag(tags)),
    err => dispatch(receiveErrors(err.responseJSON))
  );
