import {
  Route,
  Switch,
  Redirect,
  useHistory,
  useLocation,
  NavLink,
} from "react-router-dom";
import { red } from "@material-ui/core/colors";
import {
  Avatar,
  ClickAwayListener,
  Grow,
  IconButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Toolbar,
  Tooltip,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";

import React, { useEffect, useState } from "react";
import Tasks from "./../pages/Tasks";
import HomePage from "./../pages/HomePage";
const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  links: {
    display: "flex",
    gap: "15px",
  },
  link: { textDecoration: "none", color: "#875" },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#fff",
    color: "black",
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
  },

  content: {
    width: "100%",
    padding: theme.spacing(2),
  },
  flex: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    marginRight: "20px",
  },
  avatar: {
    backgroundColor: red[700],
    cursor: "pointer",
  },
}));

export default function AppBase() {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.appBar}>
          <NavLink to={`/app/tasks`}> </NavLink>
          <Switch>
            <Route exact path="/app">
              <Redirect to="/app/home"></Redirect>
            </Route>

            <Route exact path="/app/tasks">
              <Tasks></Tasks>
            </Route>
            <Route exact path="/app/home">
              <HomePage></HomePage>
            </Route>
          </Switch>
        </Toolbar>
      </AppBar>
    </>
  );
}
