import React from "react";
import { Link } from "react-router-dom";

const TrackIndexItem = props => {
  let tag;
  if (props.track.tag) {
    tag = <p className="track_index_genre">{props.track.tag.title}</p>;
  } else {
    tag = <></>;
  }

  const button =
    props.playbarState.isPlaying &&
    props.track.id === props.playbarState.currentTrack.id ? (
      <img
        src={window.pausebt}
        className="playButton"
        onClick={() => props.playTrack(props.track)}
      />
    ) : (
      <img
        src={window.playbuttonurl}
        className="playButton"
        onClick={() => {
          props.playTrack(props.track);
        }}
      />
    );

  return (
    <div className="track_index">
      <Link to={`/tracks/${props.track.id}`}>
        <img className="track_img" src={props.track.imageUrl} />
      </Link>
      {button}
      <div className="track_index_title">{props.track.title}</div>
      {tag}
    </div>
  );
};

export default TrackIndexItem;
