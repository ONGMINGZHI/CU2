import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ movies = [], onToggleWatched, onRatingChange, onDeleteMovie }) {
    return (
        <div className="mt-4">
            <h4 className="text-secondary fs-5 mb-3 fw-bold">Movies</h4>

            {movies.length === 0 ? (
                <div className="card p-4 text-center text-muted bg-light border border-dashed rounded">
                    <p className="m-0">No movies found. Try adding a new movie or adjusting your filters!</p>
                </div>
            ) : (
                <div className="d-flex flex-column gap-3">
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} onToggleWatched={onToggleWatched} onRatingChange={onRatingChange} onDeleteMovie={onDeleteMovie} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default MovieList;
