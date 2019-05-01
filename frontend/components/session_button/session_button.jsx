import React from 'react';
import { Link } from 'react-router-dom';

const SessionButton = ({ currentUser, logout }) => {
    const beforeSessionLinks = () => (
        <nav className="login-signup">
            <Link to="/login">Login</Link>
            &nbsp;or&nbsp;
            <Link to="/signup">Sign up</Link>
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
