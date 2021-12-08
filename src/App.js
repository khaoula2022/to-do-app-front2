import logo from "./logo.svg";
import "./App.css";
import React, { Suspense } from "react";
import AppBase from "./appBase/AppBase";

import {
  Route,
  Routes,
  Navigate,
  useHistory,
  useLocation,
  NavLink,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/app">
          <AppBase />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
