import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ photos, liked, toggleLiked, toggleImage }) => {
  return (
    <ul className="photo-list">
      {photos.map(photo => (
        <PhotoListItem key={photo.id} {...photo} liked={liked} toggleLiked={toggleLiked} toggleImage={toggleImage}/>
      ))}
    </ul>
  );
};

export default PhotoList;
