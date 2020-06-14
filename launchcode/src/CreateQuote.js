import React from "react";
import axios from "axios";
import "./App.css";
import { ThemeContext } from "./ThemeContext";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  CardContent,
  CardActions,
  Card,
  Divider,
  FormControl,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  TextField,
  Paper,
  Typography,
} from "@material-ui/core";
import FastForwardOutlinedIcon from "@material-ui/icons/FastForwardOutlined";
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
}));

let fromFieldVar = "";
let destinationFieldVar = "";
let departDateField = "";
let returnDateField = "";
let nameField = "";

class CreateQuote extends React.Component {
  static contextType = ThemeContext;
  constructor(props) {
    super(props);
    this.state = {
      fromField: "",
      courseDescription: "",
      peopleField: " ",
      transportField: " ",
      quoteObj: {},
    };
    this.setFromField = this.setFromField.bind(this);
    this.setDestinationField = this.setDestinationField.bind(this);
    this.setDepartDateField = this.setDepartDateField.bind(this);
    this.setReturnDateField = this.setReturnDateField.bind(this);
    this.setPeopleField = this.setPeopleField.bind(this);
    this.setTransportationField = this.setTransportationField.bind(this);
    this.setNameField = this.setNameField.bind(this);
    this.createQuote = this.createQuote.bind(this);
  }

  componentDidMount() {
    console.log("mount");
  }

  setFromField(e) {
    console.log(e.target.value);
    // this.setState({})
    fromFieldVar = e.target.value;
  }

  setDestinationField(e) {
    console.log(e.target.value);
    destinationFieldVar = e.target.value;
  }

  setDepartDateField(e) {
    console.log(e.target.value);
    departDateField = e.target.value;
  }

  setReturnDateField(e) {
    console.log(e.target.value);
    returnDateField = e.target.value;
  }

  setPeopleField(e) {
    console.log(e.target.value);
    this.setState({ peopleField: e.target.value });
  }

  setTransportationField(e) {
    console.log(e.target.value);
    this.setState({ transportField: e.target.value });
  }

  setNameField(e) {
    console.log(e.target.value);
    nameField = e.target.value;
  }

  createQuote() {
    console.log(fromFieldVar);
    let tempQuote = {
      from: fromFieldVar,
      destination: destinationFieldVar,
      depart: departDateField,
      return: returnDateField,
      people: this.state.peopleField,
      transportation: this.state.transportField,
      name: nameField,
    };
    this.setState({
      quoteObj: tempQuote,
    });
    console.log(this.state.quoteObj);
    axios.post("http://localhost:4000/quotes", tempQuote).then((response) => {
      console.log(response.data);
    });
    this.props.onCreateQuote({
      from: fromFieldVar,
      destination: destinationFieldVar,
      depart: departDateField,
      return: returnDateField,
      people: this.state.peopleField,
      transportation: this.state.transportField,
      name: nameField,
    });
  }

  render() {
    console.log(this.context);
    return (
      <Card className={classes.root}>
        <Grid container spacing={1} style={{ paddingTop: "10px" }}>
          <Grid item>
            <FastForwardOutlinedIcon fontSize={"large"} />
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h5" component="h2">
              Quick Quote
            </Typography>
          </Grid>
          {/*<Grid item>*/}
          {/*  <AspectRatioIcon style={{ float: "right" }} fontSize={"large"} />*/}
          {/*</Grid>*/}
        </Grid>
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <TextField
                id="filled-basic"
                label="FROM"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="filled"
                onChange={this.setFromField}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="filled-basic"
                label="DESTINATION"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="filled"
                onChange={this.setDestinationField}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                style={{ width: "100%" }}
                id="filled-basic"
                label="DEPART DATE"
                type="date"
                defaultValue="2020-05-24"
                // className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="filled"
                onChange={this.setDepartDateField}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                style={{ width: "100%" }}
                id="filled-basic"
                label="RETURN DATE"
                type="date"
                defaultValue="2020-05-24"
                // className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="filled"
                onChange={this.setReturnDateField}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl
                variant="filled"
                className={classes.formControl}
                style={{ width: "100%" }}
              >
                <InputLabel id="demo-simple-select-filled-label">
                  PEOPLE
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={this.state.peopleField}
                  onChange={this.setPeopleField}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>One</MenuItem>
                  <MenuItem value={2}>Two</MenuItem>
                  <MenuItem value={3}>Three</MenuItem>
                  <MenuItem value={4}>Four</MenuItem>
                  <MenuItem value={50}>Five or More</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl
                variant="filled"
                className={classes.formControl}
                style={{ width: "100%" }}
              >
                <InputLabel id="demo-simple-select-filled-label">
                  TRANSPORTATION
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={this.state.transportField}
                  onChange={this.setTransportationField}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>Car</MenuItem>
                  <MenuItem value={2}>Bicycle</MenuItem>
                  <MenuItem value={3}>Helicopter</MenuItem>
                  <MenuItem value={4}>Plane</MenuItem>
                  <MenuItem value={5}>Bus</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="filled-basic"
                label="NAME"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="filled"
                onChange={this.setNameField}
              />
            </Grid>
            <Grid item xs={6}>
              <Button
                id={"addQuoteBtn"}
                color="primary"
                onClick={() => this.createQuote()}
              >
                Create a quote
              </Button>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions style={{ float: "right" }}>
          <AspectRatioIcon fontSize={"small"} />
        </CardActions>
      </Card>
    );
  }
}

export default CreateQuote;
