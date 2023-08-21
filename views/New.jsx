import React from "react";

function New() {
  return (
    <div>
      <h1>New Pokemon page</h1>
      {/* NOTE: action will be the route, method will be the HTTP verb */}

      <form action="/pokemon" method="POST">
        Name <input type="text" name="name" />
        <br />
        Color: <input type="text" name="color" />
        <br />
        Ready To catch: <input type="checkbox" name="readyToEat" />
        <br />
        <input type="submit" name="" value="Catch Pokemon" />
      </form>
    </div>
  );
}

module.exports = New;
