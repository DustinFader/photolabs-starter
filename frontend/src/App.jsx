import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import { useApplicationData } from './hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const {
    fullImage,
    state,
    displayModal,
    toggle
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute topics={topics} photos={state.photos} displayModal={displayModal} liked={state.liked} toggle={toggle}/>
      {fullImage && <PhotoDetailsModal displayModal={displayModal} fullImage={fullImage} liked={state.liked}/>}
    </div>
  );
};

export default App;
