import React from "react";
import { render } from "react-dom";
import AddEvent from "./AddEvent";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Manage your events</h1>
        <br />
        <AddEvent />
      </div>
    );
  }
}

// to render markup on the screen
render(<App />, document.getElementById("root"));
