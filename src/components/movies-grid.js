import React, { useState } from 'react';
import '../styles.css';
import MovieCard from './movie-card';

export default function MoviesGrid({movies, watchList, toggleWatchList}) {
    const [searchTerm, setSearchTerm] = useState("");
    const [genere, setGenere] = useState("All Generes");
    const [rating, setRating] = useState("All");

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };
    const handleGenreChange = (e) => {
        setGenere(e.target.value);
    };
    const handleRatingChange = (e) => {
        setRating(e.target.value);
    };

    const matchesGenre = (movie, genre) => {
        return 'All Genres' === genre || movie.genre.toLocaleLowerCase() === genre.toLocaleLowerCase();
    };

    const matchesRating = (movie, rating) => {
        switch(rating) {
            case 'All':
                return true;
            case 'Good':
                return movie.rating >= 8;
            case 'Ok':
                return movie.rating >= 5 && movie.rating < 8;
            case 'Bad':
                return movie.rating < 5;
            default:
                return false;
        }
    };

    const matchesSearchTerm = (movie, searchTerm) => {
        return movie.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    };

    const filteredMovies = movies.filter(movie => 
        matchesGenre(movie, genere)
        && matchesRating(movie, rating)
        && matchesSearchTerm(movie, searchTerm)
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
                    <select className='filter-dropdown' value={genere} onChange={handleGenreChange}>
                        <option>All Genres</option>
                        <option>Action</option>
                        <option>Drama</option>
                        <option>Fantasy</option>
                        <option>Horror</option>
                    </select>
                </div>
                <div className='filter-slot'>
                    <label>Rating</label>
                    <select className='filter-dropdown' value={rating} onChange={handleRatingChange}>
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
                    <MovieCard
                      key={movie.id}
                      movie={movie}
                      toggleWatchList={toggleWatchList}
                      isWatchListed={watchList.includes(movie.id)}></MovieCard>
                ))
            }
            </div>
        </div>
    )
}