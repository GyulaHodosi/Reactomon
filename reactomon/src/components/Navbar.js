import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink className="nav-link" to="/">
        <img
          className="nav-logo"
          src={
            "https://upload.wikimedia.org/wikipedia/commons/4/4c/Pokeball.png"
          }
          alt={"logo"}
        />
      </NavLink>
      <NavLink className="nav-link" to="/">
        <h1>Reactomon</h1>
      </NavLink>
      <ul className="nav-links">
        <NavLink className="nav-link" to="/pokemons">
          <h2>Pokemons</h2>
        </NavLink>
        <NavLink className="nav-link" to="/types">
          <h2>Types</h2>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
