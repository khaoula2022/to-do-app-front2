import {
  Route,
  Routes,
  Navigate,
  useHistory,
  useLocation,
  NavLink,
} from "react-router-dom";
import React, { useEffect, useState } from "react";
import Tasks from "./../pages/Tasks";

export default function AppBase() {
  return (
    <>
      <NavLink to={`/app/tasks/`}>Consulter les taches ici</NavLink>

      <Routes>
        <Route exact path="/app">
          <Navigate to="/app/tasks"></Navigate>
        </Route>
        <Route exact path="/app/courses">
          <Tasks></Tasks>
        </Route>
      </Routes>
    </>
  );
}
