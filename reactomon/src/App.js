import React from "react";
import "./App.css";
import PokemonList from "./components/PokemonList";
import TypeList from "./components/TypeList";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PokemonDetail from "./components/PokemonDetail";
import TypeDetail from "./components/TypeDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/pokemons" component={PokemonList} />
          <Route exact path="/types" component={TypeList} />
          <Route path="/pokemons/:id" component={PokemonDetail} />
          <Route path="/types/:name" component={TypeDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
