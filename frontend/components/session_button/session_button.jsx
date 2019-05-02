import React from "react";
import { Link } from "react-router-dom";

const SessionButton = ({ currentUser, logout, openModal }) => {
  const beforeSessionLinks = () => (
    <nav className="login-signup">
      <button onClick={() => openModal("login")}>Login</button>
      &nbsp;or&nbsp;
      <button onClick={() => openModal("signup")}>Signup</button>
    </nav>
  );
  const afterSessionLinks = () => (
    <hgroup className="header-group">
      <button onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? afterSessionLinks() : beforeSessionLinks();
};

export default SessionButton;
