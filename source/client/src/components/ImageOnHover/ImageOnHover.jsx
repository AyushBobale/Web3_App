import "./ImageOnHover.css";

import React, { useState } from "react";

export const ImageOnHover = ({ image, text, height }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="text-with-image">
      <div
        className="text-holder"
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        {text}
      </div>
      <img
        src={image}
        style={{
          height: height || "400px",
          opacity: isHovered ? "1" : 0,
          zIndex: isHovered ? "10" : "-10",
        }}
        alt="Image on Hover"
        className="image"
      />
    </div>
  );
};
