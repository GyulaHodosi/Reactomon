import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink className="nav-link" to="/">
        <h1>Reactomon</h1>
      </NavLink>
      <ul className="nav-links">
        <NavLink className="nav-link" to="/pokemons">
          <li>Pokemons</li>
        </NavLink>
        <NavLink className="nav-link" to="/types">
          <li>Types</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
