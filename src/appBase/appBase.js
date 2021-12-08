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
    </>
  );
}
