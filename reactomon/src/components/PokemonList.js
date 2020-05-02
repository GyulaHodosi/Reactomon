import React, { useState, useEffect } from "react";
import axios from "axios";
import Pokemon from "./Pokemon";
import Grid from "../styled_components/Grid";

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  async function fetchPokemons() {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
    const data = await response.data;
    setPokemons(data);
    setIsLoaded(true);
  }

  useEffect(() => {
    fetchPokemons();
  }, []);

  if (!isLoaded) {
    return <h3>Loading...</h3>;
  } else {
    return (
      <Grid>
        {pokemons.results.map((pokemon) => {
          return (
            <div className="pokemon-container">
              <Pokemon key={pokemon.name} pokemon={pokemon} />
            </div>
          );
        })}
      </Grid>
    );
  }
}

export default PokemonList;
