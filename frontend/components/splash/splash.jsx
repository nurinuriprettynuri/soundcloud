import React from "react";
import { withRouter } from "react-router-dom";
import SessionButtonContainer from "../session_button/session_button_container";

export default class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let beforeSessionSplash = () => (
      <div className="before_main_header">
        <div className="before_session_bar">
          <img src="sc_logo.png" alt="soundcloud" className="sc_logo" />
          <SessionButtonContainer />
        </div>
      </div>
    );
    let afterSessionSplash = () => (
      <div className="after_main_header">
        <div className="after_session_bar">
          <img src="sc_logo.png" alt="soundcloud" className="sc_logo" />
          <SessionButtonContainer />
        </div>
      </div>
    );

    return this.props.currentUser
      ? afterSessionSplash()
      : beforeSessionSplash();
  }
}
