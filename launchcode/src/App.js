import React from "react";
import "./App.css";
import Home from "./Home";
import { BrowserRouter, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact component={Home} />
      </BrowserRouter>
    );
  }
}

export default App;
