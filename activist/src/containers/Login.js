import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
//import "./Login.css";
import Signup from "./Signup";
import { Link } from "react-router-dom";
import "./App.css";
import "firebase/auth";
import firebase from "firebase/app";
import { firebaseAppAuth, provider } from "./firebase";
import logo from "../img/logo.png";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // validation of email and password - should be implemented later, and probably expanded with stricter password policy
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleLogin(event) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        //can be made to switch-case
        /* if (errorCode === "auth/invalid-email") {
          alert("Email not found.");
          setPassword("");
          setEmail("");
        } */
        if (errorCode === "auth/wrong-password") {
          alert("Wrong password.");
          setPassword("");
        } else {
          alert(errorMessage);
          setPassword("");
          setEmail("");
        }
        console.log(error);
      });

    event.preventDefault();
  }

  const handleSignIn = () => firebaseAppAuth.signInWithPopup(provider);

  return (
    <div>
      <div className="logo">
        <img src={logo} id="logo" alt="logo" />
      </div>
      <div className="Login">
        <form onSubmit={handleLogin}>
          <div className="logbuttons">
            <FormGroup controlId="email" bsSize="large">
              <FormLabel>Email</FormLabel>
              <FormControl
                autoFocus
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
          </div>
          <div className="logbuttons">
            <FormGroup controlId="password" bsSize="large">
              <FormLabel>Password</FormLabel>
              <FormControl
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
            </FormGroup>
          </div>
          {/* <div>
          {" "}
          <Link to="/forgot">
            <button>Forgot password?</button>
          </Link>
        </div> */}{" "}
          <button onClick={handleLogin}> Login </button>
          <div>
            {" "}
            <Link to="/signup">
              <button> Sign up </button>
            </Link>
          </div>
          <div>
            {" "}
            <button onClick={handleSignIn}>Sign in with Google</button>
          </div>
        </form>
      </div>
    </div>
  );
};
