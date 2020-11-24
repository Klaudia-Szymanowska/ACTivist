import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import "./Login.css";
import "firebase/auth";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";

// Most of the below is from: https://blog.logrocket.com/user-authentication-firebase-react-apps/

export function ForgotPassword() {
  /* const [email, setEmail] = useState("");
  const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
  const [error, setError] = useState(null);

  const handleReset = (event) => {
    event.preventDefault();
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        setEmailHasBeenSent(true);
        setTimeout(() => {
          setEmailHasBeenSent(false);
        }, 3000);
      })
      .catch(() => {
        setError("Error resetting password");
      });
  }; */

  return (
    <main>
      {/* <div className="container">
        <div className="content">
          <h3>
            Forgot password
            <br />{" "}
          </h3>
          <h4>Type your email address to receive password reset mail:</h4>
          <FormGroup controlId="email" bsSize="large">
            <FormLabel>Email</FormLabel>
            <FormControl
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
          </FormGroup>
          <div>
            {" "}
            <button onClick={handleReset}> Reset Password </button>
          </div>
        </div>
      </div> */}
    </main>
  );
}
