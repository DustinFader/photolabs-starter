import React, { useEffect } from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = (props) => {

  useEffect(() => {
    console.log(props.fullImage);
    console.log(props.fullImage.similar_photos);
  }, [])

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={() => props.displayModal(null)}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__images">
        <img className='photo-details-modal__image' src={props.fullImage.urls.full} />
        <div className="photo-details-modal__photographer-details">
          <img className="photo-details-modal__photographer-profile" src={props.fullImage.user.profile}></img>
          <div className="photo-details-modal__photographer-info">
            <p>{props.fullImage.user.name}</p>
            <p className="photo-details-modal__photographer-location">{props.fullImage.location.city}, {props.fullImage.location.country}</p>
          </div>
        </div>
        <h4 className='photo-details-modal__header'>Similar bombastic photos</h4>
        <PhotoList photos={props.fullImage.similar_photos} liked={props.fullImage.liked} toggleLiked={props.fullImage.toggleLiked} />
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
