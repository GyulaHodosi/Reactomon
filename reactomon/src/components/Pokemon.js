import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Pokemon(props) {
  const { name, url } = props.pokemon;
  const [id, setId] = useState();
  const [image, setImage] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  async function fetchPokemon() {
    const response = await fetch(url);
    const data = await response.json();
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
    return (
      <div key={id}>
        <h2>
          {id}. {name}
        </h2>
        <img src={image} alt={name} />
        <NavLink to={"/pokemons/" + id}>Details</NavLink>
      </div>
    );
  }
}

export default Pokemon;
