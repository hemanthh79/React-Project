// MovieCard.jsx
import React from "react";
import { useMovieContext } from "../contexts/MovieContext";
import "../css/MovieCard.css";
import { useNavigate } from "react-router-dom";

function MovieCard({ movie }) {
  const Navigate = useNavigate();

  const { addToFavorites, removeFromFavorites, isFavorite } = useMovieContext();
  const fav = isFavorite(movie.imdbID);

  const handleClick = () => {
    fav ? removeFromFavorites(movie.imdbID) : addToFavorites(movie);
  };

  const handleMovieClick = (movieId) => {
    Navigate(`/movie/${movieId}`);
  };

  return (
    <div className="movie-card">
      <img
        src={movie.Poster}
        alt={movie.Title}
        onClick={() => handleMovieClick(movie.imdbID)}
        className="movie-poster"
      />
      <div className="movie-info">
        <h3
          onClick={() => handleMovieClick(movie.imdbID)}
          style={{ cursor: "pointer" }}
        >
          {movie.Title}
        </h3>
        <p>{movie.Year}</p>
        <button onClick={handleClick}>
          {fav ? "Remove from Favorites" : "Add to Favorites"}
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
