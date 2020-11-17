import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Login.css";
import "./App.css";
import { Link } from "react-router-dom";
import "firebase/auth";
import firebase from "firebase/app";
import { firebaseAppAuth, database, provider } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export const Signup = () => {
  //export default function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // validation of email and password - should be implemented later, and probably expanded with stricter password policy
  function validateForm() {
    return password.length > 0 && name.length > 0 && email.length > 0;
  }

  function handleSubmit(event) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function (event) {
        var user = firebase.auth().currentUser;
        var ref = firebase.database().ref("user_info").child(user.uid).set({
          name: name,
          uid: user.uid,
        });
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
    event.preventDefault();
  }

  const handleSignIn = () => firebaseAppAuth.signInWithPopup(provider);

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="name" bsSize="large">
          <FormLabel>Name</FormLabel>
          <FormControl
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="name"
          />
        </FormGroup>
        <FormGroup controlId="email" bsSize="large">
          <FormLabel>Email</FormLabel>
          <FormControl
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <FormLabel>Password</FormLabel>
          <FormControl
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <div>
          {" "}
          <button onClick={handleSubmit}> Submit </button>
        </div>

        {/*  <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Submit
        </Button>    */}

        <div>
          {" "}
          <button onClick={handleSignIn}>Sign in with Google</button>
        </div>
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Sign up with Facebook
        </Button>
      </form>
    </div>
  );
};
