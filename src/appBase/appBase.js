import {
  Route,
  Switch,
  Redirect,
  useHistory,
  useLocation,
  NavLink,
} from "react-router-dom";
import React, { useEffect, useState } from "react";
import Tasks from "./../pages/Tasks";

export default function AppBase() {
  return (
    <>
      <NavLink to={`/app/tasks`}> Consulter mes taches</NavLink>
      <Switch>
        <Route exact path="/app">
          <Redirect to="/app/tasks"></Redirect>
        </Route>

        <Route exact path="/app/tasks">
          <Tasks></Tasks>
        </Route>
      </Switch>
    </>
  );
}
