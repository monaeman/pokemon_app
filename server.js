const express = require("express");

const app = express();
const port = 5006;

const pokemons = require("./models/pokemon.js");

app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

//Middelware
app.use((req, res, next) => {
  console.log("I run for all routes!");
  next();
});
//This allows the body of the post request
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("<h1> Welcome to the Pokemon App! </h1>");
});

app.get("/pokemon/", (req, res) => {
  res.render("Index", {
    pokemon: pokemons,
  });
});

//put this above your Show route
app.get("/pokemon/new", (req, res) => {
  res.render("New");
});

//Create = POST
app.post("/pokemon", (req, res) => {
  console.log(req.body);
  if (req.body.readyToCatch === "on") {
    req.body.readyToCatch = true;
  } else {
    req.body.readyToCatch = false;
  }
  pokemons.push(req.body);
  console.log("this is the pokemon array", pokemons);
  res.send("data recieved");
});

//show
app.get("/pokemon/:index", (req, res) => {
  res.render("Show", {
    //second param must be an object
    pokemon: pokemons[req.params.index],
  });
});

app.get("/pokemon/:id", (req, res) => {
  const id = req.params.id;
  res.send(id);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
