import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import { useApplicationData } from 'hooks/useApplicationData';

const TopNavigation = ({ topics, liked }) => {

  const { state } = useApplicationData()
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics}/>
      <FavBadge isFavPhotoExist={state.liked.length > 0}/>
    </div>
  )
}

export default TopNavigation;
