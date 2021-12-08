import "./App.css";
import React, { Suspense } from "react";
import AppBase from "./appBase/AppBase";
import Loader from "./pages/Loader";
import Tasks from "./pages/Tasks";

import {
  Route,
  Switch,
  Redirect,
  useHistory,
  NavLink,
  Router,
} from "react-router-dom";

function App() {
  return <Suspense fallback={<Loader></Loader>}></Suspense>;
}

export default App;
