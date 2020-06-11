import React from "react";
import PropTypes from "prop-types";
import { AppBar, TextField } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import DashboardIcon from "@material-ui/icons/Dashboard";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SettingsIcon from "@material-ui/icons/Settings";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SearchIcon from "@material-ui/icons/Search";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { ThemeContext } from "./ThemeContext";

const styles = (theme) => ({
  appBar: {
    zIndex: 0,
  },
  toolBar: {
    borderRadius: 0,
    minHeight: "60px",
    userSelect: "none",
  },
  iconButtonAvatar: {
    padding: 4,
  },
  headerIcon: {
    margin: 15,
  },
  searchBar: {
    border: "1px",
    borderRadius: "5px",
    backgroundColor: "#E8E8E8",
  },
  searchInput: {
    fontSize: theme.typography.fontSize,
  },
});

class Header extends React.Component {
  static contextType = ThemeContext;

  render() {
    const { classes, title } = this.props;

    return (
      <AppBar
        component="div"
        className={classes.appBar}
        color="primary"
        position="static"
        elevation={15}
      >
        <Toolbar className={classes.toolBar}>
          <Grid container alignItems="center" spacing={1}>
            <Grid item xs>
              <Typography color="inherit" variant="h5" component="h1">
                <DashboardIcon fontSize={"small"} />
                Wet Bat
              </Typography>
            </Grid>
            <Grid item>
              <Toolbar>
                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  className={classes.searchBar}
                >
                  <Grid item>
                    <SearchIcon
                      fontSize={"small"}
                      className={classes.block}
                      color="#808080"
                    />
                  </Grid>
                  <Grid item xs>
                    <TextField
                      fullWidth={true}
                      // placeholder="Search..."
                      onChange={this.updateSearchTerm}
                      InputProps={{
                        disableUnderline: true,
                        className: classes.searchInput,
                      }}
                    />
                  </Grid>
                </Grid>
              </Toolbar>
            </Grid>
            <Grid item>
              <NotificationsIcon
                className={classes.headerIcon}
                fontSize={"default"}
              />
            </Grid>
            <Grid item>
              <SettingsIcon
                className={classes.headerIcon}
                fontSize={"default"}
              />
            </Grid>
            <Grid item>
              <ChatBubbleIcon
                className={classes.headerIcon}
                fontSize={"default"}
              />
            </Grid>
            <Grid item>
              {/*<IconButton className={classes.iconButtonAvatar} disabled={true}>*/}
              {/*  <Avatar>A</Avatar>*/}
              {/*</IconButton>*/}
              <AccountCircleIcon
                className={classes.headerIcon}
                fontSize={"default"}
              />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default withStyles(styles)(Header);
