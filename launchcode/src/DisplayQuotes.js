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
  TableCell,
  TableBody,
  TableRow,
  Table,
  TableContainer,
  TableHead,
} from "@material-ui/core";
import HistoryIcon from "@material-ui/icons/History";
import AspectRatioIcon from "@material-ui/icons/AspectRatio";

const classes = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  table: {
    minWidth: 650,
  },
}));

function createData(id, name, destination, price) {
  return { id, name, destination, price };
}

const rows = [
  createData(1, "Daniel", "YYC", 24),
  createData(2, "Adam", "YYC", 37),
  createData(3, "James", "YYC", 24),
  createData(4, "Josh", "YYC", 67),
  createData(5, "Sam", "YYC", 49),
];

class DisplayQuote extends React.Component {
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
      <div>
        <Card className={classes.root}>
          <Grid container spacing={1} style={{ paddingTop: "10px" }}>
            <Grid item>
              <HistoryIcon fontSize={"large"} />
            </Grid>
            <Grid item>
              <Typography gutterBottom variant="h5" component="h2">
                Pending Quotes
              </Typography>
            </Grid>
          </Grid>
          <Divider />
          <CardContent style={{ height: "328px" }}>
            <Grid container spacing={3}>
              <TableContainer
                style={{ overflowX: "hidden", maxHeight: "328px" }}
              >
                <Table
                  className={classes.table}
                  // size="small"
                  aria-label="simple table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell>ID#</TableCell>
                      <TableCell align="right">NAME</TableCell>
                      <TableCell align="right">DESTINATION</TableCell>
                      <TableCell align="right">PRICE($)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell component="th" scope="row">
                          {row.id}
                        </TableCell>
                        <TableCell align="right">{row.name}</TableCell>
                        <TableCell align="right">{row.destination}</TableCell>
                        <TableCell align="right">{row.price}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </CardContent>
          <CardActions style={{ float: "right" }}>
            <AspectRatioIcon fontSize={"small"} />
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default DisplayQuote;
