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
import { PieChart, Pie, Sector, Cell } from "recharts";

const classes = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

class DisplayPotentialRevenue extends React.Component {
  static contextType = ThemeContext;
  constructor(props) {
    super(props);
    this.state = {};
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
              Potential Revenue
            </Typography>
          </Grid>
        </Grid>
        <Divider />
        <CardContent style={{ height: "328px" }}>
          <Grid container spacing={3}>
            <PieChart width={363} height={350}>
              <Pie
                data={data}
                cx={50}
                cy={200}
                labelLine={false}
                outerRadius={40}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Pie
                data={data}
                cx={150}
                cy={200}
                labelLine={false}
                outerRadius={40}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Pie
                data={data}
                cx={250}
                cy={200}
                labelLine={false}
                outerRadius={40}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </Grid>
        </CardContent>
        <CardActions style={{ float: "right" }}>
          <AspectRatioIcon fontSize={"small"} />
        </CardActions>
      </Card>
    );
  }
}

export default DisplayPotentialRevenue;
