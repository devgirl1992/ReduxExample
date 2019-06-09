import React, { Component } from "react";
import "./App.css";
import Posts from "./Components/posts";
import Postform from "./Components/postform";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

const store = createStore(() => [], {}, applyMiddleware());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1 className="title">learn Redux</h1>

          <h1 className="title">Postform Component</h1>
          <Postform />
          <hr />

          <h1 className="title">Post Component</h1>
          <Posts />
          <br />
        </div>
      </Provider>
    );
  }
}

export default App;
