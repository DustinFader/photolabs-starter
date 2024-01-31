import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <div className="photo-list__item">
      <img className="photo-list__image" key={props.id} src={props.imageSource}></img>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.profile}></img>
        <p className="photo-list__user-info">{props.username}</p>
        <p className="photo-list__user-location">{props.location.city}, {props.location.country}</p>
      </div>
    </div>
  );
};

export default PhotoListItem;
