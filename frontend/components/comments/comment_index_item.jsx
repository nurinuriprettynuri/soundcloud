import React from "react";

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="comment-item-div">
        <div>
          <div className="comment-item-set">
            <div className="comment-item-name">
              {this.props.comment.username}
            </div>
            <div className="comment-item-body">{this.props.comment.body}</div>
          </div>
        </div>
        <div>
          <div className="comment-item-button">
            <button
              className="comment-del-bt"
              onClick={() => this.props.deleteComment(this.props.comment.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CommentIndexItem;
