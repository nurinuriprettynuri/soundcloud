import React from "react";
import { Link } from "react-router-dom";

const RelatedTrackItem = props => {
  return (
    <div className="related-index-item">
      <div className="rel-img">
        <img src={props.track.imageUrl} />
      </div>
      <div className="related-index-des">
        <div className="related-index-username">
          {props.track.artist.username}
        </div>
        <Link to={`/tracks/${props.track.id}`}>
          <div>{props.track.title}</div>
        </Link>
      </div>
    </div>
  );
};

export default RelatedTrackItem;
