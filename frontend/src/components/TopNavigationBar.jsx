import React from "react";

import "../styles/TopNavigationBar.scss"
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";
import DarkMode from "./DarkButton";

const TopNavigation = ({ topics, liked, clickedTopic, dark, darkSwitch}) => {

  return (
    <div className={`top-nav-bar ${dark}`}>
      <span className={`top-nav-bar__logo ${dark}`}>PhotoLabs</span>
      <TopicList topics={topics} clickedTopic={clickedTopic} dark={dark} darkSwitch={darkSwitch}/>
      <DarkMode darkSwitch={darkSwitch} dark={dark}/>
      <FavBadge isFavPhotoExist={liked.length > 0}/>
    </div>
  )
}

export default TopNavigation;
