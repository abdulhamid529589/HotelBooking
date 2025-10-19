import React from "react";
import { assets } from "../assets/assets";

const StarRating = ({ rating = 0, size = 18 }) => {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }, (_, index) => {
        const isFilled = rating >= index + 1;
        return (
          <img
            key={index}
            src={isFilled ? assets.starIconFilled : assets.starIconOutlined}
            alt={isFilled ? "filled star" : "outlined star"}
            className="transition-transform duration-200 ease-in-out hover:scale-110"
            style={{ width: size, height: size }}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
