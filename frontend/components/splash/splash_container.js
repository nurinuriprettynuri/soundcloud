import { connect } from "react-redux";
import Splash from "./splash";
import { openModal } from "../../actions/modal_actions";
import { playTrack } from "../../actions/playbar_action";
import { fetchTrack, fetchAllTracks } from "../../actions/track_actions";

const mapStateToProps = state => {
  return {
    currentUser: state.entities.users[state.session.id],
    playbarState: state.ui.playbar,
    tracks: Object.values(state.entities.tracks).slice(0, 5)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openModal: modal => dispatch(openModal(modal)),
    playTrack: track => dispatch(playTrack(track)),
    fetchTrack: id => dispatch(fetchTrack(id)),
    fetchAllTracks: () => dispatch(fetchAllTracks())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
