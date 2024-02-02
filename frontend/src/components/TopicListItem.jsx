import React from "react";

import "../styles/TopicListItem.scss";

const sampleDataForTopicListItem = {
  id: "1",
  slug: "topic-1",
  label: "Nature",
};

const TopicListItem = (props) => {
  return (
    <div key={props.id} className="topic-list__item">
      <span className="&:hover">{props.title}</span>
    </div>
  );
};

export default TopicListItem;
