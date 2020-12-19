import React, { useState } from "react";
import { FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Login.css";
import { useHistory } from "react-router-dom";
import "firebase/auth";
import firebase from "firebase/app";
import logo from "../img/logo.png";

export const Signup = () => {
  // constants containing inputted name, email and password for user signing up
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // hook that helps with navigation
  let history = useHistory();

  // function that handles registrating user in Firebase that signs up with email/password
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
        // pushes to welcome page if successfull sign-up
        history.push("/welcome");
      })
      // catch error messages and display them
      .catch(function (error) {
        let errorMessage = error.message;
        alert(errorMessage);
        setEmail("");
        setPassword("");
      });
    event.preventDefault();
  }

  return (
    <div>
      <div className="logo">
        <img src={logo} id="logo" alt="logo" />
      </div>
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
    </div>
  );
};
