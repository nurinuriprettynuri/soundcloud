import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default class Playbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let playpause = () => {
      if (this.props.isPlaying === false) {
        return <i className="fa fa-play" aria-hidden="true" />;
      } else {
        return <i className="fa fa-pause" aria-hidden="true" />;
      }
    };

    let playTrack = this.props.currentTrack
      ? () => this.props.playTrack(this.props.currentTrack)
      : () => {};
    return (
      <div className="playbar-container">
        <div id="playbar">
          <i
            className="fa fa-step-backward"
            aria-hidden="true"
            onClick={playTrack}
          />
          {playpause()}
          <i className="fa fa-step-forward" aria-hidden="true" />
          <i className="fa fa-random" aria-hidden="true" />
          <ReactAudioPlayer
            src="https://s3-us-west-1.amazonaws.com/soundcloud-dev/Feel+Good+Inc..mp3"
            controls
          />
        </div>
      </div>
    );
  }
}
