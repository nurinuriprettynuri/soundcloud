import React from "react";
import { withRouter } from "react-router-dom";
import SessionButtonContainer from "../session_button/session_button_container";

export default class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main_header">
        <div className="session_bar">
          <img src="sc_logo.png" alt="soundcloud" className="sc_logo" />
          <SessionButtonContainer />
        </div>
      </div>
    );
  }
}
