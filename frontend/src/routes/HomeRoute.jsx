import React from "react";

import "../styles/HomeRoute.scss";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

const HomeRoute = (props) => {
  
  return (
    <div className="home-route">
      <TopNavigation topics={props.topics} liked={props.liked} clickedTopic={props.clickedTopic} darkSwitch={props.darkSwitch} dark={props.dark}/>
      <PhotoList photos={props.photos} liked={props.liked} displayModal={props.displayModal} toggleLiked={props.toggleLiked}/>
    </div>
  );
};

export default HomeRoute;
