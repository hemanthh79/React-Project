import { useMovieContext } from "../contexts/MovieContext";
import "../css/MovieCard.css";
import { useNavigate } from "react-router-dom";

function MovieCard({ movie, movieId }) {
  const Navigate = useNavigate();

  const { addToFavorites, removeFromFavorites, isFavorite } = useMovieContext();
  const fav = isFavorite(movieId);

  const handleClick = () => {
    fav ? removeFromFavorites(movieId) : addToFavorites(movie);
  };

  const handleMovieClick = (movieId) => {
    Navigate(`/movie/${movieId}`);
  };

  return (
    <div className="movie-card">
      <img
        src={movie.Poster}
        alt={movie.Title}
        onClick={() => handleMovieClick(movieId)}
        className="movie-poster"
      />
      <div className="movie-info">
        <h3
          onClick={() => handleMovieClick(movieId)}
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
