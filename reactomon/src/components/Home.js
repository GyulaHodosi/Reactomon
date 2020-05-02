import React from "react";
import Background from "../styled_components/Background";

function Home() {
  return (
    <div>
      <Background>
        <div className="message-container">
          <h3>Welcome to Reactomon!</h3>
          <h4>
            On this page you can find all the pokemons and all the information
            you need about them!
          </h4>
          <h3>Have fun!</h3>
        </div>
      </Background>
    </div>
  );
}

export default Home;
