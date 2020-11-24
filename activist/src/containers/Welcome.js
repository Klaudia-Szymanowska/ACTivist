import React from "react";
import "./App.css";
import "firebase/auth";
import firebase from "firebase/app";
import { Link } from "react-router-dom";

export const Welcome = () => {
  // should we use let instead of var?
  const user = firebase.auth().currentUser;
  let name;
  let email;

  if (user != null) {
    name = user.displayName;
    email = user.email;
  }

  return (
    <main>
      <div className="container">
        <div className="content">
          <h3>
            Welcome {name} ! <br /> Thank you for signing up to ACTivist app.
            <br />{" "}
          </h3>
          <h3>
            Every day the average Dane produces 47 kg of CO2. Therefore, if we
            want to combat we need to ACT!
            <br /> On the next page you can choose challenges from 4 different
            categories. You can choose one pledge in each category and follow it
            for as long as you want. You can always change it. Each pledge
            specifies how much CO2 you can save by following the challenge.
            <br />
          </h3>
          <h3>Let's save the climate together! </h3>
        </div>
      </div>
      <div className="container">
        <div>
          <Link to="/home">
            <button className="button2" id="start">
              {" "}
              Start{" "}
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};
