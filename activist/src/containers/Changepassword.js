import React, { useState } from "react";
import { FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";
import "./App.css";
import "./Login.css";
import home2 from "./img/home2.png";
import set from "./img/set.png";
import firebase from "firebase/app";

export function Changepassword() {
  const [currentpassword, enterPassword] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [confirmpassword, confirmNewPassword] = useState("");
  var user = firebase.auth().currentUser;

  function handleSubmit(event) {
    event.preventDefault();
  }

  function samePasswordInput() {
    if (newpassword === confirmpassword) return true;
  }

  function validatePassword() {
    if (samePasswordInput) {
      user
        .updatePassword(newpassword)
        .then(function () {
          // Password change successful
          console.log("Password changed");
        })
        .catch(function (error) {
          // Handle Errors here.
          console.log(error);
          var errorCode = error.code;
          var errorMessage = error.message;
        });
    }
  }

  return (
    <body>
      <div>
        <Link to="/settings">
          <img
            class="column"
            src={set}
            style={{ width: "5%", float: "right" }}
            alt="set"
          />
        </Link>
        <div>
          <Link to="/home">
            <img
              class="column"
              src={home2}
              style={{ width: "5%", float: "left" }}
              alt="set"
            />
          </Link>
        </div>
      </div>

      <div className="Login">
        <form onSubmit={handleSubmit}>
          <FormGroup controlId="currentpassword" bsSize="large">
            <FormLabel>Current password</FormLabel>
            <FormControl
              autoFocus
              type="currentpassword"
              value={currentpassword}
              onChange={(e) => enterPassword(e.target.value)}
            />
          </FormGroup>

          <FormGroup controlId="newpassword" bsSize="large">
            <FormLabel>New password</FormLabel>
            <FormControl
              value={newpassword}
              onChange={(e) => setNewPassword(e.target.value)}
              type="newpassword"
            />
          </FormGroup>

          <FormGroup controlId="confirmpassword" bsSize="large">
            <FormLabel>Confirm new password</FormLabel>
            <FormControl
              value={confirmpassword}
              onChange={(e) => confirmNewPassword(e.target.value)}
              type="confirmpassword"
            />
          </FormGroup>
        </form>
      </div>

      <div className="text">
        <div>
          {" "}
          <button className="button2" onClick={validatePassword}>
            {" "}
            Submit new password
          </button>
        </div>
      </div>
    </body>
  );
}
