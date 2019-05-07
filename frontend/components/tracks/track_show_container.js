import { connect } from "react-redux";
import { fetchTrack } from "../../actions/track_actions";
import TrackShow from "./track_show";

const mapStateToProps = (state, ownProps) => {
  debugger;
  return {
    // track: state.entities.tracks[ownProps.match.params.trackId]
    track: state.entities.tracks[ownProps.match.params.trackId]
  };
};

const mapDispatchToProps = dispatch => ({
  fetchTrack: id => dispatch(fetchTrack(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackShow);
