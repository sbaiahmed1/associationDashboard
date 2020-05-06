import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./views/login/login";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about"></Route>
        <Route path="/users"></Route>
        <Route exact path="/" component={Login}></Route>
      </Switch>
    </Router>
  );
}

export default App;
