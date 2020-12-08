import React from "react";
import "./App.css";
import "firebase/auth";
import firebase from "firebase/app";
import { Link } from "react-router-dom";
import list from "./img/list.png";
import chall from "./img/chall.png";
import rew from "./img/rew.png";

export const Welcome = () => {
  // should we use let instead of var?
  const user = firebase.auth().currentUser;
  let name;

  if (user != null) {
    name = user.displayName;
  }

  // <style>
  //   h3 {text-align: left}
  // </style>

  return (
    <main>
      <div className="container">
        <div className="content">
          <h3>
            Welcome {name}! <br /> Thank you for signing up!
            <br />{" "}
          </h3>
          <h3>
            Choose challenges to reduce your carbon footprint by using these
            buttons:
            <p align="left">
              {" "}
              <div className="iconswelcome">
                {" "}
                <img src={chall} alt="chall" />{" "}
              </div>{" "}
              Choose and pledge to challenges.{" "}
            </p>
            <p align="left">
              {" "}
              <div className="iconswelcome">
                {" "}
                <img src={list} alt="list" />{" "}
              </div>
              See ongoing and finished challenges.
            </p>
            <p align="left">
              {" "}
              <div className="iconswelcome">
                {" "}
                <img src={rew} alt="rew" />{" "}
              </div>
              See the statistics of your accomplishments.
            </p>
          </h3>
          <h3>Let's save the climate together!</h3>
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
