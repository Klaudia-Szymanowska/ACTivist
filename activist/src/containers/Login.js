import React, { useState } from "react";
import { FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "./App.css";
import "firebase/auth";
import firebase from "firebase/app";
import { firebaseAppAuth, provider } from "./firebase";
import logo from "../img/logo.png";

export const Login = () => {
  // constants containing mail/password for signed up user
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // hook that helps with navigation
  let history = useHistory();

  // function that handles login flow for user signing up with email/password
  function handleLogin(event) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      // catch error messages and display them
      .catch(function (error) {
        // let errorMessage = error.message;
        let errorCode = error.code;
        if (errorCode === "auth/wrong-password") {
          alert("Wrong password.");
          setPassword("");
        } else {
          //alert(errorMessage);
          setPassword("");
          setEmail("");
        }
        console.log(error);
      });
    event.preventDefault();
  }

  // function that handles login/signup for users using Gmail
  const handleSignIn = () =>
    firebaseAppAuth.signInWithPopup(provider).then((result) => {
      let check = result.additionalUserInfo.isNewUser;
      if (check) {
        history.push("/welcome");
      }
    });

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
          </div>{" "}
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
