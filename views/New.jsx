import React from "react";

function New() {
  const IMG_URL = "http://img.pokemondb.net/artwork/";

  return (
    <div>
      <h1>New Pokemon page</h1>
      {/* NOTE: action will be the route, method will be the HTTP verb */}

      <form action="/pokemon" method="POST">
        Name <input type="text" name="name" />
        <br />
        Image: <input name="img" defaultValue={IMG_URL + "default.jpg"} />
        <br />
        {/* <br />
        Ready To catch: <input type="checkbox" name="readyToEat" />
  <br />*/}
        <input type="submit" name="" value="Catch Pokemon" />
      </form>
    </div>
  );
}

module.exports = New;
