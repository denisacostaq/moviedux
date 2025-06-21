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
            <div className='filter-bar'>
                <div className='filter-slot'>
                    <label>Genere</label>
                    <select className='filter-dropdown'>
                        <option>All Genres</option>
                        <option>Action</option>
                        <option>Drama</option>
                        <option>Fantasy</option>
                        <option>Horror</option>
                    </select>
                </div>
                <div className='filter-slot'>
                    <label>Rating</label>
                    <select className='filter-dropdown'>
                        <option>All</option>
                        <option>Good</option>
                        <option>Ok</option>
                        <option>Bad</option>
                    </select>
                </div>
            </div>
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