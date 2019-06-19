import React from "react";
import { withRouter } from "react-router-dom";
import SessionButtonContainer from "../session_button/session_button_container";
import TrackIndexItem from "../tracks/track_index_item";

export default class Splash extends React.Component {
  componentDidMount() {
    this.props.fetchAllTracks();
  }

  constructor(props) {
    super(props);
    this.handleOpenModal = this.handleOpenModal.bind(this);
  }

  handleOpenModal() {
    this.props.openModal("signup");
  }

  render() {
    console.log(this.props.tracks);
    let splash_musics = this.props.tracks.map(track => (
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
            <p>Hear what’s trending for free in the SoundClown community</p>
            <br />
            <br />
            <br />
            <div>
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
