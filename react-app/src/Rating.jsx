import React, { useState } from "react";

const Rating = ({ onRate }) => {
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
    onRate(rate);
  };

  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`star ${rating >= star ? "selected" : ""}`}
          onClick={() => handleRating(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Rating;
