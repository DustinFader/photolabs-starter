import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [fullImage, setFullImage] = useState(null);

  const displayModal = (photo) => {
    setFullImage(photo);
  }

  const [liked, setLiked] = useState([]);

  const toggleLiked = (id) => {
    setLiked((currentFav) => {
      if (liked.includes(id)) {
        return liked.filter((favId) => favId !== id);
      } else {
        return [...currentFav, id];
      }})
  }

  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} displayModal={displayModal} liked={liked} toggleLiked={toggleLiked}/>
      {fullImage && <PhotoDetailsModal displayModal={displayModal} fullImage={fullImage} liked={liked} toggleLiked={toggleLiked}/>}
    </div>
  );
};

export default App;
