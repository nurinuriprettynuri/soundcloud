import {
  PLAY_TRACK,
  PLAY,
  PAUSE,
  RECEIVE_CURRENT_TIME,
  RECEIVE_SEEK_TIME
} from "../actions/playbar_action";
import merge from "lodash/merge";

const defaultState = {
  currentTrack: null,
  isPlaying: false,
  currentTime: 0,
  trackDuration: 0,
  seekTime: 0
};

export default (state = defaultState, action) => {
  Object.freeze(state);
  const audio = document.getElementsByClassName("react-audio-player");
  switch (action.type) {
    case PLAY_TRACK:
      const { currentTrack, isPlaying } = state;
      console.log(action.track, currentTrack, isPlaying);

      if (!currentTrack || currentTrack.id != action.track.id) {
        audio[0].setAttribute("src", action.track.audioUrl);
        audio[0].play();
        return merge(
          {},
          state,
          { currentTrack: action.track },
          { isPlaying: true }
        );
      } else if (currentTrack && currentTrack.id === action.track.id) {
        if (isPlaying === true) {
          audio[0].pause();
          return merge({}, state, { isPlaying: false });
        } else {
          audio[0].play();
          return merge({}, state, { isPlaying: true });
        }
      }
    case PLAY:
      return merge({}, state, { isPlaying: true });
    case PAUSE:
      returnmerge({}, state, { isPlaying: false });
    default:
      return state;
  }
};
