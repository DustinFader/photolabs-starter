import React, { useState } from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import { useApplicationData } from "./hooks/useApplicationData";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { red } from "@mui/material/colors";

const App = () => {
  // states and click functions
  const {
    imageDetails,
    liked,
    photos,
    topics,
    dark,
    clickedTopic,
    displayModal,
    toggleLiked,
    darkSwitch,
  } = useApplicationData();

  const darkTheme = createTheme({
    palette: {
      mode: dark,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className={`App ${dark}`}>
        <HomeRoute
          topics={topics}
          photos={photos}
          displayModal={displayModal}
          liked={liked}
          toggleLiked={toggleLiked}
          clickedTopic={clickedTopic}
          dark={dark}
          darkSwitch={darkSwitch}
        />
        {imageDetails && (
          <PhotoDetailsModal
            displayModal={displayModal}
            imageDetails={imageDetails}
            liked={liked}
            toggleLiked={toggleLiked}
            dark={dark}
          />
        )}
      </div>
    </ThemeProvider>
  );
};

export default App;
