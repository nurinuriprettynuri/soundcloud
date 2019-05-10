export const PLAY_TRACK = "RECEIVE_PLAY_SONG";
export const PLAY = "PLAY";
export const PAUSE = "PAUSE";
export const RECEIVE_CURRENT_TIME = "RECEIVE_CURRENT_TIME";
export const RECEIVE_SEEK_TIME = "RECEIVE_SEEK_TIME";

export const playTrack = track => ({
  type: PLAY_TRACK,
  track
});

export const play = () => ({
  type: PLAY
});

export const pause = () => ({
  type: PAUSE
});

export const receiveSeekTime = time => ({
  type: RECEIVE_CURRENT_TIME,
  time
});

export const receiveCurrentTime = currentTime => ({
  type: RECEIVE_CURRENT_TIME,
  currentTime
});
