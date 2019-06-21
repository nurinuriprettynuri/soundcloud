import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default class Playbar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let audio = document.getElementsByClassName("react-audio-player")[0];
    audio.addEventListener("timeupdate", this.updateProgress, false);
  }

  updateProgress() {
    var progress = document.getElementById("progress");
    var currTime = document.getElementById("song-current-time");
    var value = 0;
    let audio = document.getElementsByClassName("react-audio-player")[0];
    if (audio.currentTime > 0) {
      value = Math.floor((100 / audio.duration) * audio.currentTime);
      let minutes = Math.floor(audio.currentTime / 60);
      let seconds = Math.floor(audio.currentTime % 60);
      currTime.innerText = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    }
    progress.style.width = value + "%";
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
          <div className="progress-div">
            <div id="song-current-time">0:00</div>
            <div id="progressBar">
              <span id="progress" />
            </div>
            <div id="song-duration">0:00</div>
          </div>
        </div>
      </div>
    );
  }
}
