import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import { useApplicationData } from './hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const {
    imageDetails,
    liked,
    photos,
    topics,
    clickedTopic,
    displayModal,
    toggleLiked,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} displayModal={displayModal} 
      liked={liked} toggleLiked={toggleLiked} clickedTopic={clickedTopic}/>
      {imageDetails && <PhotoDetailsModal displayModal={displayModal} imageDetails={imageDetails} liked={liked} toggleLiked={toggleLiked}/>}
    </div>
  );
};

export default App;
