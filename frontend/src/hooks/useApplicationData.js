import React, { useState, useReducer } from "react";
import photos from '../mocks/photos'

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
