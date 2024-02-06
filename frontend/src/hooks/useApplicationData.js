import { useEffect, useReducer } from "react";

const ACTIONS = {
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  TOGGLE_MODAL: "TOGGLE_MODAL",
  TOGGLE_LIKED: "TOGGLE_LIKED",
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.TOGGLE_LIKED:
      if (state.liked.includes(action.id)) {
        return {
          ...state,
          liked: state.liked.filter((favId) => favId !== action.id),
        };
      } else {
        return { ...state, liked: [...state.liked, action.id] };
      }
    case ACTIONS.TOGGLE_MODAL:
      return {
        ...state,
        imageDetails: action.details,
      };
    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photoData: action.payload
      }
    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topicData: action.payload
      }

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const initialState = {
  photoData: [],
  topicData: [],
  liked: [],
  imageDetails: null,
}

export function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, { ...initialState });

  const toggleLiked = (id) => {
    dispatch({ type: ACTIONS.TOGGLE_LIKED, id: id });
  };

  const displayModal = (imageDetails) => {
    dispatch({ type: ACTIONS.TOGGLE_MODAL, details: imageDetails });
  };

   useEffect(() => {
    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
    fetch("/api/topics")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }))
  }, []);

  return {
    imageDetails: state.imageDetails,
    liked: state.liked,
    photos: state.photoData,
    topics: state.topicData,
    toggleLiked,
    displayModal,
  };
}
