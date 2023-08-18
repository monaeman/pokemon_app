import React from "react";

function Show({ pokemon }) {
  console.log(pokemon);
  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.img} alt={pokemon.name} />
    </div>
  );
}

module.exports = Show;
