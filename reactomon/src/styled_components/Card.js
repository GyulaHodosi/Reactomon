import styled from "styled-components";

//background: #ff6961;

const Card = styled.div`
  background-image: url("https://i.pinimg.com/originals/95/fc/30/95fc304b40461a9922bd1d3aff885496.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 300px 300px;
  border-radius: 5px;
  text-align: center;
  height: 300px;
  width: 300px;
  color: #ac7339;
  &:hover {
    color: #ff1a1a;
  }

  .poke-name {
    font-family: "Lucida Console", Charcoal, sans-serif;
    padding-top: 0%;
    -webkit-text-stroke: 2px;
    text-decoration: none;
  }

  .poke-img {
    height: 50%;
    width: 50%;
    padding-top: 10%;
  }
`;

export default Card;
