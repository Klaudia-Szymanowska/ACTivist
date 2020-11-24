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
import { useCollectionData } from "react-firebase-hooks/firestore";
import { currentUser } from "./firebase";
import { getDefaultNormalizer } from "@testing-library/react";
//import { count } from "./components/checkboxtest1";
//import firebase from "firebase";

export const Home = () => {
  // should we use let instead of var?
  var user = firebase.auth().currentUser;
  var name, email, nameFirestore;

  if (user != null) {
    name = user.displayName;
    email = user.email;
    //nameFirestore = fecthName();
  }

  //Below are two functions trying to fecth a field from a firebase collection
  // it doesn't work - we get the following error:
  // "Objects are not valid as a React child "

  // FUNCTION 1 -
  /*  function fecthName() {
    var db = firebase.firestore();
    var user = firebase.auth().currentUser;
    var uid = firebase.auth().currentUser.uid;
    return db.collection("users").doc(uid).get("name");
  } */

  // FUNCTION 2 -
  /* function fecthName() {
    var docRef = firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid);
    docRef
      .get()
      .then(function (doc) {
        if (doc.exists) {
          doc.data();
        }
      })
      .catch(function (error) {
        //handle errors
      });
  } */

  const savedCarbon = 100 + 200 + 300 + 400;
  //const savedCarbon = count;

  return (
    <main>
      <div>
        <Link to="/settings">
          <img
            className="column"
            id="set"
            src={set}
            style={{ width: "5%", float: "right" }}
            alt="set"
          />
        </Link>
      </div>
      <div className="text">
        {/** The below 'Welcome' only shows the name if the user signs in with Google */}
        <h3>
          Welcome, {name} {/* {nameFirestore} */}{" "}
        </h3>
      </div>
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
