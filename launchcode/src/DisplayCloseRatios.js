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
import GroupWorkIcon from "@material-ui/icons/GroupWork";
import AspectRatioIcon from "@material-ui/icons/AspectRatio";
import { PieChart, Pie, Sector } from "recharts";

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

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
        id={"closeRatioID"}
      >{`$ ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
        id={"closeRatioID"}
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

class DisplayCloseRatios extends React.Component {
  static contextType = ThemeContext;
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
    this.onPieEnter = this.onPieEnter.bind(this);
  }

  componentDidMount() {
    console.log("mount");
  }

  onPieEnter(data, index) {
    this.setState({
      activeIndex: index,
    });
  }

  render() {
    return (
      <Card className={classes.root}>
        <Grid container spacing={1} style={{ paddingTop: "10px" }}>
          <Grid item>
            <GroupWorkIcon fontSize={"large"} />
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h5" component="h2">
              Close Ratios
            </Typography>
          </Grid>
        </Grid>
        <Divider />
        <CardContent style={{ height: "328px" }}>
          <Grid container spacing={3}>
            <PieChart width={363} height={350}>
              <Pie
                dataKey="value"
                activeIndex={this.state.activeIndex}
                activeShape={renderActiveShape}
                data={data}
                cx={170}
                cy={175}
                innerRadius={50}
                outerRadius={70}
                fill="#00C49F"
                onMouseEnter={this.onPieEnter}
              />
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

export default DisplayCloseRatios;
