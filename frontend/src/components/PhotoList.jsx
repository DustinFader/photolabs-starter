import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ photos, liked, toggle, displayModal }) => {
  
  return (
    <ul className="photo-list">
      {Array.isArray(photos) && photos.map(photo => (
        <PhotoListItem key={photo.id} {...photo} liked={liked} displayModal={displayModal} toggle={toggle}/>
      ))}
      {!Array.isArray(photos) && Object.values(photos).map(photo => (
        <PhotoListItem key={photo.id} {...photo} liked={liked} displayModal={displayModal}/>
      ))}
    </ul>
  );
};

export default PhotoList;
