import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { ThemeContext } from "./ThemeContext";
import Header from "./Header";

class Main extends React.Component {
  static contextType = ThemeContext;
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log("mount");
  }

  render() {
    console.log("hello");

    return (
      <div>
        {/*<Header />*/}
        main page
      </div>
    );
  }
}

export default Main;
