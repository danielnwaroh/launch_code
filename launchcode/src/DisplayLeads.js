import React from "react";
import "./App.css";
import { ThemeContext } from "./ThemeContext";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
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
} from "@material-ui/core";
import MailOutlineSharpIcon from "@material-ui/icons/MailOutlineSharp";
import AspectRatioIcon from "@material-ui/icons/AspectRatio";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";

const classes = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

class DisplayLeads extends React.Component {
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
        <Grid container spacing={1} style={{ paddingTop: "10px" }}>
          <Grid item>
            <MailOutlineSharpIcon fontSize={"large"} />
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h5" component="h2">
              New Leads
            </Typography>
          </Grid>
        </Grid>
        <Divider />
        <CardContent style={{ height: "328px" }}>
          <Grid container spacing={3}>
            <List className={classes.root}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Jane Smith" secondary="Jan 9, 2014" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <WorkIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Joe Smith" secondary="Jan 7, 2014" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <BeachAccessIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Steve Smith" secondary="July 20, 2014" />
              </ListItem>
            </List>
          </Grid>
        </CardContent>
        <CardActions style={{ float: "right" }}>
          <AspectRatioIcon fontSize={"small"} />
        </CardActions>
      </Card>
    );
  }
}

export default DisplayLeads;
