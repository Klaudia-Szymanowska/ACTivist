import "./App.css";
import React, { useState, useEffect } from "react";

const CheckboxTest1 = () => {
  var userChall = [];
  var userChallFinish = [];
  var foodChallFinished = localStorage.getItem("foodChallFinished");
  var pledgedChallenges = localStorage.getItem("foodChallenges");
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
    if (!userChall.includes(newChallenge)) {
      setChallenges([...challenges, newChallenge]);
      setfoodCount(foodCount + newAmount);
    }
  };

  const resetAmount = () => {
    const msg = "Are you sure you want to reset the amount to 0kg?";
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
          <div className="center">
            <button
              id="challbutton1"
              onClick={() => {
                addChallenge("No beef", 50);
              }}
            >
              No beef <br /> <b>50 kg saved per day!</b>
            </button>

            <button
              id="challbutton1"
              onClick={() => {
                addChallenge("Go pescetarian", 100);
              }}
            >
              Go pescetarian <br /> <b>100 kg saved per day!</b>
            </button>
            <button
              id="challbutton1"
              onClick={() => {
                addChallenge("No vegetarian", 100);
              }}
            >
              Go vegetarian <br /> <b>150 kg saved per day!</b>
            </button>
            <button
              id="challbutton1"
              onClick={() => {
                addChallenge("Go vegan", 200);
              }}
            >
              Go vegan <br /> <b>200 kg saved per day!</b>
            </button>
          </div>
          <div>
            <h3>
              Congrats! You've saved <span>{foodCount}kg of CO2</span> today!
            </h3>
          </div>
          <h3>You've saved {foodCount}kg of CO2 so far.</h3>
          <button id="challbutton3" onClick={resetAmount}>
            Reset Amount
          </button>
        </div>
      </div>
    </main>
  );
};

export default CheckboxTest1;
