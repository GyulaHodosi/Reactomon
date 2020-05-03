import React, { useState, useEffect } from "react";
import Grid from "../styled_components/Grid";
import TypeCard from "../styled_components/TypeCard";
import Type from "./Type";

function TypeList() {
  const [types, setTypes] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  async function fetchTypes() {
    const response = await fetch("https://pokeapi.co/api/v2/type");
    const data = await response.json();
    setTypes(data);
    setIsLoaded(true);
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
      <div className="type-grid-container">
        <Grid className="type-grid">
          {types.results.map((type) => {
            return (
              <div key={type.name} className="type-container">
                <Type type={type.name} />
              </div>
            );
          })}
        </Grid>
      </div>
    );
  }
}

export default TypeList;
