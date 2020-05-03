import React, { useState, useEffect } from "react";
import axios from "axios";
import Grid from "../styled_components/Grid";
import Pokemon from "./Pokemon";

function TypeDetail(props) {
  const { name } = props.match.params;
  const [pokemons, setPokemons] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  async function fetchTypes() {
    const response = await axios.get("https://pokeapi.co/api/v2/type");
    const data = await response.data;
    const url = getUrl(data.results);
    const responseNext = await axios.get(url);
    const dataNext = await responseNext.data;
    setPokemons(dataNext.pokemon);
    setIsLoaded(true);
  }

  function getUrl(types) {
    var result;
    types.forEach((type) => {
      if (type.name == name) {
        result = type;
      }
    });
    return result.url;
  }

  useEffect(() => {
    fetchTypes();
  }, []);

  if (!isLoaded) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );
  } else {
    return (
      <div className="grid-container">
        <Grid>
          {pokemons.map((pokemon) => {
            return (
              <div key={pokemon.pokemon.name} className="pokemon-container">
                <Pokemon key={pokemon.pokemon.name} pokemon={pokemon.pokemon} />
              </div>
            );
          })}
        </Grid>
      </div>
    );
  }
}

export default TypeDetail;
