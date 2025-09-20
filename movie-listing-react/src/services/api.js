const API_KEY = "cac58529";
const BASE_URL = "https://www.omdbapi.com/";

/**
 * Simulates fetching popular movies using a general keyword (e.g., "a")
 * Because OMDb doesn't support trending/popular directly.
 */

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=fast&page=1`);
  const data = await response.json();

  // OMDb returns movies in `Search` key
  if (data.Response === "True") {
    // Return only top 10 movies
    return data.Search.slice(0, 20);
  } else {
    return [];
  }
};

/**
 * Searches movies by user input query
 */
export const searchMoviesByName = async (query) => {
  const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}`);
  const data = await response.json();

  if (data.Response === "True") {
    return data.Search;
  } else {
    return [];
  }
};

/**
 * Gets full details of a movie using imdbID
 */
export const getMovieById = async (id) => {
  const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&i=${id}`);
  const data = await response.json();
  return data;
};
