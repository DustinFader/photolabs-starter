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
    clickedTopic,
    displayModal,
    toggleLiked,
  } = useApplicationData();

  const [dark, setDark] = useState("light");

  const darkSwitch = () => {
    setDark((prev) => (prev === "light" ? "dark" : "light"));
  };

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
