import React from "react";
import { connect } from "react-redux";
import { fetchTrack, updateTrack } from "../../actions/track_actions";
import { fetchAllTags } from "../../actions/tag_actions";
import TrackForm from "./track_form";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
  let track = state.entities.tracks[ownProps.match.params.trackId];
  if (!track) {
    track = {
      title: "",
      artist_id: state.session.id,
      tag_id: "",
      image: null,
      imageUrl: null,
      audio: null
    };
  } else {
    track = state.entities.tracks[ownProps.match.params.trackId];
  }
  return {
    track: track,
    formType: "Update Form",
    tags: Object.values(state.entities.tags),
    state: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTrack: id => dispatch(fetchTrack(id)),
    action: (track, id) => dispatch(updateTrack(track, id)),
    fetchAllTags: () => dispatch(fetchAllTags())
  };
};

// class EditTrackForm extends React.Component {
//   componentDidMount() {
//     this.props.fetchTrack(this.props.match.params.trackId);
//     // this.props.fetchAllTags();
//   }

//   render() {
//     const { track, formType, action, tags, fetchAllTags, state } = this.props;
//     debugger;
//     return (
//       <TrackForm
//         track={track}
//         formType={formType}
//         action={action}
//         tags={tags}
//         fetchAllTags={fetchAllTags}
//         state={state}
//       />
//     );
//   }
// }

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TrackForm)
);
