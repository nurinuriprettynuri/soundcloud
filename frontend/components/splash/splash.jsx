import React from "react";
import { withRouter } from "react-router-dom";
import SessionButtonContainer from "../session_button/session_button_container";
import TrackIndexItem from "../tracks/track_index_item";

export default class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.handleOpenModal = this.handleOpenModal.bind(this);
  }

  // componentDidUpdate(prevProps) {

  // }

  handleOpenModal() {
    this.props.openModal("signup");
  }

  render() {
    let hardTracks = [
      {
        id: 4,
        audioUrl:
          "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBFQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--3adef147ca3b596a7f98c5b79185646e21b380c3/If%20I%20ever%20feel%20better.mp3",
        imageUrl: "splash_1.jpg"
      },
      {
        id: 2,
        audioUrl:
          "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBEZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--694e328b91accd7143bb350a6e3b172a86c0156a/machu%20pichu.mp3",
        imageUrl: "splash_2.jpg"
      }
    ];

    let splash_musics = hardTracks.map(track => (
      <TrackIndexItem
        track={track}
        key={track.id}
        playbarState={this.props.playbarState}
        fetchTrack={this.props.fetchTrack}
        playTrack={this.props.playTrack}
      />
    ));

    let beforeSessionSplash = () => (
      <div>
        <div className="before_main_header">
          <div className="before_session_bar">
            <img src="sc_logo.png" alt="soundcloud" className="sc_logo" />
            <SessionButtonContainer />
          </div>
          <div className="before_session_main">
            <div className="front_title">Discover more with SoundClown Go+</div>
            <div className="front_semi_title">
              SoundClown Go+ lets you listen offline, add-freemem, with over 150
              <br />
              million tracks - and growsing.
            </div>
            <div className="buttons">
              <button
                className="free_trial_button"
                onClick={this.handleOpenModal}
              >
                Try it free for 30 days
              </button>
            </div>
          </div>
        </div>
        <div className="before_main_bottom">
          <div className="index-container">
            <br />
            <br />
            <br />
            <div className="index-button">
              <div className="inner-index-container">{splash_musics}</div>
            </div>
          </div>
        </div>
      </div>
    );
    let afterSessionSplash = () => <SessionButtonContainer />;
    return this.props.currentUser
      ? afterSessionSplash()
      : beforeSessionSplash();
  }
}
