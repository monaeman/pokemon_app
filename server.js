const express = require("express");

const app = express();
const port = 5006;

app.get("/", (req, res) => {
  res.send("<h1> Welcome to the Pokemon App! </h1>");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
