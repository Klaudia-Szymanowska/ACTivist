import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import Signup from "./Signup";
//import { Link } from 'react-router-dom';
import { Link } from "react-router-dom";
import "./App.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return username.length > 0 && password.length > 0;
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
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>

        <div>
          {" "}
          <Link to="/home">
            <button> Login </button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to="/signup">
            <button> Sign up </button>
          </Link>
        </div>

        {/*  <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>

        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Sign up
        </Button>    */}
      </form>
    </div>
  );
}
