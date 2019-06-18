import React from "react";

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <p>{this.props.comment.username}</p>
        <p>{this.props.comment.body}</p>
        <button>Delete</button>
      </>
    );
  }
}

export default CommentIndexItem;
