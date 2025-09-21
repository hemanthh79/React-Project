import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieById } from "../services/api";
import { useMovieContext } from "../contexts/MovieContext";
import "../css/MovieInfo.css";
import { Link } from "react-router-dom";

function MovieInfo() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToFavorites, removeFromFavorites, isFavorite } = useMovieContext();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await getMovieById(id);
        setMovie(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!movie) return <p>Movie not found</p>;

  const fav = isFavorite(movie.imdbID);

  const handleFavClick = () => {
    fav ? removeFromFavorites(movie.imdbID) : addToFavorites(movie);
  };

  return (
    <div className="movie-info-container">
      <img src={movie.Poster} alt={movie.Title} className="movie-info-poster" />
      <div className="movie-info-details">
        <h1>{movie.Title}</h1>
        <p>
          <strong>Year:</strong> {movie.Year}
        </p>
        <p>
          <strong>Plot:</strong> {movie.Plot}
        </p>
        <p>
          <strong>Genre:</strong> {movie.Genre}
        </p>
        <p>
          <strong>Director:</strong> {movie.Director}
        </p>
        <p>
          <strong>Actors:</strong> {movie.Actors}
        </p>
        <p>
          <strong>IMDB Rating:</strong> {movie.imdbRating}
        </p>

        <button onClick={handleFavClick}>
          {fav ? "Remove from Favorites" : "Add to Favorites"}
        </button>
        <button>
          {" "}
          <Link to="/" style={{ color: "white" }}>
            Home
          </Link>
        </button>
      </div>
    </div>
  );
}

export default MovieInfo;
