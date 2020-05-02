import React, { useState, useEffect } from "react";
import axios from "axios";

function PokemonDetail(props) {
  const { id } = props.match.params;
  const [pokemon, setPokemon] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  async function fetchPokemon() {
    console.log(id);
    const response = await axios("https://pokeapi.co/api/v2/pokemon/" + id);
    const data = await response.data;
    setPokemon(data);
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
      <div>
        <p>ID: {pokemon.id}</p>
        <p>Name: {pokemon.name}</p>
        <p>Weight: {pokemon.weight}</p>
      </div>
    );
  }
}

export default PokemonDetail;
