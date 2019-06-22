import { connect } from "react-redux";
import { fetchAllTracks } from "../../actions/track_actions";
import { playTrack } from "../../actions/playbar_action";
import TrackIndex from "./track_index";

const mapStateToProps = (state, ownProps) => {
  if (ownProps.match.params.userId) {
    console.log(ownProps.match.params.userId);
    let tracks = [];
    Object.values(state.entities.tracks).forEach(track => {
      if (track.artist_id === state.session.id) {
        console.log(track.artist_id);
        tracks.push(track);
      }
    });
    return {
      playbarState: state.ui.playbar,
      tracks: tracks
    };
  } else {
    return {
      playbarState: state.ui.playbar,
      tracks: Object.values(state.entities.tracks)
    };
  }
};

const mapDispatchToProps = dispatch => ({
  fetchAllTracks: () => dispatch(fetchAllTracks()),
  playTrack: track => dispatch(playTrack(track))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackIndex);
