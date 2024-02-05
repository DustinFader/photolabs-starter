import React, { useCallback } from 'react';
import { useApplicationData } from 'hooks/useApplicationData';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ photoId, liked }) {

  const { dispatch } = useApplicationData();
  return (
    <div className="photo-list__fav-icon" onClick={() => dispatch({ type: "TOGGLE_PHOTO", id: { photoId } })}>
      <div className="photo-list__fav-icon-svg">
          <FavIcon selected={liked}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;
