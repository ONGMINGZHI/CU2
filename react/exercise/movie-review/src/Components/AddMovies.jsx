import React, { useState } from "react";
import Rating from "./Rating";

export default function AddMovies({ onAddMovies }) {
  const [title, setTitle] = useState("");
  const [initialRating, setInitialRating] = useState(3);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newMovie = {
      id: Date.now(),
      title: title.trim(),
      rating: initialRating,
      watched: false,
      updatedAt: "just now",
      review: "",
    };

    if (onAddMovies) {
      onAddMovies(newMovie);
    }

    // Reset Form
    setTitle("");
    setInitialRating(3);
  };

  return (
    <div className="card p-4 shadow-sm border rounded bg-white">
      <h5 className="text-secondary mb-3 fs-6 fw-bold">Add Movies</h5>

      <form onSubmit={handleSubmit} className="row g-3 align-items-center">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control form-control-lg bg-light fs-6"
            placeholder="Title *"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="col-md-4 d-flex flex-column justify-content-center">
          <label className="form-label text-muted small mb-1">
            Initial Rating: <strong>{initialRating} / 5</strong>
          </label>

          <Rating
            rating={initialRating}
            onRatingChange={(newRating) => setInitialRating(newRating)}
          />
        </div>

        <div className="col-md-2">
          <button type="submit" className="btn btn-primary w-100 fw-bold py-2 text-uppercase">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}