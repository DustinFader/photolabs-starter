import React, { useCallback } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ photoId, liked, toggle }) {
  return (
    <div className="photo-list__fav-icon" onClick={() => toggle({ type: "TOGGLE_PHOTO", id: { photoId } })}>
      <div className="photo-list__fav-icon-svg">
          <FavIcon selected={liked}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;
