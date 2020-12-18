import React, { useState } from "react";
import { FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./App.css";
import "./Login.css";
import firebase from "firebase/app";
import ContainerHomeSettings from "./components/containerHomeSettings";
import logo from "../img/logo.png";

export function Changepassword() {
  // constants containing inputted email adn passwords (old and new) for users who wants to change password
  const [email, setEmail] = useState("");
  const [currentPassword, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmNewPassword] = useState("");
  // getting current logged in user from Firebase
  const user = firebase.auth().currentUser;

  function handleSubmit(event) {
    event.preventDefault();
  }

  // function that sets the above constants to empty string after caught error
  function cleanForms() {
    setEmail("");
    setPassword("");
    setNewPassword("");
    setConfirmNewPassword("");
  }

  // THIS FUNCTION SHOULD BE REFACOTRED TO 2 OR 3 DIFFERENT FUNCTIONS
  // function that validates inserted passwords and updates it by authenticating user via Firebase
  function validatePassword() {
    if (newPassword === confirmPassword) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, currentPassword)
        .then(function () {
          user
            .updatePassword(newPassword)
            .then(function () {
              alert("Password changed");
              console.log("Password changed");
              cleanForms();
            })
            // catch error messages for updating password and display them
            .catch(function (error) {
              let errorMessage = error.message;
              alert(errorMessage);
              cleanForms();
            });
        })
        // catch error messages for signing in with mail/password and displays them
        // before potetntial update passwords happens
        .catch(function (error) {
          let errorMessage = error.message;
          alert(errorMessage);
          cleanForms();
        });
    } else {
      // error message displayed if the two inputted passwords are not the same
      alert("Not the same password");
      setNewPassword("");
      setConfirmNewPassword("");
    }
  }

  return (
    <body>
      <div id="navbuttons">
        <ContainerHomeSettings />
      </div>
      <div className="logo3">
        <img src={logo} id="logo" alt="logo" />
      </div>
      <div className="Login">
        <form onSubmit={handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <FormLabel>Insert email</FormLabel>
            <FormControl
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>

          <FormGroup controlId="currentpassword" bsSize="large">
            <FormLabel>Current password</FormLabel>
            <FormControl
              type="password"
              value={currentPassword}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>

          <FormGroup controlId="newpassword" bsSize="large">
            <FormLabel>New password</FormLabel>
            <FormControl
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              type="password"
            />
          </FormGroup>

          <FormGroup controlId="confirmpassword" bsSize="large">
            <FormLabel>Confirm new password</FormLabel>
            <FormControl
              value={confirmPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              type="password"
            />
          </FormGroup>
          <button onClick={validatePassword}> Submit new password</button>
        </form>
      </div>

      <div> </div>
    </body>
  );
}
