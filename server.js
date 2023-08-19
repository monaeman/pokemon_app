const express = require("express");

const app = express();
const port = 5006;

const pokemons = require("./models/pokemon.js");

app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.get("/", (req, res) => {
  res.send("<h1> Welcome to the Pokemon App! </h1>");
});

app.get("/pokemon/:id", (req, res) => {
  const id = req.params.id;
  res.send(id);
});

app.get("/pokemon/", (req, res) => {
  res.render("index", {
    pokemon: pokemons,
  });
});

//show
app.get("/pokemon/:index", (req, res) => {
  res.render("Show", {
    //second param must be an object
    pokemon: pokemons[req.params.index], //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
