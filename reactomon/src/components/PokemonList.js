import React, { useState, useEffect } from "react";
import axios from "axios";
import Pokemon from "./Pokemon";
import Grid from "../styled_components/Grid";
import Button from "../styled_components/Button";

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [next, setNext] = useState();
  const [previous, setPrevious] = useState();

  async function fetchPokemons(url) {
    try {
      const response = await axios.get(url);
      const data = await response.data;
      setPrevious(data.previous);
      setPokemons(data.results);
      setNext(data.next);
      setIsLoaded(true);
    } catch (NullReferenceException) {
      alert("There is no page to show!");
    }
  }

  useEffect(() => {
    fetchPokemons("https://pokeapi.co/api/v2/pokemon");
  }, []);

  if (!isLoaded) {
    return <h3>Loading...</h3>;
  } else {
    return (
      <div className="grid-container">
        <Grid>
          {pokemons.map((pokemon) => {
            return (
              <div key={pokemon.name} className="pokemon-container">
                <Pokemon key={pokemon.name} pokemon={pokemon} />
              </div>
            );
          })}
        </Grid>
        <div className="button-container">
          <Button onClick={() => fetchPokemons(previous)}>
            {"< Load previous!"}
          </Button>
          <Button onClick={() => fetchPokemons(next)}>{"Load next! >"}</Button>
        </div>
      </div>
    );
  }
}

export default PokemonList;
