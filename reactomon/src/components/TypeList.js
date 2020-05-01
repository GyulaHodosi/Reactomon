import React, { useState, useEffect } from "react";

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
    return types.results.map((type) => <li>{type.name}</li>);
  }
}

export default TypeList;
