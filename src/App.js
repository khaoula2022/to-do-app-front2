import "./App.css";
import React, { Suspense } from "react";
import AppBase from "./appBase/AppBase";
import Loader from "./pages/Loader";
import Tasks from "./pages/Tasks";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  const AppBase = React.lazy(() => import("../src/appBase/AppBase"));

  return (
    <Suspense fallback={<Loader></Loader>}>
      <Router>
        <Switch>
          <Route path="/app">
            <AppBase />
          </Route>
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
