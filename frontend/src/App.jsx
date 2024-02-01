import React from 'react';
import PhotoFavButton from "./components/PhotoFavButton"

import PhotoListItem from './components/PhotoListItem';
import './App.scss';

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

const photos = new Array(3).fill(null).map((_, index) =>
  <>
    <PhotoFavButton />
    <PhotoListItem key={index} {...sampleDataForPhotoListItem}/>
  </>
);

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App photo-list">
      {photos}
    </div>
  );
};

export default App;
