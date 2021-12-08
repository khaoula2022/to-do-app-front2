import logo from "./logo.svg";
import "./App.css";
import React, { Suspense } from "react";
import AppBase from "./appBase/AppBase";
import Loader from "./pages/Loader";
import Tasks from './pages/Tasks';

import {
  Route,
  Switch,
  Redirect,
  useHistory,
  useLocation,
  NavLink,
  Router
} from "react-router-dom";

function App() {
  return (
    <Suspense fallback={<Loader></Loader>}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Tasks />
          </Route>

        </Switch>
        <Switch>
          <Route exact path="/">
            <Tasks />
          </Route>
       
        </Switch>
        )
      </Router>
    </Suspense>
  
}

export default App;
