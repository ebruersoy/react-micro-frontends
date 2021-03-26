import React from "react";

const Image = ({ src }) => {
  const alt = "Character Image";
  return <img src={src} alt={alt} height="100px" width="100px" />;
};

export default Image;
