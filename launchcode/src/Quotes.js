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
  IconButton,
  DialogContent,
  DialogTitle,
  DialogContentText,
  DialogActions,
  Button,
  Dialog,
  Stepper,
  Step,
  StepContent,
  Typography,
  StepLabel,
  TextField,
} from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/Add";
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
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
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

function getSteps() {
  return [
    "Select where you are travelling from",
    "Select when you are travelling",
    "Select where you are travelling to",
    "Select when you are returning",
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <TextField
          id="filled-basic"
          label="FROM"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          // onChange={this.setFromField}
          placeholder={"e.g. YYC or Calgary"}
        />
      );
    case 1:
      return (
        <TextField
          style={{ width: "100%" }}
          id="filled-basic"
          label="DEPART DATE"
          type="date"
          defaultValue="2020-06-14"
          // className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          // onChange={this.setDepartDateField}
        />
      );
    case 2:
      return (
        <TextField
          id="filled-basic"
          label="DESTINATION"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          // onChange={this.setDestinationField}
          placeholder={"e.g. YYZ or Toronto"}
        />
      );
    case 3:
      return (
        <TextField
          style={{ width: "100%" }}
          id="filled-basic"
          label="RETURN DATE"
          type="date"
          defaultValue="2020-06-21"
          // className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          // onChange={this.setReturnDateField}
        />
      );
    default:
      return "Unknown step";
  }
}

class Quotes extends React.Component {
  static contextType = ThemeContext;
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      rowsPerPage: 10,
      open: false,
      activeStep: 0,
    };
    this.handleChangePage = this.handleChangePage.bind(this);
    this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleReset = this.handleReset.bind(this);
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
  handleClickOpen(val) {
    this.setState({ open: true });
  }

  handleNext = () => {
    let tempActiveStep = this.state.activeStep;
    this.setState({
      activeStep: tempActiveStep + 1,
    });
  };

  handleBack = () => {
    let tempActiveStep = this.state.activeStep;
    this.setState({
      activeStep: tempActiveStep - 1,
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  render() {
    const { page, rowsPerPage } = this.state;
    const { quotes } = this.context;
    const steps = getSteps();
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
          <Grid container spacing={3}>
            <Grid item xs={12} style={{ textAlign: "center" }}>
              <IconButton
                edge="end"
                aria-label="add"
                onClick={() => this.handleClickOpen()}
              >
                <Tooltip title={"Click to add a new quote"}>
                  <AddIcon />
                </Tooltip>
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
        <Dialog
          onClose={this.handleClose}
          aria-labelledby="simple-dialog-title"
          open={this.state.open}
        >
          <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
            Create Quote
          </DialogTitle>
          <DialogContent>
            <Stepper activeStep={this.state.activeStep} orientation="vertical">
              {steps.map((label, index) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                  <StepContent>
                    <Typography>{getStepContent(index)}</Typography>
                    <div className={classes.actionsContainer}>
                      <div style={{ marginTop: "15px" }}>
                        <Button
                          disabled={this.state.activeStep === 0}
                          onClick={this.handleBack}
                          className={classes.button}
                        >
                          Back
                        </Button>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={this.handleNext}
                          className={classes.button}
                        >
                          {this.state.activeStep === steps.length - 1
                            ? "Finish"
                            : "Next"}
                        </Button>
                      </div>
                    </div>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
            {this.state.activeStep === steps.length && (
              <Paper square elevation={0} className={classes.resetContainer}>
                <Typography>
                  All steps completed - you&apos;re finished
                </Typography>
                <Button onClick={this.handleReset} className={classes.button}>
                  Reset
                </Button>
              </Paper>
            )}
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button
              onClick={() => this.deleteQuote(this.state.selectedQuote)}
              color="primary"
            >
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default Quotes;
