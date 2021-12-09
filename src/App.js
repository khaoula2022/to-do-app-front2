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

function App() {
  const user = useSelector((state) => state.user);
  console.log(user);

  const AppBase = React.lazy(() => import("../src/appBase/AppBase"));
  const SignUp = React.lazy(() => import("./pages/SignUp"));
  const SignIn = React.lazy(() => import("./pages/SignIn"));
  const HomePage = React.lazy(() => import("./pages/HomePage"));

  return (
    <Suspense fallback={<Loader></Loader>}>
      <Router>
        {!user ? (
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
        ) : (
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/app">
              <AppBase />
            </Route>
          </Switch>
        )}
      </Router>
    </Suspense>
  );
}

export default App;
