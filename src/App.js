import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./views/login/login";
import DashboardHome from "./views/dashboardHome/dashboardHome";
import Tasks from "./views/tasks/tasks";
import AddTask from "./views/tasks/addTask";
import Events from "./views/events/events";
import AddEvent from "./views/events/addEvent";
import Users from "./views/users/users";
import LayoutPage from "./views/layout/layout";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/about"/>
                <Route exact path="/" component={Login}/>
                <Route exact path="/dashboard" component={DashboardHome}/>
                <Route exact path="/tasks" component={Tasks}/>
                <Route exact path={'/addtask'} component={AddTask}/>
                <Route exact path={'/addevent'} component={AddEvent}/>
                <Route exact path={'/events'} component={Events}/>
                <Route exact path={'/users'} component={Users}/>
                <Route exact path={'/layout'} component={LayoutPage}/>
            </Switch>
        </Router>
    );
}

export default App;
