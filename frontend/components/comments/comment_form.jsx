import React from "react";

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.comment;
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update() {
    console.log(this.state);
    return e => this.setState({ body: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("comment[user_id]", this.state.user_id);
    formData.append("comment[track_id]", this.state.track_id);
    formData.append("comment[body]", this.state.body);
    this.props.createComment(formData);
  }

  render() {
    return (
      <div className="new-comment-div">
        <img src={this.props.userImage.imageUrl} className="comment-img" />
        <form onSubmit={this.handleSubmit}>
          {this.state.username}
          <div className="comment_div">
            <input
              className="comment-input"
              type="text"
              value={this.state.body}
              onChange={this.update()}
            />
          </div>
        </form>
        <input type="submit" value="add" />
      </div>
    );
  }
}

export default CommentForm;
