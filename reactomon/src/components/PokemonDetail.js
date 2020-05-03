import React, { useState, useEffect } from "react";
import axios from "axios";
import Pokemon from "./Pokemon";
import Grid from "../styled_components/Grid";

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
    const poke = {
      name: pokemon.name,
      url: "https://pokeapi.co/api/v2/pokemon/" + id,
    };
    console.log(pokemon);
    return (
      <div>
        <Grid>
          <Pokemon pokemon={poke} />
        </Grid>
      </div>
    );
  }
}

export default PokemonDetail;
