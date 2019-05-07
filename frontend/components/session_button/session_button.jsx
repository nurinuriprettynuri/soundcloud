import React from "react";
// import { Link } from "react-router-dom";

const SessionButton = ({ currentUser, logout, openModal, login }) => {
  const beforeSessionLinks = () => (
    <div className="login-signup">
      <button onClick={() => openModal("login")} className="signinButton">
        Sign in
      </button>
      <button onClick={() => login()} className="signinButton">
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
        <hgroup className="header-group">
          <button onClick={logout} className="signinButton">
            Log out
          </button>
        </hgroup>
      </div>
    </div>
  );

  return currentUser ? afterSessionLinks() : beforeSessionLinks();
};

export default SessionButton;
