import React from "react";

function index({ pokemon }) {
  return (
    <div>
      {pokemon.map((pokemon, i) => {
        return (
          <li key={i}>
            {" "}
            <a href={`pokemon/${i}`}> {pokemon.name} </a>
          </li>
        );
      })}
    </div>
  );
}

module.exports = index;
