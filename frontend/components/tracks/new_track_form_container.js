import { connect } from "react-redux";
import { createTrack } from "../../actions/track_actions";
import { fetchAllTags } from "../../actions/tag_actions";

import TrackForm from "./track_form";

const mapStateToProps = state => {
  return {
    track: {
      title: "",
      artist_id: state.session.id,
      tag_id: "",
      image: null,
      audio: null
    },
    formType: "Create Track",
    tags: Object.values(state.entities.tags)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    action: track => dispatch(createTrack(track)),
    fetchAllTags: () => dispatch(fetchAllTags())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackForm);
