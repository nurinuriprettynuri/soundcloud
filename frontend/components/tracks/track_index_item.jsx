import React from "react";
import { Link } from "react-router-dom";

const TrackIndexItem = props => (
  <Link to={`/tracks/${props.track.id}`}>
    <img className="track_img" src={props.track.imageUrl} />
  </Link>
);

export default TrackIndexItem;
