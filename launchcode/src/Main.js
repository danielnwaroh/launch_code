import React from "react";
import "./App.css";
import { ThemeContext } from "./ThemeContext";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import CreateQuote from "./CreateQuote";
import DisplayQuotes from "./DisplayQuotes";
import DisplayLeads from "./DisplayLeads";
import DisplayRevenue from "./DisplayRevenue";
import DisplayPotentialRevenue from "./DisplayPotentialRevenue";
import DisplayCloseRatios from "./DisplayCloseRatios";
import Dashboard from "./Dashboard";

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
    this.handleQuoteCreation = this.handleQuoteCreation.bind(this);
  }

  componentDidMount() {}

  handleQuoteCreation(e) {
    console.log("quote created");
    console.log(e);
    window.location.reload(false);
  }

  render() {
    console.log("hello");

    return (
      <div className={classes.root} style={{ padding: "25px" }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper} square>
              {/*some ad*/}
              <Dashboard />
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <CreateQuote onCreateQuote={this.handleQuoteCreation} />
          </Grid>
          <Grid item xs={4}>
            <DisplayQuotes />
          </Grid>
          <Grid item xs={4}>
            <DisplayLeads />
          </Grid>
          {/*<Grid item xs={8}>*/}
          {/*  <Paper className={classes.paper}>xs=8</Paper>*/}
          {/*</Grid>*/}
          {/*<Grid item xs={4}>*/}
          {/*  <Paper className={classes.paper}>xs=4</Paper>*/}
          {/*</Grid>*/}
          <Grid item xs={4}>
            <DisplayRevenue />
          </Grid>
          <Grid item xs={4}>
            <DisplayPotentialRevenue />
          </Grid>
          <Grid item xs={4}>
            <DisplayCloseRatios />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Main;
