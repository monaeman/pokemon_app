import React from "react";
const myStyle = {
  color: "#ffffff",
  backgroundColor: "#000000",
};

function Index({ pokemon }) {
  return (
    <div style={myStyle}>
      <h1>See All The Pokemon</h1>
      {pokemon.map((pokemon, i) => {
        return (
          <li key={i}>
            {" "}
            <a href={`pokemon/${i}`}>{pokemon.name} </a>
          </li>
        );
      })}
    </div>
  );
}

module.exports = Index;
