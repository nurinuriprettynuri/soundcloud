import React from "react";
import SessionButtonContainer from "../session_button/session_button_container";
class TrackShow extends React.Component {
  componentDidMount() {
    this.props.fetchTrack();
  }

  render() {
    return (
      <>
        <SessionButtonContainer />
        <img src={this.props.track.imageUrl} />
      </>
    );
  }
}

export default TrackShow;
