import { useEffect, useReducer } from "react";
import axios from "axios";

const ACTIONS = {
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  TOGGLE_MODAL: "TOGGLE_MODAL",
  TOGGLE_LIKED: "TOGGLE_LIKED",
  GET_PHOTOS_BY_TOPICS: "GET_PHOTOS_BY_TOPICS"
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
    case ACTIONS.GET_PHOTOS_BY_TOPICS:
      return {
        ...state,
        photoData: action.payload,
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

  // sets whether the image is liked by the user or not
  const toggleLiked = (id) => {
    dispatch({ type: ACTIONS.TOGGLE_LIKED, id: id });
  };

  const displayModal = (imageDetails) => {
    dispatch({ type: ACTIONS.TOGGLE_MODAL, details: imageDetails });
  };
    // sets the home page of photos
    useEffect(() => {
      axios.get("/api/photos")
        .then((response) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: response.data }))
        .catch((error) => { console.error('Error:', error)});

      // sets the catagories on the site
      axios.get("/api/topics")
        .then((response) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: response.data }))
        .catch((error) => { console.error('Error:', error)});
      }, []);
      
      // changes shown images by catagory clicked
      const clickedTopic = (topicId) => {
        axios.get(`/api/topics/photos/${topicId}`)
        .then((response) => dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: response.data }))
        .catch((error) => { console.error('Error:', error)});
      };

  return {
    imageDetails: state.imageDetails,
    liked: state.liked,
    photos: state.photoData,
    topics: state.topicData,
    clickedTopic,
    toggleLiked,
    displayModal,
  };
}
