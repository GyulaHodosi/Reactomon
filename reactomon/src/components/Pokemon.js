import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Card from "../styled_components/Card";

function Pokemon(props) {
  const { name, url } = props.pokemon;
  const [id, setId] = useState();
  const [image, setImage] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  async function fetchPokemon() {
    const response = await axios.get(url);
    const data = await response.data;
    setId(data.id);
    setImage(data.sprites.front_default);
    setIsLoaded(true);
  }

  useEffect(() => {
    fetchPokemon();
  }, []);

  if (!isLoaded) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );
  } else {
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
    return (
      <NavLink className="nav-link" to={"/pokemons/" + id}>
        <Card>
          <div key={id} className="poke-card-container">
            <h2 className="poke-name">
              {capitalizedName} #{id}
            </h2>
            <img className="poke-img" src={image} alt={name} />
          </div>
        </Card>
      </NavLink>
    );
  }
}

export default Pokemon;
