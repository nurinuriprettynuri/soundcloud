import React from "react";
import { Link } from "react-router-dom";
import NewTrackFormContainer from "../tracks/new_track_form_container";

const SessionButton = ({ currentUser, logout, openModal, login, history }) => {
  const demoUserLogIn = () => {
    login({ email: "aliglaser@gmail.com", password: "123456789" }).then(() =>
      history.push("/tracks")
    );
  };

  const beforeSessionLinks = () => (
    <div className="login-signup">
      <button onClick={() => openModal("login")} className="signinButton">
        Sign in
      </button>
      <button onClick={() => demoUserLogIn()} className="signinButton">
        Demo login
      </button>
      <button onClick={() => openModal("signup")} className="signupButton">
        Create account
      </button>
    </div>
  );
  const afterSessionLinks = () => (
    <div className="after_main_header">
      <div className="after_session_bar">
        <img src="sc_logo.png" alt="soundcloud" className="sc_logo" />
        <div className="rightNav">
          <Link to="#">
            <i class="fa fa-github" aria-hidden="true" />
          </Link>
          <Link
            to="/upload"
            component={NewTrackFormContainer}
            className="linkclass"
          >
            <p className="uploadbutton">Upload</p>
          </Link>
          <hgroup className="header-group">
            <i
              onClick={logout}
              className="fa fa-ellipsis-h logoutdot"
              aria-hidden="true"
            />
          </hgroup>
        </div>
      </div>
    </div>
  );

  return currentUser ? afterSessionLinks() : beforeSessionLinks();
};

export default SessionButton;
