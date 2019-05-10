import { connect } from "react-redux";
import { playTrack, play, pause } from "../../actions/playbar_action";
import Playbar from "./playbar";

const mapStateToProps = state => ({
  currentTrack: state.ui.playbar.currentTrack,
  isPlaying: state.ui.playbar.isPlaying,
  currentTime: state.ui.playbar.currentTime,
  trackDuration: state.ui.playbar.trackDuration,
  seekTime: state.ui.playbar.seekTime
});

const mapDispatchToProps = dispatch => ({
  playTrack: track => dispatch(playTrack(track)),
  play: () => dispatch(play()),
  pause: () => dispatch(pause())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playbar);
