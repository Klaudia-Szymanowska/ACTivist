import React from "react";
//import logo from './img/logo 1.png';

import { useAuthState } from "react-firebase-hooks/auth";
import { firebaseAppAuth } from "./containers/firebase";

import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Login } from "./containers/Login";
import { Signup } from "./containers/Signup";
import { Goals } from "./containers/Goals";
import { Challenges } from "./containers/Challenges";
import { MyChallenges } from "./containers/MyChallenges";
import { Transportation } from "./containers/Transportation";
import { Food } from "./containers/Food";
import { Settings } from "./containers/Settings";
import { Home } from "./containers/Home";
import { Account } from "./containers/Account";
import { Welcome } from "./containers/Welcome";
import { Household } from "./containers/Household";
import { Shopping } from "./containers/Shopping";
import { Changepassword } from "./containers/Changepassword";
//import { Checkboxes } from "./containers/Checkboxes";
import Charts from "./containers/components/Charts";
// import {storage} from "./containers/ChallengeList";

function App() {
  const [user, loading] = useAuthState(firebaseAppAuth);

  if (loading) {
    return null;
  }

  const MainComponent = user ? Home : Login;

  return (
    <main>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainComponent} />
          <Route path="/signup" component={Signup} />
          <Route exact path="/challenges" component={Challenges} />
          <Route path="/mychallenges" component={MyChallenges} />
          <Route path="/transportation" component={Transportation} />
          <Route path="/food" component={Food} />
          <Route path="/household" component={Household} />
          <Route path="/shopping" component={Shopping} />
          <Route path="/home" component={Home} />
          <Route path="/settings" component={Settings} />
          <Route path="/account" component={Account} />
          <Route path="/changepassword" component={Changepassword} />
          <Route path="/goals" component={Goals} />
          <Route path="/chart" component={Charts} />
          <Route path="/welcome" component={Welcome} />
          {/* <Route path="/test" component={Checkboxes} /> */}
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
