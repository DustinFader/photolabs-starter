import React from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton({ photoId, liked, toggleLiked }) {
  
  return (
    <div className="photo-list__fav-icon" onClick={() => toggleLiked(photoId)}>
      <div className="photo-list__fav-icon-svg">
          <FavIcon selected={liked}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;
