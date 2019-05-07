import React from "react";
import { withRouter } from "react-router-dom";
import SessionButtonContainer from "../session_button/session_button_container";

export default class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.handleOpenModal = this.handleOpenModal.bind(this);
  }

  handleOpenModal() {
    this.props.openModal("signup");
  }

  render() {
    let beforeSessionSplash = () => (
      <div className="before_main_header">
        <div className="before_session_bar">
          <img src="sc_logo.png" alt="soundcloud" className="sc_logo" />
          <SessionButtonContainer />
        </div>
        <div className="before_session_main">
          <div className="front_title">Discover more with SoundCloud Go+</div>
          <div className="front_semi_title">
            SoundCloud Go+ lets you listen offline, add-freemem, with over 150
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
    );
    let afterSessionSplash = () => <SessionButtonContainer />;
    return this.props.currentUser
      ? afterSessionSplash()
      : beforeSessionSplash();
  }
}
