import React from "react";

function Show({ pokemon }) {
  // Update the image link by adding .jpg
  const imageUrl = pokemon.img.endsWith(".jpg")
  ? pokemon.img
  : pokemon.img + ".jpg";


  

  return (
    <div >
      <h1 >Gotta Catch 'Em All</h1>
      <h2>{pokemon.name} </h2>

      <img src={imageUrl} alt={pokemon.name}  />
      <a href="/pokemon" >Back</a>
    </div>
  );
}

module.exports = Show;
