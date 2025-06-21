import React, { useState, useEffect } from 'react';
import '../styles.css';
import MovieCard from './movie-card';

export default function MoviesGrid() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch("movies.json")
        .then(response => response.json())
        .then(data => setMovies(data));
    }, []);

    const [searchTerm, setSearchTerm] = useState("");
    return (
        <div>
            <input
                className='search-input'
                type="text"
                placeholder='Search Movies...'
            />
            <div className='movies-grid'>
            {
                movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie}></MovieCard>
                ))
            }
            </div>
        </div>
    )
}