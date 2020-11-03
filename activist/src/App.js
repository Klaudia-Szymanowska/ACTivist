import React from "react";
//import logo from './img/logo 1.png';
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import { Goals } from "./containers/Goals";
import { Challenges } from "./containers/Challenges";
import { MyChallenges } from "./containers/MyChallenges";
import { Transportation } from "./containers/Transportation";
import {Settings} from "./containers/Settings";
import { Home } from "./containers/Home";
import { Account } from "./containers/Account";
import { Changepassword } from "./containers/Changepassword";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route exact path="/challenges" component={Challenges} />
          <Route path="/mychallenges" component={MyChallenges} />
          <Route path="/transportation" component={Transportation} />
          <Route path="/home" component={Home} />
          <Route path="/settings" component={Settings} />
          <Route path="/account" component={Account} />
          <Route path="/changepassword" component={Changepassword} />
          <Route path="/goals" component={Goals} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
