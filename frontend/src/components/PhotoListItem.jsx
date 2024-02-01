import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  return (
    <div className="photo-list__item">
      <PhotoFavButton />
      <img className="photo-list__image" key={props.id} src={props.imageSource}></img>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.profile}></img>
        <div className="photo-list__user-info">
          <p>{props.username}</p>
          <p className="photo-list__user-location">{props.location.city}, {props.location.country}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
