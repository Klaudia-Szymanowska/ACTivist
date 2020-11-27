import "./App.css";
import React, { useState, useEffect } from "react";

const TransportationCO2 = () => {
  var userTransportChall = [];
  var userTransportSaved = [];
  var pledgedChallenges = localStorage.getItem("transportChallenges");
  if (pledgedChallenges) {
    userTransportChall = JSON.parse(
      localStorage.getItem("transportChallenges")
    );
  }
  var savedFoodCarbon = Number(
    window.localStorage.getItem("transportSavedCarbon")
  );
  if (savedFoodCarbon) {
    userTransportSaved = JSON.parse(
      localStorage.getItem("transportSavedCarbon")
    );
  }

  const initialState = () =>
    Number(window.localStorage.getItem("transportCount")) || 0;
  const [transporttransportCount, setTransporttransportCount] = useState(
    initialState
  );
  const [challenges, setChallenges] = useState(userTransportChall);
  const [carbonSavings, setCarbonSavings] = useState(userTransportSaved);

  useEffect(() => {
    window.localStorage.setItem(
      "transporttransportCount",
      transporttransportCount
    );
  }, [transporttransportCount]);

  useEffect(() => {
    localStorage.setItem("transportChallenges", JSON.stringify(challenges));
  });

  useEffect(() => {
    localStorage.setItem("transportSavedCarbon", JSON.stringify(carbonSavings));
  });

  const addChallenge = (newChallenge, newAmount) => {
    // here update userTransportChall before checking the condition
    if (!userTransportChall.includes(newChallenge)) {
      setChallenges([...challenges, newChallenge]);
      setTransporttransportCount(transporttransportCount + newAmount);
    }
  };

  const resetAmount = () => {
    const msg = "Are you sure you want to reset the amount to 0kg?";
    if (window.confirm(msg)) {
      setTransporttransportCount(0);
      setChallenges([]);
      setCarbonSavings([]);
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
                addChallenge("Car share", 50);
              }}
            >
              Car share <br /> <b>50 kg saved per day!</b>
            </button>

            <button
              id="challbutton1"
              onClick={() => {
                addChallenge("Public transport", 100);
              }}
            >
              Public transport <br /> <b>100 kg saved per day!</b>
            </button>
            <button
              id="challbutton1"
              onClick={() => {
                addChallenge("Go cycling to work ", 150);
              }}
            >
              Go cycling to work <br /> <b>150 kg saved per day!</b>
            </button>
            <button
              id="challbutton1"
              onClick={() => {
                addChallenge("Work from home", 200);
              }}
            >
              Work from home <br /> <b>200 kg saved per day!</b>
            </button>
          </div>
          <div>
            <h3>
              Congrats! You've saved{" "}
              <span>{transporttransportCount}kg of CO2</span> today!
            </h3>
          </div>
          <h3>You've saved {transporttransportCount}kg of CO2 so far.</h3>
          <button id="challbutton3" onClick={resetAmount}>
            Reset Amount
          </button>
        </div>
      </div>
    </main>
  );
};

export default TransportationCO2;
