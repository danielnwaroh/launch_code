import React from "react";
import "./App.css";
import { ThemeContext } from "./ThemeContext";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Paper,
  TablePagination,
  TableCell,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
} from "@material-ui/core";

const classes = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  container: {
    maxHeight: 440,
  },
}));

const columns = [
  { id: "id", label: "ID", minWidth: 100 },
  { id: "name", label: "Name", minWidth: 170 },
  {
    id: "transportation",
    label: "Transportation",
    minWidth: 170,
    align: "left",
  },
  {
    id: "from",
    label: "From Location",
    minWidth: 170,
    align: "left",
  },
  {
    id: "destination",
    label: "Destination Location",
    minWidth: 100,
    align: "left",
  },
  {
    id: "depart",
    label: "Departure Date",
    minWidth: 120,
    align: "left",
  },
  {
    id: "returnDate",
    label: "Return Date",
    minWidth: 120,
    align: "left",
  },
  {
    id: "numPeople",
    label: "Number of People",
    minWidth: 100,
    align: "left",
  },
  {
    id: "price",
    label: "Price ($)",
    minWidth: 100,
    align: "left",
  },
];

function createData(
  id,
  name,
  transportation,
  from,
  destination,
  depart,
  returnDate,
  numPeople,
  price
) {
  depart = parseDate(depart);
  returnDate = parseDate(returnDate);
  numPeople = convertPeopleCount(numPeople);
  return {
    id,
    name,
    transportation,
    from,
    destination,
    depart,
    returnDate,
    numPeople,
    price,
  };
}

function parseDate(paramDate) {
  let newDate = paramDate.split("T");
  return newDate[0];
}

function convertPeopleCount(paramPeople) {
  if (paramPeople === 10) {
    return "5+";
  } else {
    return paramPeople;
  }
}

class Quotes extends React.Component {
  static contextType = ThemeContext;
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      rowsPerPage: 10,
    };
    this.handleChangePage = this.handleChangePage.bind(this);
    this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
  }

  componentDidMount() {}

  handleChangePage = (event, newPage) => {
    this.setState({
      page: newPage,
    });
  };

  handleChangeRowsPerPage = (event) => {
    this.setState({
      rowsPerPage: +event.target.value,
      page: 0,
    });
  };

  render() {
    const { page, rowsPerPage } = this.state;
    const { quotes } = this.context;

    let rows = [];
    console.log(quotes);
    quotes.forEach(function (quote) {
      rows.push(
        createData(
          quote.idquotes,
          quote.name,
          quote.transportation,
          quote.fromLocation,
          quote.destinationLocation,
          quote.departDate,
          quote.returnDate,
          quote.numPeople,
          quote.price
        )
      );
    });

    return (
      <div className={classes.root} style={{ padding: "25px" }}>
        <Grid container spacing={3}>
          <Paper className={classes.root} style={{ width: "100%" }}>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.code}
                        >
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === "number"
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={this.handleChangePage}
              onChangeRowsPerPage={this.handleChangeRowsPerPage}
            />
          </Paper>
        </Grid>
      </div>
    );
  }
}

export default Quotes;
