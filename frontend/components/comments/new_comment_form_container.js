import { connect } from "react-redux";
import { createComment } from "../../actions/comment_actions";
import CommentForm from "./comment_form";

const mapStateToProps = (state, ownProps) => {
  return {
    comment: {
      body: "",
      track_id: ownProps.trackId,
      user_id: state.session.id
    }
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createComment: comment => dispatch(createComment(comment))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);
