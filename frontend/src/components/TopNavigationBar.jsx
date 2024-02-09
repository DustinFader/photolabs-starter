import React from "react";

import "../styles/TopNavigationBar.scss"
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

const TopNavigation = ({ topics, liked, clickedTopic }) => {

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} clickedTopic={clickedTopic}/>
      <FavBadge isFavPhotoExist={liked.length > 0}/>
    </div>
  )
}

export default TopNavigation;
