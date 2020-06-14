import React from "react";
import "./App.css";
import { ThemeContext } from "./ThemeContext";
import { makeStyles } from "@material-ui/core/styles";
import {
  CardContent,
  Card,
  Divider,
  Grid,
  Typography,
  CardActions,
} from "@material-ui/core";
import EqualizerSharpIcon from "@material-ui/icons/EqualizerSharp";
import AspectRatioIcon from "@material-ui/icons/AspectRatio";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const classes = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const data = [
  { name: "January", typeA: 4000, typeB: 2400 },
  { name: "April", typeA: 3000, typeB: 1398 },
  { name: "August", typeA: 2000, typeB: 9800 },
  { name: "December", typeA: 2780, typeB: 3908 },
];

class DisplayRevenue extends React.Component {
  static contextType = ThemeContext;
  constructor(props) {
    super(props);
    this.state = {
      fromField: "",
    };
  }

  componentDidMount() {
    console.log("mount");
  }

  render() {
    return (
      <Card className={classes.root}>
        <Grid container spacing={1}>
          <Grid item>
            <EqualizerSharpIcon fontSize={"large"} />
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h5" component="h2">
              Revenue
            </Typography>
          </Grid>
        </Grid>
        <Divider />
        <CardContent style={{ height: "328px" }}>
          <Grid container spacing={3}>
            <LineChart
              width={350}
              height={350}
              data={data}
              margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Line
                type="linear"
                dataKey="typeA"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line
                type="linear"
                dataKey="typeB"
                stroke="#82ca9d"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </Grid>
        </CardContent>
        <CardActions style={{ float: "right" }}>
          <AspectRatioIcon fontSize={"small"} />
        </CardActions>
      </Card>
    );
  }
}

export default DisplayRevenue;
