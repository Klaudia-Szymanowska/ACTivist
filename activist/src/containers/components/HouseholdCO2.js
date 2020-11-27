import "./App.css";
import React, { useState, useEffect } from "react";

const HouseholdCO2 = () => {
  var userHHChall = [];
  var userHHSavesd = [];
  var pledgedChallenges = localStorage.getItem("householdChallenges");
  if (pledgedChallenges) {
    userHHChall = JSON.parse(localStorage.getItem("householdChallenges"));
  }
  var savedHouseholdCarbon = Number(
    window.localStorage.getItem("householdSavedCarbon")
  );
  if (savedHouseholdCarbon) {
    userHHSavesd = JSON.parse(localStorage.getItem("householdSavedCarbon"));
  }

  const initialState = () =>
    Number(window.localStorage.getItem("householdCount")) || 0;
  const [householdCount, setHouseholdCount] = useState(initialState);
  const [challenges, setChallenges] = useState(userHHChall);
  const [carbonSavings, setCarbonSavings] = useState(userHHSavesd);

  useEffect(() => {
    window.localStorage.setItem("householdCount", householdCount);
  }, [householdCount]);

  useEffect(() => {
    localStorage.setItem("householdChallenges", JSON.stringify(challenges));
  });

  useEffect(() => {
    localStorage.setItem("householdSavedCarbon", JSON.stringify(carbonSavings));
  });

  const addChallenge = (newChallenge, newAmount) => {
    if (!userHHChall.includes(newChallenge)) {
      setChallenges([...challenges, newChallenge]);
      setHouseholdCount(householdCount + newAmount);
      //addAmount(newAmount);
    }
  };

  /*
  const addSavings = (newSaving) => {
    if (!userHHSavesd.includes(newSaving)) {
      setCarbonSavings([...carbonSavings, newSaving]);
      addAmount(newSaving);
    }
  };
  */
  /*
  const addAmount = (amount) => {
    setHouseholdCount(householdCount + amount);
  };
*/

  const resetAmount = () => {
    const msg = "Are you sure you want to reset the amount to 0kg?";
    if (window.confirm(msg)) {
      setHouseholdCount(0);
      setChallenges([]);
      //setCarbonSavings([]);
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
                //addAmount(50);
                addChallenge("Compost at home", 50);
                //addSavings(50);
              }}
            >
              Compost at home <br /> <b>50 kg saved per day!</b>
            </button>

            <button
              id="challbutton1"
              onClick={() => {
                addChallenge("Recycle waste at home", 100);
                //addSavings(100);
              }}
            >
              Recycle waste at home
              <br /> <b>100 kg saved per day!</b>
            </button>
            <button
              id="challbutton1"
              onClick={() => {
                addChallenge("Use less water", 150);
                //addSavings(150);
              }}
            >
              Use less water <br /> <b>150 kg saved per day!</b>
            </button>
            <button
              id="challbutton1"
              onClick={() => {
                addChallenge("Switch off lights", 200);
                //addSavings(200);
              }}
            >
              Switch off lights <br /> <b>200 kg saved per day!</b>
            </button>
          </div>
          <div>
            <h3>
              Congrats! You've saved <span>{householdCount}kg of CO2</span>{" "}
              today!
            </h3>
          </div>
          <h3>You've saved {householdCount}kg of CO2 so far.</h3>
          <button id="challbutton3" onClick={resetAmount}>
            Reset Amount
          </button>
        </div>
      </div>
    </main>
  );
};

export default HouseholdCO2;
