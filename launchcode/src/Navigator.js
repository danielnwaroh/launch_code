import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import DnsRoundedIcon from "@material-ui/icons/DnsRounded";
import SettingsIcon from "@material-ui/icons/Settings";
import PhonelinkSetupIcon from "@material-ui/icons/PhonelinkSetup";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import FlightIcon from "@material-ui/icons/Flight";
import AssessmentIcon from "@material-ui/icons/Assessment";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import GroupIcon from "@material-ui/icons/Group";

const categories = [
  {
    id: "Develop",
    children: [
      { id: "Home", icon: <HomeIcon />, path: "/home", active: true },
      { id: "Quotes", icon: <AttachMoneyIcon />, path: "/quotes" },
      { id: "Leads", icon: <DnsRoundedIcon /> },
      { id: "Tours", icon: <FlightIcon /> },
    ],
  },
  {
    id: "Quality",
    children: [
      { id: "Invoices", icon: <InsertDriveFileIcon /> },
      { id: "Analytics", icon: <AssessmentIcon /> },
      { id: "Team", icon: <GroupIcon /> },
      { id: "Admin", icon: <SettingsIcon /> },
      { id: "Support", icon: <PhonelinkSetupIcon /> },
    ],
  },
];

const styles = (theme) => ({
  categoryHeader: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  categoryHeaderPrimary: {
    color: theme.palette.common.white,
  },
  item: {
    paddingTop: 10,
    paddingBottom: 10,
    color: "rgba(255, 255, 255, 0.7)",
    "&:hover,&:focus": {
      backgroundColor: "rgba(255, 255, 255, 0.08)",
    },
    height: 50,
  },
  itemCategory: {
    backgroundColor: "#232f3e",
    boxShadow: "0 -1px 0 #404854 inset",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  firebase: {
    userSelect: "none",
    fontSize: 24,
    color: theme.palette.common.white,
  },
  itemActiveItem: {
    color: "#4fc3f7",
  },
  itemPrimary: {
    fontSize: "inherit",
  },
  itemIcon: {
    minWidth: "auto",
    marginRight: theme.spacing(2),
  },
  divider: {},
  logoWrap: {
    justifyContent: "center",
  },
  logo: {
    userDrag: "none",
    userSelect: "none",
    transform: "translate(-5px, 0px)",
  },
});

function Navigator(props) {
  const { classes, ...other } = props;
  // Gets course code from url
  setActiveTab();

  function setActiveTab() {
    categories[0].children.forEach((element) => {
      if (window.location.href.includes(element.path)) {
        element.active = true;
      } else {
        element.active = false;
      }
      // element.active = window.location.href.includes(element.path);
    });
  }

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        {categories.map(({ id, children }, parentKey) => (
          <React.Fragment key={id}>
            {children.map(({ id: childId, icon, active, path }, childKey) => (
              <Link
                to={path}
                classes={{
                  primary: classes.itemPrimary,
                }}
                key={childKey}
                style={{ textDecoration: "none" }}
              >
                <ListItem
                  key={childId}
                  button
                  className={clsx(
                    classes.item,
                    active && classes.itemActiveItem
                  )}
                >
                  <ListItemIcon className={classes.itemIcon}>
                    {icon}
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.itemPrimary,
                    }}
                  >
                    {childId}
                  </ListItemText>
                </ListItem>
              </Link>
            ))}

            <Divider className={classes.divider} />
          </React.Fragment>
        ))}

        <Divider className={classes.divider} />
      </List>
    </Drawer>
  );
}

Navigator.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigator);
