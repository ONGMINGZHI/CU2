import React from "react";

export default function Rating({ rating = 0, onRatingChange, readOnly = false }) {
  return (
    <div className="d-inline-flex gap-1 text-warning">
      {[1, 2, 3, 4, 5].map((star) => (
        <i
          key={star}
          onClick={() =>
            !readOnly && onRatingChange && onRatingChange(star === rating ? 0 : star)
          }
          className={`bi ${
            star <= rating ? "bi-star-fill text-warning" : "bi-star text-secondary opacity-50"
          }`}
          style={{
            cursor: readOnly ? "default" : "pointer",
            fontSize: "1.25rem",
            transition: "color 0.15s ease-in-out",
          }}
        />
      ))}
    </div>
  );
}