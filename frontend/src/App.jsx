import React, { useState } from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import { useApplicationData } from "./hooks/useApplicationData";

const App = () => {

  // states and click functions
  const {
    imageDetails,
    liked,
    photos,
    topics,
    clickedTopic,
    displayModal,
    toggleLiked,
  } = useApplicationData();

  const [dark, setDark] = useState("")

  const darkSwitch = () => {
    setDark(prev => prev === "" ? "dark" : "")
  }

  return (
    <div className={`App ${dark}`}>
      <HomeRoute topics={topics} photos={photos} displayModal={displayModal} 
      liked={liked} toggleLiked={toggleLiked} clickedTopic={clickedTopic} dark={dark} darkSwitch={darkSwitch}/>
      {imageDetails && <PhotoDetailsModal displayModal={displayModal} imageDetails={imageDetails} liked={liked} toggleLiked={toggleLiked} dark={dark}/>}
    </div>
  );
};

export default App;
