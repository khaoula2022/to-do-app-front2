import {
  Route,
  Switch,
  Redirect,
  useHistory,
  NavLink,
  useLocation,
} from "react-router-dom";
import React, { useEffect, useState } from "react";
import Tasks from "./../pages/Tasks";

export default function AppBase() {
  const location = useLocation();

  const history = useHistory();
  return (
    <>
      <NavLink to={`/app/tasks/`}>Consulter les taches ici</NavLink>

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
