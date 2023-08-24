import React from "react";
const myStyle = {
  color: "blue",
  backgroundColor: "pink",
};

function Index({ pokemon }) {
  return (
    <div style={myStyle}>
      <nav>
        <a href="/pokemon/new">Create New Pokemon</a>
      </nav>
      <h1>See All The Pokemon</h1>
      {pokemon.map((pokemon, i) => {
        return (
          <li key={i}>
            {" "}
            <a href={`pokemon/${pokemon.id}`}>{pokemon.name} </a>
          </li>
        );
      })}
    </div>
  );
}

module.exports = Index;
