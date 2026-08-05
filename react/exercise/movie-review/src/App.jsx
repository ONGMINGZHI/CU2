import React, { useState } from "react";

import Controls from "./Components/Controls";

import AddMovies from "./Components/AddMovies";

import MovieCard from "./Components/MovieCard";



function App() {

    const [movies, setMovies] = useState([

        {

            id: 1,

            title: "How To Train Your Dragon",

            rating: 5,

            watched: false,

            updatedAt: "just now",

            review: "",

        },

    ]);



    const handleToggleWatched = (id) => {

        setMovies(movies.map((m) => (m.id === id ? { ...m, watched: !m.watched } : m)));

    };



    const handleRatingChange = (id, newRating) => {

        setMovies(movies.map((m) => (m.id === id ? { ...m, rating: newRating } : m)));

    };



    return (

        <div className="container py-4" style={{ maxWidth: "900px" }}>

            <h2 className="mb-4 fw-normal">Movie Watchlist</h2>

            <Controls />

            <AddMovies onAddMovies={(newMovie) => setMovies([...movies, newMovie])} />

            <div className="mt-4">

                <h4 className="text-secondary fs-5 mb-3">Movies</h4>

                {movies.map((movie) => (

                    <MovieCard key={movie.id} movie={movie} onToggleWatched={handleToggleWatched} onRatingChange={handleRatingChange} />

                ))}

            </div>

        </div>

    );

}



export default App; 

