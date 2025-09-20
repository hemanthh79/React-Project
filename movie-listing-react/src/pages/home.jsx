import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import "../css/Home.css";
import { searchMoviesByName, getPopularMovies } from "../services/api";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load popular movies on mount
  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (error) {
        setError("Failed to fetch popular movies");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  // Handle search form submit
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setLoading(true);
    setError(null);
    try {
      const searchedMovies = await searchMoviesByName(searchQuery);
      setMovies(searchedMovies);
    } catch (error) {
      setError("Failed to search movies" + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for a movie"
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      <div className="movies-grid">
        {movies.length === 0 && !loading && <p>No movies found</p>}
        {movies.map((movie) => (
          <MovieCard movie={movie} movieId={movie.imdbId} key={movie.imdbID} />
        ))}
      </div>
    </div>
  );
}

export default Home;
