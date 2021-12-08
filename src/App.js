import logo from "./logo.svg";
import "./App.css";
import React, { Suspense } from "react";
import AppBase from "./appBase/AppBase";

import {
  Route,
  Switch,
  Redirect,
  useHistory,
  useLocation,
  NavLink,
  Router,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/app">
            <AppBase />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
