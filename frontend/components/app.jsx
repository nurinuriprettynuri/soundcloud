import React from "react";
import SessionButtonContainer from "./session_button/session_button_container";
import SignUpFormContainer from "./session_form/signup_form_container";
import LogInFormContainer from "./session_form/login_form_container";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import Modal from "./modal/modal";

const App = () => (
  <div>
    <Modal />
    <header>
      <h1>Sound Cloud</h1>
      <SessionButtonContainer />
    </header>
    <Switch>
      <Route exact path="/" />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
