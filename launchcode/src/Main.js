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

  componentDidMount() {
    console.log("mount");
  }

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
              some ad
              {/*<AppBar*/}
              {/*  className={classes.searchBar}*/}
              {/*  position="static"*/}
              {/*  color="default"*/}
              {/*  elevation={0}*/}
              {/*>*/}
              {/*  <Grid container={true} spacing={3} className={classes.container}>*/}
              {/*    <Grid item={true} xs={12}>*/}
              {/*      <Typography variant="button">My Courses</Typography>*/}
              {/*    </Grid>*/}
              {/*    <Grid item={true} xs={12} sm={4}>*/}
              {/*      <Card className={classes.root}>*/}
              {/*        <CardActionArea*/}
              {/*          id={"addNewCard"}*/}
              {/*          onClick={() => this.handleClickOpenDialogueNewCourse()}*/}
              {/*        >*/}
              {/*          <CardContent>*/}
              {/*            <Tooltip title={"Click to add a new course"}>*/}
              {/*              <AddIcon />*/}
              {/*            </Tooltip>*/}
              {/*            <Typography gutterBottom variant="h5" component="h2">*/}
              {/*              Add New Course*/}
              {/*            </Typography>*/}
              {/*          </CardContent>*/}
              {/*        </CardActionArea>*/}
              {/*      </Card>*/}
              {/*    </Grid>*/}
              {/*  </Grid>*/}
              {/*</AppBar>*/}
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <CreateQuote onCreateQuote={this.handleQuoteCreation} />
          </Grid>
          <Grid item xs={4}>
            {/*<Paper className={classes.paper}>xs=4</Paper>*/}
            <DisplayQuotes />
          </Grid>
          <Grid item xs={4}>
            {/*<Paper className={classes.paper}>xs=4</Paper>*/}
            <DisplayLeads />
          </Grid>
          <Grid item xs={8}>
            <Paper className={classes.paper}>xs=8</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>xs=4</Paper>
          </Grid>
          <Grid item xs={4}>
            <DisplayRevenue />
          </Grid>
          <Grid item xs={4}>
            <DisplayPotentialRevenue />
          </Grid>
          <Grid item xs={4}>
            {/*<Paper className={classes.paper}>xs=4</Paper>*/}
            <DisplayCloseRatios />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Main;
