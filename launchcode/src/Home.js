import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Navigator from "./Navigator";
import Main from "./Main";
import { ThemeContext } from "./ThemeContext";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./Header";
import Grid from "@material-ui/core/Grid";
import Quotes from "./Quotes";

const drawerWidth = "100%";
const styles = (theme) => ({
  root: {
    display: "flex",
    minHeight: "100vh",
    flexGrow: 1,
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
      height: "100%",
    },
  },
  app: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  main: {
    flex: 1,
    padding: theme.spacing(0, 0),
    background: "#eaeff1",
  },
  footer: {
    padding: theme.spacing(2),
    background: "#eaeff1",
  },
});

class Home extends React.Component {
  static contextType = ThemeContext;
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
    };
  }

  render() {
    console.log("hello");
    console.log(this.props);
    const handleDrawerToggle = () => {
      this.setState({
        mobileOpen: !this.state.mobileOpen,
      });
    };
    return (
      <div className={this.props.classes.root}>
        <CssBaseline />
        {/*<nav className={this.props.classes.drawer}>*/}
        {/*  <Navigator PaperProps={{ style: { width: drawerWidth } }} />*/}
        {/*</nav>*/}
        <div className={this.props.classes.app}>
          <Header onDrawerToggle={handleDrawerToggle} />

          <main className={this.props.classes.main}>
            <div id={"parentDiv"} className={styles.root}>
              <Grid container>
                <Grid item xs={2}>
                  <nav className={this.props.classes.drawer}>
                    <Navigator PaperProps={{ style: { width: drawerWidth } }} />
                  </nav>
                </Grid>
                <Grid item xs={10}>
                  <Switch>
                    <Route exact path={"/home"} render={(props) => <Main />} />
                    <Route
                      exact
                      path={"/quotes"}
                      render={(props) => <Quotes />}
                    />
                    <Redirect to="/home" />
                  </Switch>
                </Grid>
              </Grid>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
