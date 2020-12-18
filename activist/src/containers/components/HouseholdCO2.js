import "./App.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HouseholdCO2 = () => {
  var userChall = [];
  var userChallFinish = [];
  var pledgedChallenges = localStorage.getItem("householdChallenges");
  var householdChallengesFinised = localStorage.getItem(
    "householdChallengesFinised"
  );
  if (pledgedChallenges) {
    userChall = JSON.parse(localStorage.getItem("householdChallenges"));
  }
  if (householdChallengesFinised) {
    userChallFinish = JSON.parse(
      localStorage.getItem("householdChallengesFinised")
    );
  }

  const initialState = () =>
    Number(window.localStorage.getItem("householdCount")) || 0;
  const [householdCount, setHouseholdCount] = useState(initialState);
  const [challenges, setChallenges] = useState(userChall);
  const [householdFinished, setHouseholdeFinished] = useState(userChallFinish);

  useEffect(() => {
    window.localStorage.setItem("householdCount", householdCount);
  }, [householdCount]);

  useEffect(() => {
    localStorage.setItem("householdChallenges", JSON.stringify(challenges));
  });

  useEffect(() => {
    localStorage.setItem(
      "householdChallengesFinised",
      JSON.stringify(householdFinished)
    );
  });

  const addChallenge = (newChallenge, newAmount) => {
    // here update userChall before checking the condition
    userChall = JSON.parse(localStorage.getItem("householdChallenges"));
    if (!userChall.includes(newChallenge)) {
      setChallenges([...challenges, newChallenge]);
      setHouseholdCount(householdCount + newAmount);
    }
  };

  const resetAmount = () => {
    //const msg = "Are you sure you want to reset the amount to 0kg?";
    const msg = "Are you sure you want to unpledge?";
    if (window.confirm(msg)) {
      setHouseholdeFinished(Object.assign([], userChall));
      setHouseholdCount(0);
      setChallenges([]);
    }
  };

  return (
    <main>
      <div className="text">
        <div>
          <h3>
            Congrats! You've saved{" "}
            <span>{householdCount.toFixed(1)}kg of CO2</span> today!
          </h3>
        </div>
        <div>
          <div className="center">
            <button
              id="challbutton1"
              onClick={() => {
                addChallenge("Compost at home", 1.5);
              }}
            >
              Compost at home <br /> <b>1.5 kg saved per day!</b>
            </button>

            <button
              id="challbutton1"
              onClick={() => {
                addChallenge("Recycle waste at home", 1.1);
              }}
            >
              Recycle waste at home
              <br /> <b>1.1 kg saved per day!</b>
            </button>
            <button
              id="challbutton1"
              onClick={() => {
                addChallenge("Use less water", 1);
              }}
            >
              Use less water <br /> <b>1 kg saved per day!</b>
            </button>
            <button
              id="challbutton1"
              onClick={() => {
                addChallenge("Switch off lights", 1.6);
              }}
            >
              Switch off lights <br /> <b>1.6 kg saved per day!</b>
            </button>
          </div>
          <button id="challbutton3" onClick={resetAmount}>
            Unpledge household challenge
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

export default HouseholdCO2;
