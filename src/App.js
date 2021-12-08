import logo from "./logo.svg";
import "./App.css";
import React, { Suspense } from "react";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/app">
          <AppBase />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
