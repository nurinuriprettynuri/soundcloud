import React from "react";

import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import Splash from "./splash/splash";
import Modal from "./modal/modal";

const App = () => (
  <div>
    <Modal />
    <Switch>
      <Route exact path="/" component={Splash} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
