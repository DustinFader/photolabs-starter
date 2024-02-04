import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = ({ topics, photos, displayModal, liked, toggleLiked }) => {

  return (
    <div className="home-route">
      <TopNavigation topics={topics} liked={liked}/>
      <PhotoList photos={photos} liked={liked} toggleLiked={toggleLiked} displayModal={displayModal}/>
    </div>
  );
};

export default HomeRoute;
