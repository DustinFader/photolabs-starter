import React, { useEffect } from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  
  useEffect(() => {
    console.log(props.fullImage)
  }, [])

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={() => props.displayModal(null)}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <img src={props.fullImage} />
    </div>
  )
};

export default PhotoDetailsModal;
