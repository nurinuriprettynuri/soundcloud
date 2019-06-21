import React from "react";

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
        <div>{props.track.title}</div>
      </div>
    </div>
  );
};

export default RelatedTrackItem;
