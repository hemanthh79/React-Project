// MovieCard.jsx
import React from 'react';
import { useMovieContext } from '../contexts/MovieContext';
import '../css/MovieCard.css'; // Optional

function MovieCard({ movie }) {
  const { addToFavorites, removeFromFavorites, isFavorite } = useMovieContext();
  const fav = isFavorite(movie.imdbID);

  const handleClick = () => {
    fav ? removeFromFavorites(movie.imdbID) : addToFavorites(movie);
  };

  return (
    <div className="movie-card">
      <img src={movie.Poster} alt={movie.Title} />
      <div className="movie-info">
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
        <button onClick={handleClick}>
          {fav ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
