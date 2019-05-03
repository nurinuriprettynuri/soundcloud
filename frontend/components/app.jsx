import React from "react";

import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import SplashContainer from "./splash/splash_container";
import Modal from "./modal/modal";

const App = () => (
  <div>
    <Modal />
    <Switch>
      <Route exact path="/" component={SplashContainer} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
