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
import PieChartOutlinedIcon from "@material-ui/icons/PieChartOutlined";
import AspectRatioIcon from "@material-ui/icons/AspectRatio";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const classes = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const data1 = [
  { name: "Car", value: 400 },
  { name: "Plane", value: 300 },
  { name: "Boat", value: 300 },
  { name: "Other", value: 200 },
];

const data2 = [
  { name: "Edmonton", value: 100 },
  { name: "Toronto", value: 800 },
  { name: "Banff", value: 200 },
  { name: "Toronto", value: 200 },
];

const data3 = [
  { name: "Group A", value: 250 },
  { name: "Group B", value: 250 },
  { name: "Group C", value: 250 },
  { name: "Group D", value: 250 },
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
        <Grid container spacing={1} style={{ paddingTop: "10px" }}>
          <Grid item>
            <PieChartOutlinedIcon fontSize={"large"} />
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
                data={data1}
                cx={50}
                cy={175}
                labelLine={false}
                outerRadius={50}
                fill="#8884d8"
                dataKey="value"
              >
                {data1.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Pie
                data={data2}
                cx={170}
                cy={175}
                labelLine={false}
                outerRadius={50}
                fill="#8884d8"
                dataKey="value"
              >
                {data2.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Pie
                data={data3}
                cx={300}
                cy={175}
                labelLine={false}
                outerRadius={50}
                fill="#8884d8"
                dataKey="value"
              >
                {data3.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
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
