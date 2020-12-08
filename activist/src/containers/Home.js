import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import list from "./img/list.png";
import chall from "./img/chall.png";
import rew from "./img/rew.png";
import Charts from "./components/Charts";
import "firebase/auth";
import firebase from "firebase/app";
import Settingbutton from "./components/Settingsbutton";
import tree from "./img/tree.png";
import bulb from "./img/bulb.png";

export const Home = () => {
  const user = firebase.auth().currentUser;
  let name;

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

  const facts =  [ "800,000 hectares lost every year.",

 "11% of the world’s population is currently vulnerable to climate change impacts such as droughts, floods and heat waves.",

 "Roughly 3.2 billion people are currently impacted by land degradation worldwide.",

"The worst impacts of climate change could be irreversible by 2030.",

];
// let i = facts.length
// const j = Math.floor(math.random() * 1);

  return (
    <main>
      <div>
        <Link to="/settings">
          <Settingbutton />
        </Link>
      </div>
      <div className="text">
        {/** The below 'Welcome' only shows the name if the user signs in with Google */}
        <h3>Welcome {name} </h3>
      </div>
      <div>
        <div className="container">
          <button className="circle">
            <div className="centeredtxt">
              <h5 style={{ fontSize: "120%" }}>
                Your carbon <br /> savings are:
                <h3>{totalCount} kg</h3>
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
                  <h3>A fact about climate change:{facts[Math.floor(Math.random() * facts.length)]}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
