import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import TypeCard from "../styled_components/TypeCard";

function Type(props) {
  const typeName = props.type;

  const typeImages = {
    normal: "https://cdn.bulbagarden.net/upload/9/95/Normal_icon_SwSh.png",
    fighting: "https://cdn.bulbagarden.net/upload/3/3b/Fighting_icon_SwSh.png",
    flying: "https://cdn.bulbagarden.net/upload/b/b5/Flying_icon_SwSh.png",
    poison: "https://cdn.bulbagarden.net/upload/8/8d/Poison_icon_SwSh.png",
    ground: "https://cdn.bulbagarden.net/upload/2/27/Ground_icon_SwSh.png",
    rock: "https://cdn.bulbagarden.net/upload/1/11/Rock_icon_SwSh.png",
    bug: "https://cdn.bulbagarden.net/upload/9/9c/Bug_icon_SwSh.png",
    ghost: "https://cdn.bulbagarden.net/upload/0/01/Ghost_icon_SwSh.png",
    steel: "https://cdn.bulbagarden.net/upload/0/09/Steel_icon_SwSh.png",
    fire: "https://cdn.bulbagarden.net/upload/a/ab/Fire_icon_SwSh.png",
    water: "https://cdn.bulbagarden.net/upload/8/80/Water_icon_SwSh.png",
    grass: "https://cdn.bulbagarden.net/upload/a/a8/Grass_icon_SwSh.png",
    electric: "https://cdn.bulbagarden.net/upload/7/7b/Electric_icon_SwSh.png",
    psychic: "https://cdn.bulbagarden.net/upload/7/73/Psychic_icon_SwSh.png",
    ice: "https://cdn.bulbagarden.net/upload/1/15/Ice_icon_SwSh.png",
    dragon: "https://cdn.bulbagarden.net/upload/7/70/Dragon_icon_SwSh.png",
    dark: "https://cdn.bulbagarden.net/upload/d/d5/Dark_icon_SwSh.png",
    fairy: "https://cdn.bulbagarden.net/upload/c/c6/Fairy_icon_SwSh.png",
    shadow: "https://cdn.bulbagarden.net/upload/4/43/DarkIC_Masters.png",
    unknown: "https://cdn.bulbagarden.net/upload/3/39/SteelIC_Masters.png",
  };

  return (
    <NavLink className="nav-link" to={"/types/" + typeName}>
      <div key={typeName} className="type-card-container">
        <TypeCard>
          <img src={typeImages[typeName]}></img>
          <div>{typeName.charAt(0).toUpperCase() + typeName.slice(1)}</div>
        </TypeCard>
      </div>
    </NavLink>
  );
}

export default Type;
