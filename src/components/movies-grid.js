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

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredMovies = movies.filter(movie => 
        movie.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
    return (
        <div>
            <input
                className='search-input'
                type="text"
                placeholder='Search Movies...'
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <div className='movies-grid'>
            {
                filteredMovies.map(movie => (
                    <MovieCard key={movie.id} movie={movie}></MovieCard>
                ))
            }
            </div>
        </div>
    )
}