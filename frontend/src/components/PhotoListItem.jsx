import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {

  return (
    <div className="photo-list__item">
      <PhotoFavButton photoId={props.id} liked={props.liked.includes(props.id)} toggleLiked={props.toggleLiked}/>
      <img className="photo-list__image" key={props.id} src={props.urls.regular} alt={'image'} onClick={() => props.displayModal()}></img>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.user.profile}></img>
        <div className="photo-list__user-info">
          <p>{props.user.name}</p>
          <p className="photo-list__user-location">{props.location.city}, {props.location.country}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
