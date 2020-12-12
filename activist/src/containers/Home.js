import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import list from "./img/list.png";
import chall from "./img/chall.png";
import rew from "./img/rew.png";
import "firebase/auth";
import firebase from "firebase/app";
import Settingbutton from "./components/Settingsbutton";
import tree from "./img/tree.png";
import bulb from "./img/bulb.png";

export const Home = () => {
  // getting current logged in user from Firebase
  const user = firebase.auth().currentUser;
  let name;

  // if user is logged in then get name - only works for users signing in with Gmail
  if (user != null) {
    name = user.displayName;
  }

  const foodCount = Number(localStorage.getItem("foodCount"));
  const householdCount = Number(localStorage.getItem("householdCount"));
  const transportCount = Number(localStorage.getItem("transportCount"));
  const shoppingCount = Number(localStorage.getItem("shoppingCount"));
  const totalCount =
    foodCount + householdCount + transportCount + shoppingCount;
  // variable containing the number for tree absorped CO2 compared to total CO2-count
  let trees = totalCount / 21;

  // facts displayed on home page
  const facts = [
    "800,000 hectares lost every year.",

    "11% of the world’s population is currently vulnerable to climate change impacts such as droughts, floods and heat waves.",

    "Roughly 3.2 billion people are currently impacted by land degradation worldwide.",

    "The worst impacts of climate change could be irreversible by 2030.",
  ];

  return (
    <main>
      <div>
        <Link to="/settings">
          <Settingbutton />
        </Link>
      </div>
      <div className="text">
        <h3>Welcome {name} </h3>
      </div>
      <div>
        <div className="container">
          <button className="circle">
            <div className="centeredtxt">
              <h5 style={{ fontSize: "165%" }}>
                Your carbon <br /> savings are:
                <h5 style={{ fontSize: "135%" }}>{totalCount} kg</h5>
              </h5>
            </div>
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
              <div className="left">
                <div className="textchall">
                  <p align="left">
                    <img src={tree} alt="chall" />
                  </p>
                  <h3>
                    Your CO2-savings equals what {Math.round(trees)} trees
                    absorb in a year!
                  </h3>
                </div>
              </div>
              <div className="left">
                <div className="textchall">
                  <p align="left">
                    <img src={bulb} alt="chall" />
                  </p>
                  <h3>{facts[Math.floor(Math.random() * facts.length)]}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
