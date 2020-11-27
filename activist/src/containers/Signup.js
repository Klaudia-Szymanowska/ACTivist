import React, { useState } from "react";
import { FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Login.css";
import { useHistory } from "react-router-dom";
import "firebase/auth";
import firebase from "firebase/app";

export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

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
      })
      .catch(function (error) {
        //var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
        setEmail("");
        setPassword("");
      });
    event.preventDefault();
  }

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
