import { useState } from "react";

export const useApplicationData = () => {
  const [fullImage, setFullImage] = useState(null);
  const [liked, setLiked] = useState([]);

  const displayModal = (photo) => {
    setFullImage(photo);
  };

  const toggleLiked = (id) => {
    setLiked((currentFav) => {
      if (liked.includes(id)) {
        return liked.filter((favId) => favId !== id);
      } else {
        return [...currentFav, id];
      }
    });
  };

  return {
    fullImage,
    liked,
    displayModal,
    toggleLiked
  }
}
