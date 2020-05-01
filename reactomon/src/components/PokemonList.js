import React, { useState, useEffect } from "react";
import Pokemon from "./Pokemon";

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  async function fetchPokemons() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await response.json();
    setPokemons(data);
    setIsLoaded(true);
  }

  useEffect(() => {
    fetchPokemons();
  }, []);

  if (!isLoaded) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );
  } else {
    return pokemons.results.map((pokemon) => (
      <div>
        <Pokemon key={pokemon.name} pokemon={pokemon} />
      </div>
    ));
  }
}

export default PokemonList;
