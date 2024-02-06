import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  return (
    <div key={props.id} className="topic-list__item" onClick={() => props.clickedTopic(props.id)}>
      <span>{props.title}</span>
    </div>
  );
};

export default TopicListItem;
