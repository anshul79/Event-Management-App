import React from "react";
import { render } from "react-dom";
import AddEvent from "./AddEvent";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/reducer';
import DisplayEvents from "./DisplayEvents";

const store = createStore(reducer);

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Manage your events</h1>
        <br />
        <AddEvent />
        {/* <br />
        <br />
        <DisplayEvents /> */}
      </div>
    );
  }
}

// to render markup on the screen
render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
