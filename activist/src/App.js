import React from 'react';
//import logo from './img/logo 1.png';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Login } from './containers/Login';
import { Signup } from './containers/Signup';
import { Challenges } from './containers/Challenges';
import { MyChallenges } from './containers/MyChallenges';



function App() {
  return (
    <body>
    <BrowserRouter>
    <Switch>
    {/*<Route exact path="/" component={Login} />
    <Route path="/signup" component={Signup} /> */}
    <Route exact path="/" component={Challenges} />
    <Route path="/mychallenges" component={MyChallenges} />
    </Switch>
    </BrowserRouter>
    </body>
    
  );
}

export default App;