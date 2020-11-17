import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import set from "./img/set.png";
import list from "./img/list.png";
import chall from "./img/chall.png";
import rew from "./img/rew.png";
import Charts from "./components/Charts";
import "firebase/auth";
import firebase from "firebase/app";
import { currentUser } from "./firebase";
//import firebase from "firebase";

export const Home = () => {
  // should we use let instead of var?
  var user = firebase.auth().currentUser;
  var name, email;

  if (user != null) {
    name = user.displayName;
    email = user.email;
  }

  const savedCarbon = 100 + 200 + 300 + 400;

  return (
    <main>
      <div>
        <Link to="/settings">
          <img
            className="column"
            src={set}
            style={{ width: "5%", float: "right" }}
            alt="set"
          />
        </Link>
      </div>

      {/** The below 'Welcome' only shows the name if the user signs in with Google */}
      <h3>
        <br />
        Welcome, {name}{" "}
      </h3>

      <div>
        <div className="container">
          <button className="circle">
            <h5 style={{ fontSize: "120%" }}>
              Your carbon <br /> savings are:
              <h3>{savedCarbon}</h3>
              kg
            </h5>
          </button>
        </div>
        <div>
          <div className="container2">
            <div>
              <Link to="/mychallenges">
                <button className="circleSmall">
                  <img src={list} alt="list" />
                </button>
              </Link>
            </div>
            <div>
              <Link to="/challenges">
                <button className="circleSmall">
                  <img src={chall} alt="chall" />
                </button>
              </Link>
            </div>
            <div>
              <Link to="/goals">
                <button className="circleSmall">
                  <img src={rew} alt="rew" />
                </button>
              </Link>
            </div>
          </div>
          <div className="container2">
            <button className="progressbox">
              <Charts />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
