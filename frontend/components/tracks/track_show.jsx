import React from "react";
import SessionButtonContainer from "../session_button/session_button_container";
import { Link } from "react-router-dom";

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
    this.props.fetchTrack(this.props.match.params.trackId);
    this.setState({ track: this.props.track, artist: this.props.artist });
  }

  // buttonClass() {
  //   const { isPlaying, song, currentSong } = this.props;
  //   if (isPlaying && song === currentSong) {
  //     return "pause-button-img"
  //   } else {
  //     return "play-button-img"
  //   }
  // }

  handlePlayPause(e) {
    e.preventDefault();
    this.props.playTrack(this.props.track);
  }

  render() {
    if (!this.props.track) {
      return null;
    }
    let image;
    if (this.props.track.imageUrl) {
      image = this.props.track.imageUrl;
    } else {
      image = "ss";
    }
    return (
      <>
        <SessionButtonContainer />
        <div className="show-container">
          <div className="track-show-div">
            <div className="track-show-left">
              <div className="play-button-div">
                <button onClick={this.handlePlayPause} className="play-button">
                  <img src={window.playbuttonurl} />
                </button>
              </div>
              <div className="track_title">
                <span className="track_exp">{this.props.artist.username}</span>
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
            <Link to="#">
              <button className="show_menu_btn">
                <i class="fa fa-share-square-o" aria-hidden="true" />
                Share
              </button>
            </Link>
            <Link to={`/tracks/${this.props.match.params.trackId}/edit`}>
              <button className="show_menu_btn">
                <i
                  class="fa fa-pencil-square-o show_menu_ic"
                  aria-hidden="true"
                />
                Edit
              </button>
            </Link>
            <Link to="#">
              <button className="show_menu_btn">
                <i class="fa fa-credit-card" aria-hidden="true" />
                More
              </button>
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default TrackShow;
