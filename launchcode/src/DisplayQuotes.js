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
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Avatar,
  Dialog,
  Button,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";
import HistoryIcon from "@material-ui/icons/History";
import AspectRatioIcon from "@material-ui/icons/AspectRatio";
import DeleteIcon from "@material-ui/icons/Delete";
import CachedIcon from "@material-ui/icons/Cached";
import axios from "axios";
import { Link } from "react-router-dom";

const classes = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
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

class DisplayQuote extends React.Component {
  static contextType = ThemeContext;
  constructor(props) {
    super(props);
    this.state = {
      fromField: "",
      open: false,
      selectedQuote: {},
    };
    this.deleteQuote = this.deleteQuote.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
  }

  componentDidMount() {}

  deleteQuote(val) {
    console.log(val);
    console.log("deleted");
    axios
      .post("http://localhost:4000/deleteQuote", { id: val.id })
      .then((response) => {
        console.log(response.data);
      });
    this.setState({ open: false });
    window.location.reload(false);
  }

  handleClickOpen(val) {
    this.setState({ open: true, selectedQuote: val });
  }

  handleClose() {
    this.setState({ open: false });
  }

  render() {
    const { quotes } = this.context;
    const { selectedQuote } = this.state;
    let rows = [];
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
              <List dense={false} style={{ width: "100%" }}>
                {rows.map((row) => (
                  <ListItem button>
                    <ListItemAvatar>
                      <Avatar>
                        <CachedIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={row.name}
                      secondary={"$" + row.price}
                    />
                    <ListItemSecondaryAction>
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() => this.handleClickOpen(row)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            </Grid>
          </CardContent>
          <Link to={"/quotes"} style={{ textDecoration: "none" }}>
            <CardActions style={{ float: "right", color: "black" }}>
              <AspectRatioIcon fontSize={"small"} />
            </CardActions>
          </Link>
        </Card>
        <Dialog
          onClose={this.handleClose}
          aria-labelledby="simple-dialog-title"
          open={this.state.open}
        >
          <DialogContent>
            <DialogContentText>
              Are you sure you want to delete this quote?
            </DialogContentText>
            <DialogContentText>
              Name: {selectedQuote.name} <br />
              From: {selectedQuote.from} on {selectedQuote.depart} <br />
              To: {selectedQuote.destination} on {selectedQuote.returnDate}{" "}
              <br />
              Transportation: {selectedQuote.transportation} <br />
              Price: ${selectedQuote.price}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button
              onClick={() => this.deleteQuote(this.state.selectedQuote)}
              color="primary"
            >
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default DisplayQuote;
