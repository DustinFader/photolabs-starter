import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = ({ topics, photos }) => {
  
  const [liked, setLiked] = useState([]);

  const toggleLiked = (id) => {
    setLiked((currentFav) => {
      if (liked.includes(id)) {
        return liked.filter((favId) => favId !== id);
      } else {
        return [...currentFav, id];
      }})
  }

  return (
    <div className="home-route">
      <TopNavigation topics={topics}/>
      <PhotoList photos={photos} liked={liked} setLiked={setLiked} toggleLiked={toggleLiked}/>
    </div>
  );
};

export default HomeRoute;
