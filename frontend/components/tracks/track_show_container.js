import { connect } from "react-redux";
import { fetchTrack } from "../../actions/track_actions";
import TrackShow from "./track_show";
import { playTrack } from "../../actions/playbar_action";
import { deleteComment } from "../../actions/comment_actions";

const mapStateToProps = (state, ownProps) => {
  const showTrack = state.entities.tracks[ownProps.match.params.trackId];
  let artist;
  let relatedTrack = [];
  if (!showTrack) {
    artist = "";
  } else {
    artist = state.entities.users[showTrack.artist_id];
  }

  Object.values(state.entities.tracks).forEach(track => {
    if (track.tag.title === showTrack.tag.title) {
      relatedTrack.push(track);
    }
  });

  return {
    track: showTrack,
    artist: artist,
    playbarState: state.ui.playbar,
    comments: Object.values(state.entities.comments),
    userImage: state.entities.users[state.session.id],
    relatedTrack: relatedTrack
  };
};

const mapDispatchToProps = dispatch => ({
  fetchTrack: id => dispatch(fetchTrack(id)),
  playTrack: track => dispatch(playTrack(track)),
  deleteComment: comment => dispatch(deleteComment(comment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackShow);
