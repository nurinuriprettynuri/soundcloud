import React from "react";
import { Link } from "react-router-dom";

const TrackIndexItem = props => {
  let tag;
  if (props.track.tag) {
    tag = <p className="track_index_genre">{props.track.tag.title}</p>;
  } else {
    tag = <></>;
  }
  return (
    <div className="track_index">
      <Link to={`/tracks/${props.track.id}`}>
        <img className="track_img" src={props.track.imageUrl} />
      </Link>
      <div className="track_index_title">{props.track.title}</div>
      {tag}
    </div>
  );
};

export default TrackIndexItem;
