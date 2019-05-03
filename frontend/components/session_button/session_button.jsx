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
    <hgroup className="header-group">
      <button onClick={logout} className="signinButton">
        Log out
      </button>
    </hgroup>
  );

  return currentUser ? afterSessionLinks() : beforeSessionLinks();
};

export default SessionButton;
