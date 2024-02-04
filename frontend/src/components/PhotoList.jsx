import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ photos, liked, toggleLiked, displayModal, similar_photos }) => {
  return (
    <ul className="photo-list">
      {Array.isArray(photos) && photos.map(photo => (
        <PhotoListItem key={photo.id} {...photo} liked={liked} toggleLiked={toggleLiked} displayModal={displayModal}/>
      ))}
      {similar_photos && Object.values(similar_photos).map(photo => (
        <PhotoListItem key={photo.id} {...photo} liked={liked} toggleLiked={toggleLiked} displayModal={displayModal}/>
      ))}
    </ul>
  );
};

export default PhotoList;
