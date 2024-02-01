import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const [button, setButton] = useState(false);

  const handleClick = () => {
    setButton(preBool => !preBool);
  }

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
          <FavIcon selected={button}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;
