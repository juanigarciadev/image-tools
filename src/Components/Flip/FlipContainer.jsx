import React, { useEffect, useRef, useState } from "react";
import Flip from "./Flip";

const FlipContainer = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [editedImage, setEditedImage] = useState(null);
  const editedRef = useRef(null);
  useEffect(() => {
    document.title = "Flip an image // Image tools";
  }, []);
  return (
    <Flip
      selectedImage={selectedImage}
      setSelectedImage={setSelectedImage}
      editedImage={editedImage}
      setEditedImage={setEditedImage}
      editedRef={editedRef}
    />
  );
};

export default FlipContainer;
