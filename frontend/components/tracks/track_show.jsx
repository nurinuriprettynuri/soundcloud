import React from "react";
import SessionButtonContainer from "../session_button/session_button_container";
import { Link } from "react-router-dom";
import NewCommentFormContainer from "../comments/new_comment_form_container";
import CommentIndexItem from "../comments/comment_index_item";
import RelatedTrackItem from "../tracks/related_track_item";

class TrackShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      track: {},
      artist: ""
    };
    this.handlePlayPause = this.handlePlayPause.bind(this);
  }

  componentDidMount() {
    this.props
      .fetchTrack(this.props.match.params.trackId)
      .then(
        this.setState({ track: this.props.track, artist: this.props.artist })
      );
  }

  handlePlayPause(e) {
    e.preventDefault();
    this.props.playTrack(this.props.track);
  }

  render() {
    if (!this.props.artist) {
      return null;
    }
    if (!this.props.track) {
      return null;
    }
    let image;
    if (this.props.track.imageUrl) {
      image = this.props.track.imageUrl;
    } else {
      image = "ss";
    }
    let buttonimg;
    const button =
      this.props.playbarState.isPlaying &&
      this.props.track.id === this.props.playbarState.currentTrack.id ? (
        <img src={window.pausebt} />
      ) : (
        <img src={window.playbuttonurl} />
      );
    let comments = this.props.comments.map(comment => (
      <CommentIndexItem
        key={comment.id}
        comment={comment}
        deleteComment={this.props.deleteComment}
      />
    ));

    let relatedtrack = this.props.relatedTrack.map(track => (
      <li>
        <RelatedTrackItem track={track} />
      </li>
    ));

    return (
      <>
        <SessionButtonContainer />
        <div className="show-container">
          <div className="track-show-div">
            <div className="track-show-left">
              <div className="play-button-div">
                <button onClick={this.handlePlayPause} className="play-button">
                  {button}
                </button>
              </div>
              <div className="track_title">
                <span className="track_exp username">
                  <strong>{this.props.artist.username}</strong>
                </span>
                <span className="track_exp artist">
                  {this.props.track.title}
                </span>
              </div>
            </div>
            <div className="track-show-right">
              <img className="track_show_img" src={image} />
            </div>
          </div>
          <div className="track_show_menu">
            <div>
              <Link to="#">
                <button className="show_menu_btn">
                  <i className="fa fa-share-square-o" aria-hidden="true" />
                  Share
                </button>
              </Link>
              <Link to={`/tracks/${this.props.match.params.trackId}/edit`}>
                <button className="show_menu_btn">
                  <i
                    className="fa fa-pencil-square-o show_menu_ic"
                    aria-hidden="true"
                  />
                  Edit
                </button>
              </Link>
              <Link to="#">
                <button className="show_menu_btn">
                  <i className="fa fa-credit-card" aria-hidden="true" />
                  More
                </button>
              </Link>
            </div>
          </div>
          <div className="show-bottom">
            <div className="show-buttom-left">
              <div className="show-buttom-lt">
                <div className="">
                  <NewCommentFormContainer trackId={this.props.track.id} />
                </div>
              </div>
              <div className="show-buttom-ld">
                <div className="profile">
                  <img
                    src={this.props.userImage.imageUrl}
                    className="profile-pic"
                  />
                  <div className="profile-info">
                    {this.props.userImage.username}
                    <br />
                    {this.props.userImage.location}
                  </div>
                </div>
                <div className="comment-section">
                  <div className="comment-left">{comments}</div>
                </div>
              </div>
            </div>
            <div className="show-buttom-right">
              <div className="related-tracks">Related Tracks</div>
              <div className="related-tracks-list">
                <ul>{relatedtrack}</ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default TrackShow;
