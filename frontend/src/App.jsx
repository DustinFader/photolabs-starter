import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [fullImage, setFullImage] = useState(false);

  const displayModal = () => {
    setFullImage(bool => !bool)
  }

  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} displayModal={displayModal}/>
      {fullImage && <PhotoDetailsModal displayModal={displayModal}/>}
    </div>
  );
};

export default App;
