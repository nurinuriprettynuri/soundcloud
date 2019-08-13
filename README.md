# README

[Live Demo](https://sound-cloud-pj.herokuapp.com)

SoundClown is a single-page web application that offers users to stream my favorite songs.The design and functionality is inspired by SoundCloud.

![hey](./image/soundclown.gif)

## Technologies

SoundClown is built using Ruby on Rails and a PostgreSQL database to handle the backend. AWS S3 is used to host the main media files (artist, , and album art as well as song files). React and Redux are used to manage the state of the front end alongside HTML5 and SASS for styling.



## Features

### Global music playbar

The goal:
Add the ability for users to play songs continuously while browsing the site. Allow globally synced play/pause functionality from the playbar, the song's page, and on other pages where the song appears.

The solution:
Have a UI slice of state as part of the global Redux state that keeps track of the necessary data that needs to be synced across the app. Pass the relevant parts of that slice of state and relevant actions to other components (such as the song show page) to allow for globally synced playback and control.

```
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
      if (!currentTrack || currentTrack.id != action.track.id) {
        audio[0].setAttribute("src", action.track.audioUrl);
        audio[0].play();
        audio[0].onloadedmetadata = function() {
          let durationEl = document.getElementById("song-duration");
          let minutes = Math.floor(audio[0].duration / 60);
          let seconds = Math.floor(audio[0].duration % 60);
          durationEl.innerText = `${minutes}:${
            seconds < 10 ? "0" : ""
          }${seconds}`;
        };
        return merge(
          {},
          state,
          { currentTrack: action.track, trackDuration: audio[0].duration },
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
```
