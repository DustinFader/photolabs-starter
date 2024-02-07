import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ photos, liked, toggleLiked, displayModal }) => {
  return (
    <ul className="photo-list">
      {Array.isArray(photos) && photos.map(photo => (
        <PhotoListItem key={photo.id} {...photo} liked={liked} displayModal={displayModal} toggleLiked={toggleLiked}/>
      ))}
      {/* Used by the modal where the simular_photos get passed in. */}
      {!Array.isArray(photos) && Object.values(photos).map(photo => (
        <PhotoListItem key={photo.id} {...photo} liked={liked} displayModal={displayModal} toggleLiked={toggleLiked}/>
      ))}
    </ul>
  );
};

export default PhotoList;
