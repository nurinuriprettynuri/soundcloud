import React from "react";
import TrackIndexItem from "./track_index_item";

class TrackIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAllTracks();
  }

  render() {
    let tracks = this.props.tracks.map(track => (
      <TrackIndexItem track={track} key={track.id} />
    ));
    return (
      <div>
        <ul>{tracks}</ul>
      </div>
    );
  }
}

export default TrackIndex;
