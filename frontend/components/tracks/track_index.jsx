import React from "react";
import TrackIndexItem from "./track_index_item";
import SessionButtonContainer from "../session_button/session_button_container";

class TrackIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAllTracks();
  }

  render() {
    let tracks = this.props.tracks.map(track => (
      <TrackIndexItem track={track} key={track.id} />
    ));
    return (
      <>
        <SessionButtonContainer />
        <div className="index-container">
          <div className="index-button">
            <div>Overview</div>
          </div>
          <div className="inner-index-container">{tracks}</div>
        </div>
      </>
    );
  }
}

export default TrackIndex;
