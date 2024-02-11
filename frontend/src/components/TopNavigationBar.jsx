import React from "react";

import "../styles/TopNavigationBar.scss"
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";
import DarkButton from "./DarkButton";

const TopNavigation = ({ topics, liked, clickedTopic, darkSwitch, dark }) => {

  return (
    <div className="top-nav-bar">
      <span className={`top-nav-bar__logo ${dark}`}>PhotoLabs</span>
      <TopicList topics={topics} clickedTopic={clickedTopic} darkSwitch={darkSwitch} dark={dark}/>
      <DarkButton darkSwitch={darkSwitch}/>
      <FavBadge isFavPhotoExist={liked.length > 0}/>
    </div>
  )
}

export default TopNavigation;
