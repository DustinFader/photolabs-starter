import { useReducer } from "react";
import photos from "../mocks/photos";

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_LIKED":
      if (state.liked.includes(action.id)) {
        return {
          ...state,
          liked: state.liked.filter((favId) => favId !== action.id),
        };
      } else {
        return { ...state, liked: [...state.liked, action.id] };
      }
    case "TOGGLE_MODAL":
      return {
        ...state,
        imageDetails: action.details,
      };

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

export function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, {
    photos: photos,
    liked: [],
    imageDetails: null,
  });

  const toggleLiked = (id) => {
    dispatch({ type: "TOGGLE_LIKED", id: id });
  };

  const displayModal = (imageDetails) => {
    dispatch({ type: "TOGGLE_MODAL", details: imageDetails });
  };

  return {
    imageDetails: state.imageDetails,
    liked: state.liked,
    photos: state.photos,
    toggleLiked,
    displayModal,
  };
}
