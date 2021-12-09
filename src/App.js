import "./App.css";
import React, { Suspense } from "react";
import AppBase from "./appBase/AppBase";
import Loader from "./pages/Loader";
import Tasks from "./pages/Tasks";
import { useSelector } from "react-redux";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

function App() {
  // const user = useSelector((state) => state.user.user);

  const AppBase = React.lazy(() => import("../src/appBase/AppBase"));

  return (
    <Suspense fallback={<Loader></Loader>}>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/app">
            <AppBase />
          </Route>
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
