import React, { useState } from "react";
import { FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./App.css";
import "./Login.css";
import firebase from "firebase/app";
import ContainerHomeSettings from "./components/containerHomeSettings";
import logo from "../img/logo.png";

export function Changepassword() {
  const [email, setEmail] = useState("");
  const [currentPassword, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmNewPassword] = useState("");
  const user = firebase.auth().currentUser;

  function handleSubmit(event) {
    event.preventDefault();
  }

  function cleanForms() {
    setEmail("");
    setPassword("");
    setNewPassword("");
    setConfirmNewPassword("");
  }

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
            .catch(function (error) {
              let errorMessage = error.message;
              alert(errorMessage);
              cleanForms();
            });
        })
        .catch(function (error) {
          let errorMessage = error.message;
          alert(errorMessage);
          cleanForms();
        });
    } else {
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
