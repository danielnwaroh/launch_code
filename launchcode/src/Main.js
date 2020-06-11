import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { ThemeContext } from "./ThemeContext";
import Header from "./Header";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const classes = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

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
