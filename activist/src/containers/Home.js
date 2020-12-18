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
import chartline from "./img/chartline.png";
import tv from "./img/tv.png";

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
  let totalCount = foodCount + householdCount + transportCount + shoppingCount;
  // variable containing the number for tree absorped CO2 compared to total CO2-count
  let television = totalCount / 0.088;

  // An array to restore some facts about cliamte change that will be shown on the home page
  const facts = [
    "800,000 hectares lost every year.",
    "11% of the world’s population is currently vulnerable to climate change impacts such as droughts, floods and heat waves.",
    "Roughly 3.2 billion people are currently impacted by land degradation worldwide.",
    "The worst impacts of climate change could be irreversible by 2030.",
    "The average temperature of the Earth is determined by the greenhouse effect.",
    "Global temperatures have increased by about 1° Celsius in the past century.",
    "The United States is the second largest contributor to carbon dioxide (CO2) in our atmosphere.",
    "Arctic sea ice and glaciers are melting.",
    "Average sea level is expected to rise between 0.5 and 1.5 metres before the end of the century.",
    "Rainforest destruction is a major cause of carbon dioxide release.",
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
              <h5 style={{ fontSize: "180%" }}>
                Your carbon <br /> savings are: <br />
                <br />
                {totalCount.toFixed(1)} kg
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
                  <img src={chartline} alt="rew" />
                </button>
              </Link>
            </div>
          </div>
          <div className="container">
            <div className="content">
              <div className="left">
                <div className="textchall">
                  <p align="left">
                    <img src={tv} alt="chall" />
                  </p>
                  <h3>
                    {" "}
                    Your CO2-savings equals watching television non-stop for{" "}
                    {Math.round(television)} hours!
                  </h3>
                </div>
              </div>
              {/* randomly show one of the facts restored locally */}
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
