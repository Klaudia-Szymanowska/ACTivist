import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import list from "./img/list.png";
import chall from "./img/chall.png";
import rew from "./img/rew.png";
import Charts from "./components/Charts";
import "firebase/auth";
import firebase from "firebase/app";
//import { useCollectionData } from "react-firebase-hooks/firestore";
//import { currentUser } from "./firebase";
import Settingbutton from "./components/Settingsbutton";

export const Home = () => {
  const user = firebase.auth().currentUser;
  let name;

  // let nameFirestore;

  if (user != null) {
    name = user.displayName;
  }

  //const savedCarbon = 100 + 200 + 300 + 400;
  //const count = localStorage.getItem("count");
  const foodCount = Number(localStorage.getItem("foodCount"));
  const householdCount = Number(localStorage.getItem("householdCount"));
  const transportCount = Number(localStorage.getItem("transportCount"));
  const shoppingCount = Number(localStorage.getItem("shoppingCount"));
  const totalCount =
    foodCount + householdCount + transportCount + shoppingCount;
  let trees = totalCount / 21;

  function calculateTrees() {
    //if (totalCount > 0) {
    let trees = totalCount / 21;
    return trees.toString;
    //}
  }

  return (
    <main>
      <div>
        <Link to="/settings">
          <Settingbutton />
        </Link>
      </div>
      <div className="text">
        {/** The below 'Welcome' only shows the name if the user signs in with Google */}
        <h3>
          Welcome {name} {/* {nameFirestore} */}{" "}
        </h3>
      </div>
      <div>
        <div className="container">
          <button className="circle">
            <h5 style={{ fontSize: "120%" }}>
              Your carbon <br /> savings are:
              <h3>{totalCount} kg</h3>
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
          <div className="container">
            <div className="content">
              <h3>
                <div className="center">
                  <div>
                    <p align="left">
                      <img src={chall} alt="chall" />
                    </p>
                    Your CO2-savings equals what {Math.round(trees)} trees
                    absorb in a year!
                  </div>
                </div>

                <p align="left">
                  <div>
                    <img src={chall} alt="chall" />
                  </div>{" "}
                  TIPS - ARTICLE
                </p>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
