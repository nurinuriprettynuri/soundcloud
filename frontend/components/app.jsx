import React from "react";

import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import SplashContainer from "./splash/splash_container";
import TrackIndexContainer from "./tracks/track_index_container";
import TrackShowContainer from "./tracks/track_show_container";
import TrackFormContainer from "./tracks/new_track_form_container";
import { ProtectedRoute, AuthRoute } from "../util/route_util";
import TrackEditContainer from "../components/tracks/edit_track_form_container";
import PlaybarContainer from "../components/playbar/playbar_container";

import Modal from "./modal/modal";

const App = () => (
  <div className="main-div">
    <Modal />
    <Switch>
      <ProtectedRoute exact path="/upload" component={TrackFormContainer} />
      <ProtectedRoute
        exact
        path="/tracks/:trackId"
        component={TrackShowContainer}
      />
      <ProtectedRoute
        exact
        path="/tracks/:trackId/edit"
        component={TrackEditContainer}
      />
      <ProtectedRoute exact path="/tracks" component={TrackIndexContainer} />
      <ProtectedRoute
        exact
        path="/:userId/tracks"
        component={TrackIndexContainer}
      />
      <AuthRoute exact path="/" component={SplashContainer} />
      <Redirect from="/:sth" to="/" />
    </Switch>
    <PlaybarContainer />
  </div>
);

export default App;
