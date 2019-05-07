import * as APIUtil from "../util/track_util";

export const RECEIVE_ALL_TRACKS = "RECEIVE_ALL_TRACKS";
export const RECEIVE_TRACK = "RECEIVE_TRACK";
export const REMOVE_TRACK = "REMOVE_TRACK";
export const RECEIVE_TRACK_ERRORS = "RECEIVE_TRACK_ERRORS";
export const CLEAR_TRACK_ERRORS = "CLEAR_TRACK_ERRORS";

export const receiveAllTracks = tracks => ({
  type: RECEIVE_ALL_TRACKS,
  tracks
});

export const receiveTrack = track => ({
  type: RECEIVE_TRACK,
  track
});

export const removeTrack = track => ({
  type: REMOVE_TRACK,
  trackId: track.id
});

export const receiveErrors = errors => ({
  type: RECEIVE_TRACK_ERRORS,
  errors
});

export const clearTrackErrors = () => ({
  type: CLEAR_TRACK_ERRORS
});

export const fetchAllTracks = () => dispatch =>
  APIUtil.fetchAllTracks().then(
    tracks => dispatch(receiveAllTracks(tracks)),
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const fetchTrack = id => dispatch =>
  APIUtil.fetchTrack(id).then(
    track => dispatch(receiveTrack(track)),
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const createTrack = track => dispatch =>
  APIUtil.createTrack(track).then(
    track => dispatch(receiveTrack(track)),
    err => {
      debugger;
      dispatch(receiveErrors(err.responseJSON));
    }
  );

export const updateTrack = track => dispatch =>
  APIUtil.updateTrack(track).then(
    track => dispatch(receiveTrack(track)),
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const deleteTrack = id => dispatch =>
  APIUtil.deleteTrack(id).then(
    track => dispatch(receiveTrack(track)),
    err => dispatch(receiveErrors(err.responseJSON))
  );
