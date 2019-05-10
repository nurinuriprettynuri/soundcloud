import { connect } from "react-redux";
import { fetchTrack } from "../../actions/track_actions";
import TrackShow from "./track_show";
import { playTrack } from "../../actions/playbar_action";

const mapStateToProps = (state, ownProps) => {
  const showTrack = state.entities.tracks[ownProps.match.params.trackId];
  let artist;
  if (!showTrack) {
    artist = "";
  } else {
    artist = state.entities.users[showTrack.artist_id];
  }
  // console.log(showTrack);
  return {
    track: showTrack,
    artist: artist,
    playbarState: state.ui.playbar
  };
};

const mapDispatchToProps = dispatch => ({
  fetchTrack: id => dispatch(fetchTrack(id)),
  playTrack: track => dispatch(playTrack(track))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackShow);
