import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ThemeContextProvider from "./ThemeContext";
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
