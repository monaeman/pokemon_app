const mongoose = require("mongoose"); // require mongoose
const Schema = mongoose.Schema; // create a shorthand for the mongoose Schema constructor
const model = mongoose.model; // shorthand for model function

const pokemonSchema = new Schema(
  {
    name: { type: String },
    img: { type: String },

    readyToCatch : Boolean

    // likes: { type: Number, default: 0 },
    //sponsored: { type: Boolean, default: false },
  },
  { timestamps: true }
);

{
  /*const pokemon = [
  {
    name: "bulbasaur",
    img: "http://img.pokemondb.net/artwork/bulbasaur",
  },
  {
    name: "ivysaur",
    img: "http://img.pokemondb.net/artwork/ivysaur",
  },
  {
    name: "venusaur",
    img: "http://img.pokemondb.net/artwork/venusaur",
  },
  {
    name: "charmander",
    img: "http://img.pokemondb.net/artwork/charmander",
  },
  {
    name: "charizard",
    img: "http://img.pokemondb.net/artwork/charizard",
  },
  {
    name: "squirtle",
    img: "http://img.pokemondb.net/artwork/squirtle",
  },
  {
    name: "wartortle",
    img: "http://img.pokemondb.net/artwork/wartortle",
  },

  { name: "pikachu", img: "http://img.pokemondb.net/artwork/pikachu" },
  { name: "eevee", img: "http://img.pokemondb.net/artwork/eevee" },
  { name: "snorlax", img: "http://img.pokemondb.net/artwork/snorlax" },
  { name: "garchomp", img: "http://img.pokemondb.net/artwork/garchomp" },
  { name: "lucario", img: "http://img.pokemondb.net/artwork/lucario" },
  { name: "ditto", img: "http://img.pokemondb.net/artwork/ditto" },
  { name: "piplup", img: "http://img.pokemondb.net/artwork/piplup" },
  { name: "mew", img: "http://img.pokemondb.net/artwork/mew" },
  { name: "mewtwo", img: "http://img.pokemondb.net/artwork/mewtwo" },
  { name: "palkia", img: "http://img.pokemondb.net/artwork/palkia" },
  { name: "dialga", img: "http://img.pokemondb.net/artwork/dialga" },
  { name: "gyarados", img: "http://img.pokemondb.net/artwork/gyarados" },
  { name: "vaporeon", img: "http://img.pokemondb.net/artwork/vaporeon" },
];
const capitalizedPokemon = pokemon.map((poke) => {
  return {
    name: poke.name.charAt(0).toUpperCase() + poke.name.slice(1),
    img: poke.img,
  };
}); */
}
const Pokemon = model("Pokemon", pokemonSchema);
module.exports = Pokemon;
