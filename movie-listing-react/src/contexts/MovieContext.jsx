import { createContext, useContext, useState, useEffect } from "react";

// Create context
const MovieContext = createContext();

// Provider component
export function MovieProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage on initial render
  useEffect(() => {
    const stored = localStorage.getItem("favourites");
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  // Save favorites to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favorites));
  }, [favorites]);

  // Add a movie to favorites
  const addToFavorites = (movie) => {
    const exists = favorites.find((fav) => fav.imdbID === movie.imdbID);
    if (!exists) {
      setFavorites((prev) => [...prev, movie]);
    }
  };

  // Remove a movie from favorites
  const removeFromFavorites = (id) => {
    setFavorites((prev) => prev.filter((movie) => movie.imdbID !== id));
  };

  // Check if a movie is in favorites
  const isFavorite = (id) => {
    return favorites.some((movie) => movie.imdbID === id);
  };

  return (
    <MovieContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites, isFavorite }}
    >
      {children}
    </MovieContext.Provider>
  );
}

// Custom hook
export function useMovieContext() {
  return useContext(MovieContext);
}
