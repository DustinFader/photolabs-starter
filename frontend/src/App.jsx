import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import { useApplicationData } from './hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const {
    fullImage,
    liked,
    displayModal,
    toggleLiked
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} displayModal={displayModal} liked={liked} toggleLiked={toggleLiked}/>
      {fullImage && <PhotoDetailsModal displayModal={displayModal} fullImage={fullImage} liked={liked} toggleLiked={toggleLiked}/>}
    </div>
  );
};

export default App;
