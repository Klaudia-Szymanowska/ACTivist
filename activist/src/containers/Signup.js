import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import "./App.css";
import {HashLink as Link} from "react-router-hash-link";


export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function validateForm() {
    return username.length > 0 && password.length > 0 && name.length > 0 && email.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="username" bsSize="large">
          <ControlLabel>Username</ControlLabel>
          <FormControl
            autoFocus
            type="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <FormGroup controlId="name" bsSize="large">
          <ControlLabel>Name</ControlLabel>
          <FormControl
            value={name}
            onChange={e => setName(e.target.value)}
            type="name"
          />
        </FormGroup>
        <FormGroup controlId="email" bsSize="large">
          <ControlLabel>Email</ControlLabel>
          <FormControl
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email"
          />
        </FormGroup>  

        <div> <Link to ='/home'><button> Submit </button></Link></div>



       {/*  <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Submit
        </Button>    */}   

        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Sign up with Google
        </Button>
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Sign up with Facebook
        </Button> 

      </form>
    </div>

//<div> <Link to ='/mychallenges'><button><img src={food} style={{marginRight: "5%", marginBottom: "-1%", width: "11%"}} alt = "food" /> Food </button></Link></div>


  );
}