//This line is loading the configuration stored in a .env file into the environment.
// The dotenv package allows you to define environment variables in a file so you can keep sensitive information, /
//like database connection strings, outside of your codebase.

require("dotenv").config();


//Here, you are importing the express framework and creating an instance of it called app. 
//You're also defining the port number your server will listen on as port.

const express = require("express");
const app = express();
const port = 5006;

//This line is importing the module pokemon.js from the models directory. 
//It's likely that this module contains your Pokémon data 
//or interacts with a database to provide Pokémon-related functionality.
const pokemons = require("./models/pokemon.js");

//You're importing mongoose,
// a popular library for MongoDB interactions. 
//You're getting the MongoDB connection string from the environment variable MONGO_URI. 
//You then use mongoose.connect to establish a connection 
//to the MongoDB database using the provided URI.
//setup mongoose
const mongoose = require("mongoose");
//const Pokemon = require("./pokemon.js");
//mongoose connection
const mongoURI = process.env.MONGO_URI;
console.log(mongoURI)
//connect to mongodb
mongoose.connect(mongoURI, {
  //get rid of errors in the console
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


//These lines configure the view engine for rendering your views. 
//You're using JSX with express-react-views as the engine.
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

//This middleware logs a message to the console for every incoming request. 
//It's a simple demonstration of how middleware can be used to perform actions on 
//requests before they reach the route handlers.
app.use((req, res, next) => {
  console.log("I run for all routes!");
  next();
});


//This allows the body of the post request
app.use(express.urlencoded({ extended: false }));


//root url
app.get("/", (req, res) => {
  res.send("<h1> Welcome to the Pokemon App! </h1>");
});

//This route handler renders an Index view, 
//passing in the pokemons data for rendering. I
app.get("/pokemon/", (req, res) => {
  res.render("Index", {
    pokemon: pokemons,
  });
});

//put this above your Show route
//This route handler renders a New view, 
//presumably for creating new Pokémon entries
app.get("/pokemon/new", (req, res) => {
  res.render("New");
});

//Create = POST
//This route handler is for handling the creation of new Pokémon entries. 
//It modifies the req.body object to determine if a Pokémon is ready to catch 
//and then creates a new Pokémon entry using the pokemons model (assuming it's a Mongoose model).
app.post("/pokemon", async(req, res) => {
  console.log(req.body);
  if (req.body.readyToCatch === "on") {
    req.body.readyToCatch = true;
  } else {
    req.body.readyToCatch = false;
  }
 await pokemons.create(req.body);
  console.log("this is the pokemon array", pokemons);
  res.send("data recieved");
});

//show
//This route handler renders a Show view for a specific Pokémon at the given index.
app.get("/pokemon/:index", (req, res) => {
  res.render("Show", {
    //second param must be an object
    pokemon: pokemons[req.params.index],
  });
});

//This route handler attempts to find a Pokémon by its id
app.get("/pokemon/:id", async(req, res) => {
  const id = req.params.id;
 // res.send(id);
  const pokemon = await pokemon.findById(id);
    res.render("Show", { pokemon: pokemon });
});

//This line starts the server, making it listen on the specified port. 
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
