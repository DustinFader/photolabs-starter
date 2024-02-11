import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({ topics, clickedTopic, dark }) => {
  return (
    <div className={`top-nav-bar__topic-list ${dark}`}>
      {topics.map(topic => (
        <TopicListItem key={topic.id} {...topic} clickedTopic={clickedTopic}/>
      ))}
    </div>
  );
};

export default TopicList;
