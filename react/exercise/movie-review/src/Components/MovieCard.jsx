import React, { useState } from "react";
import Rating from "./Rating";

function MovieCard({ movie, onToggleWatched, onRatingChange }) {
    const [showReviewInput, setShowReviewInput] = useState(false);
    const [reviewText, setReviewText] = useState(movie.review || "");

    return (
        <div className="card shadow-sm border rounded mb-3 p-3 bg-white">
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                <div className="d-flex align-items-center gap-3">
                    <input type="checkbox" className="form-check-input mt-0" style={{ width: "20px", height: "20px", cursor: "pointer" }} checked={movie.watched} onChange={() => onToggleWatched(movie.id)} />
                    <div>
                        <h5 className={`m-0 fs-5 ${movie.watched ? "text-decoration-line-through text-muted" : "fw-semibold"}`}>{movie.title}</h5>
                        <small className="text-muted" style={{ fontSize: "0.75rem" }}>
                            Updated: {movie.updatedAt || "just now"}
                        </small>
                    </div>
                </div>

                <div className="d-flex align-items-center gap-3">
                    <Rating rating={movie.rating} onRatingChange={(newRating) => onRatingChange(movie.id, newRating)} />

                    <button className="btn btn-outline-primary btn-sm d-flex align-items-center gap-1 text-uppercase fw-semibold px-3" onClick={() => setShowReviewInput(!showReviewInput)}>
                        <span style={{ fontSize: "0.7rem" }}>{showReviewInput ? "▲" : "▼"}</span>
                        {movie.review ? "Edit Review" : "Add Review"}
                    </button>
                </div>
            </div>

            {showReviewInput && (
                <div className="mt-3 pt-3 border-top">
                    <textarea className="form-control mb-2" rows="2" placeholder="Write your review here..." value={reviewText} onChange={(e) => setReviewText(e.target.value)} />
                    <button
                        className="btn btn-sm btn-primary"
                        onClick={() => {
                            setShowReviewInput(false);
                        }}
                    >
                        Save Review
                    </button>
                </div>
            )}
        </div>
    );
}

export default MovieCard;
