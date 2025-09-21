// Favourites.jsx
import "../css/Favourites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favourite() {
  const { favorites } = useMovieContext();

  return (
    <div className="favourites-page">
      {favorites.length === 0 ? (
        <div className="favourites-empty">
          <h2>No favourites yet</h2>
        </div>
      ) : (
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              movieId={movie.imdbID}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favourite;
