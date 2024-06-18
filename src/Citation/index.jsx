import React from "react";
import imagePath from "../assets/images/citation.png"; // Adjust the path as necessary

const ResponsiveImage = () => {
  return (
    <div className="w-full overflow-hidden">
      <img
        src={imagePath}
        alt="Une équipe, une vision partagée"
        className="w-full h-auto"
      />
    </div>
  );
};

export default ResponsiveImage;
