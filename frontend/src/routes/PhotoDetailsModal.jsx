import React, { useEffect, useCallback } from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = (props) => {

  useEffect(() => {
    console.log(props);
  }, [props])
  console.log(props.toggleLiked)
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={() => props.displayModal(null)}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__images">
        <img className='photo-details-modal__image' src={props.imageDetails.urls.full} />
        <div className="photo-details-modal__photographer-details">
          <img className="photo-details-modal__photographer-profile" src={props.imageDetails.user.profile}></img>
          <div className="photo-details-modal__photographer-info">
            <p>{props.imageDetails.user.name}</p>
            <p className="photo-details-modal__photographer-location">{props.imageDetails.location.city}, {props.imageDetails.location.country}</p>
          </div>
        </div>
        <h4 className='photo-details-modal__header'>Similar bombastic photos</h4>
        <PhotoList photos={props.imageDetails.similar_photos} liked={props.liked} toggleLiked={props.toggleLiked} />
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
