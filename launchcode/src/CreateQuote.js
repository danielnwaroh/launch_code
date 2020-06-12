import React from "react";
import "./App.css";
import { ThemeContext } from "./ThemeContext";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  CardContent,
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

class CreateQuote extends React.Component {
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
            <FastForwardOutlinedIcon fontSize={"large"} />
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h5" component="h2">
              Quick Quote
            </Typography>
          </Grid>
          <Grid item>
            {/*<Tooltip title={"Edit"}>*/}
            {/*<IconButton>*/}
            <AspectRatioIcon style={{ float: "right" }} fontSize={"large"} />
            {/*</IconButton>*/}
            {/*</Tooltip>*/}
          </Grid>
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
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                style={{ width: "100%" }}
                id="filled-basic"
                label="DEPART DATE"
                type="date"
                defaultValue="2017-05-24"
                // className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="filled"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                style={{ width: "100%" }}
                id="filled-basic"
                label="RETURN DATE"
                type="date"
                defaultValue="2017-05-24"
                // className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="filled"
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
                  value={"age"}
                  // onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>One</MenuItem>
                  <MenuItem value={2}>Two</MenuItem>
                  <MenuItem value={3}>Three</MenuItem>
                  <MenuItem value={4}>Four</MenuItem>
                  <MenuItem value={5}>Five or More</MenuItem>
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
                  value={"age"}
                  // onChange={handleChange}
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
              />
            </Grid>
            <Grid item xs={6}>
              <Button id={"addQuoteBtn"} color="primary">
                Create a quote
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  }
}

export default CreateQuote;
