import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  const liked = props.liked;
  const handleLikeClick = props.handleLikeClick;

  return (
    <div className="photo-list__fav-icon" onClick={handleLikeClick}>
      <div className="photo-list__fav-icon-svg">
          <FavIcon selected={liked}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;
