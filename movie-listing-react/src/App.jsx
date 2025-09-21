import "./css/App.css";
import Home from "./pages/home";
import Favourite from "./pages/Favourites";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { MovieProvider } from "./contexts/MovieContext";
import MovieInfo from "./components/MovieInfo";

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourite />} />
          <Route path="/movie/:id" element={<MovieInfo />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
