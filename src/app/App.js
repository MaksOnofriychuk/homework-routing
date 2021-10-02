import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./components/layouts/main";
import Login from "./components/layouts/login";
import NavBar from "./components/navBar";
import AllUsers from "./components/layouts/allUsers";
import OneUserId from "./components/layouts/oneUserId";

function App() {
    return (
        <>
         <NavBar />
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/login" component={Login} />
                <Route path="/allUsers/:usersId" render = {(props) => <OneUserId {...props}/>} />
                <Route path="/allUsers" component={AllUsers} />
            </Switch>
         </>
    );
}

export default App;
