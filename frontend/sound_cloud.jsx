//React
import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import { updateTrack } from "./actions/track_actions";

//Component
// import Root from './components/root';
import configureStore from "./store/store";

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.dispatch = store.dispatch;
  window.updateTrack = updateTrack;
  window.getState = store.getState;
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
