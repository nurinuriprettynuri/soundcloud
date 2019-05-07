import React from "react";

import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import SplashContainer from "./splash/splash_container";
import TrackIndexContainer from "./tracks/track_index_container";
import TrackShowContainer from "./tracks/track_show_container";
import TrackFormContainer from "./tracks/new_track_form_container";
import { ProtectedRoute } from "../util/route_util";

import Modal from "./modal/modal";

const App = () => (
  <div>
    <Modal />
    <Switch>
      <Route exact path="/" component={SplashContainer} />
      <ProtectedRoute exact path="/upload" component={TrackFormContainer} />
      <ProtectedRoute
        exact
        path="/tracks/:trackId"
        component={TrackShowContainer}
      />
      <ProtectedRoute exact path="/tracks" component={TrackIndexContainer} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
