import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./views/login/login";
import DashboardHome from "./views/dashboardHome/dashboardHome";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/about"/>
                <Route path="/users"/>
                <Route exact path="/" component={Login}/>
                <Route exact path="/dashboard" component={DashboardHome}/>
            </Switch>
        </Router>
    );
}

export default App;
