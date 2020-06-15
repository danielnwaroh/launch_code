import React from "react";
import "./App.css";
import { ThemeContext } from "./ThemeContext";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import FastForwardOutlinedIcon from "@material-ui/icons/FastForwardOutlined";
import AspectRatioIcon from "@material-ui/icons/AspectRatio";
import CreateQuote from "./CreateQuote";

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

class Dashboard extends React.Component {
  static contextType = ThemeContext;
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    console.log("hello");

    return (
      <div id="dashboardBg">
        <Grid item xs={6} style={{ color: "white" }}>
          <h1>Welcome to your dashboard</h1>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            vestibulum varius tellus. Sed in lectus non nisl laoreet mattis. Nam
            ultricies at ex sit amet pharetra. Fusce eget eros neque. Sed vel
            quam dapibus, viverra turpis sed, laoreet nunc. Quisque cursus dolor
            risus. Nulla laoreet felis et varius scelerisque. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Ut sollicitudin ante ullamcorper, congue elit non, auctor
            diam. Praesent id tellus ac justo pulvinar laoreet pharetra non
            mauris. Vivamus ultricies, elit sed sollicitudin lacinia, nibh augue
            vestibulum magna, sit amet sagittis quam elit in nunc. Vestibulum et
            aliquet odio, vel malesuada risus. Sed non odio a dui porta
            suscipit.
          </h3>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
