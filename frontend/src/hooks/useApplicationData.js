import React, { useState, useReducer } from "react";
import photos from '../mocks/photos'
// export const useApplicationData = () => {
//   const [fullImage, setFullImage] = useState(null);
//   const [liked, setLiked] = useState([]);

//   const displayModal = (photo) => {
//     setFullImage(photo);
//   };

//   const toggleLiked = (id) => {
//     setLiked((currentFav) => {
//       if (currentFav.includes(id)) {
//         return currentFav.filter((favId) => favId !== id);
//       } else {
//         return [...currentFav, id];
//       }
//     });
//   };

//   return {
//     fullImage,
//     liked,
//     displayModal,
//     toggleLiked,
//   };
// };

function reducer(state, action) {
  switch (action.type) {
    case TOGGLE_LIKED:
      if (state.liked.includes(action.id)) {
        return {
          ...state,
          liked: state.liked.filter((favId) => favId !== action.id),
        };
      } else {
        return { ...state, liked: [...state.liked, action.id] };
      }

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

export function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, { photos:photos, liked: [], fullImage: null});

  const toggle = (id) => {
    dispatch({ type: TOGGLE_LIKED, id: id})
  }

  const [fullImage, setFullImage] = useState(null);

  const displayModal = (photo) => {
    setFullImage(photo);
  };

  return {
    toggle,
    displayModal,
    setFullImage,
    fullImage,
    state
  }
}
