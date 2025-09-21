import "../css/NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to="/" className="nav-link">
          Movie App
        </NavLink>
      </div>
      <div className="navbar-links">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/favourites"
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
        >
          Favourites
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
