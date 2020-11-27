import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Login.css";
//import "./src/App.css";
import { Link, useHistory } from "react-router-dom";
import "firebase/auth";
import firebase from "firebase/app";
import { firebaseAppAuth, database, provider } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export const Signup = () => {
  //export default function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  // validation of email and password - should be implemented later, and probably expanded with stricter password policy
  function validateForm() {
    return password.length > 0 && name.length > 0 && email.length > 0;
  }

  function handleSubmit(event) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        firebase
          .firestore()
          .collection("users")
          .doc(firebase.auth().currentUser.uid)
          .set({
            name: name,
          });
        history.push("/welcome");
        //window.location = "/welcome";
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
        setEmail("");
        setPassword("");
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
      </form>
    </div>
  );
};
