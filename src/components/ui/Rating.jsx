import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Rating = ({ rating }) => {
  return (
    <div className="book__ratings">
      {new Array(Math.floor(rating)).fill(0).map((_, index) => (
        <FontAwesomeIcon
          icon="star"
          className="book__ratings--icon"
          key={index}
        />
      ))}
      {!Number.isInteger(rating) && (
        <FontAwesomeIcon icon="star-half-alt" className="book__ratings--icon" />
      )}
    </div>
  );
};

export default Rating;
