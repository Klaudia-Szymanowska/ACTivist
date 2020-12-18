import "./App.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const FoodCO2 = () => {
  let userChall = [];
  let userChallFinish = [];
  let foodChallFinished = localStorage.getItem("foodChallFinished");
  let pledgedChallenges = localStorage.getItem("foodChallenges");
  if (pledgedChallenges) {
    userChall = JSON.parse(localStorage.getItem("foodChallenges"));
  }
  if (foodChallFinished) {
    userChallFinish = JSON.parse(localStorage.getItem("foodChallFinished"));
  }

  const initialState = () =>
    Number(window.localStorage.getItem("foodCount")) || 0;
  const [foodCount, setfoodCount] = useState(initialState);
  const [challenges, setChallenges] = useState(userChall);
  const [foodFinished, setFoodFinished] = useState(userChallFinish);

  useEffect(() => {
    localStorage.setItem("foodChallenges", JSON.stringify(challenges));
  });

  useEffect(() => {
    window.localStorage.setItem("foodCount", foodCount);
  }, [foodCount]);

  useEffect(() => {
    localStorage.setItem("foodChallFinished", JSON.stringify(foodFinished));
  });

  const addChallenge = (newChallenge, newAmount) => {
    // here update userChall before checking the condition
    userChall = JSON.parse(localStorage.getItem("foodChallenges"));
    if (!(userChall && userChall.length)) {
      setChallenges([...challenges, newChallenge]);
      setfoodCount(foodCount + newAmount);
    } else {
      const message = "You can only pledge to one food challenge at the time.";
      window.alert(message);
    }
  };

  const resetAmount = () => {
    const msg = "Are you sure you want to unpledge?";
    if (window.confirm(msg)) {
      setFoodFinished(Object.assign([], userChall));
      setfoodCount(0);
      setChallenges([]);
    }
  };

  return (
    <main>
      <div className="text">
        <div>
          <div>
            <h3>
              Congrats! You've saved{" "}
              <span>{foodCount.toFixed(1)}kg of CO2</span> today!
            </h3>
          </div>
          <div className="center">
            <button
              id="challbutton1"
              onClick={() => {
                addChallenge("No beef", 3.8);
              }}
            >
              No beef <br /> <b>3.8 kg saved per day!</b>
            </button>

            <button
              id="challbutton1"
              onClick={() => {
                addChallenge("Go pescetarian", 4.1);
              }}
            >
              Go pescetarian <br /> <b>4.1 kg saved per day!</b>
            </button>
            <button
              id="challbutton1"
              onClick={() => {
                addChallenge("Go vegetarian", 4.4);
              }}
            >
              Go vegetarian <br /> <b>4.4 kg saved per day!</b>
            </button>
            <button
              id="challbutton1"
              onClick={() => {
                addChallenge("Go vegan", 4.9);
              }}
            >
              Go vegan <br /> <b>4.9 kg saved per day!</b>
            </button>
          </div>
          <button id="challbutton3" onClick={resetAmount}>
            Unpledge food challenge
          </button>
          <div>
            <Link to="/home">
              <button id="challbutton4">Pledge</button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FoodCO2;
