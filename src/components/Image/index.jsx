import React from "react";

const Image = ({ src }) => {
  return (
    <div>
      <img src={src} alt="Marvel characters" width="100%" />
    </div>
  );
};

export default Image;
