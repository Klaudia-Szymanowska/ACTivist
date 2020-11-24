import "./App.css";
import React, { useState, useEffect } from "react";

const CheckboxTest1 = () => {
  /* var userChall = [];
  var pledgedChallenges = localStorage.getItem("foodChallenges");
  if (pledgedChallenges) {
    userChall = JSON.parse(pledgedChallenges);
  }*/

  const initialState = () => Number(window.localStorage.getItem("count")) || 0;
  const [count, setCount] = useState(initialState);
  //const [challenges, setChallenges] = useState(pledgedChallenges);

  /* useEffect(() => {
    localStorage.setItem("foodChallenges", JSON.stringify(challenges));
  }); */

  /*const addChallenge = (newChallenge) => {
    setChallenges([...challenges, newChallenge]);
  }; */

  const addAmount = (amount) => {
    setCount(count + amount);
  };

  const resetAmount = () => {
    const msg = "Are you sure you want to reset the amount to 0kg?";
    if (window.confirm(msg)) {
      setCount(0);
    }
  };

  useEffect(() => {
    window.localStorage.setItem("count", count);
  }, [count]);

  return (
    <main>
      <div className="text">
        <div>
          <div className="center">
            <button
              id="challbutton1"
              onClick={() => {
                addAmount(50);
                //addChallenge("No beef");
              }}
            >
              No beef <br /> <b>50 kg saved per day!</b>
            </button>

            <button
              id="challbutton1"
              onClick={() => {
                addAmount(100);
                //addChallenge("Go pescetarian");
              }}
            >
              Go pescetarian <br /> <b>100 kg saved per day!</b>
            </button>
            <button
              id="challbutton1"
              onClick={() => {
                addAmount(150);
                //addChallenge("No vegetarian");
              }}
            >
              Go vegetarian <br /> <b>150 kg saved per day!</b>
            </button>
            <button
              id="challbutton1"
              onClick={() => {
                addAmount(200);
                //addChallenge("Go vegan");
              }}
            >
              Go vegan <br /> <b>200 kg saved per day!</b>
            </button>
          </div>
          <div>
            <h3>
              Congrats! You've saved <span>{count}kg of CO2</span> today!
            </h3>
          </div>
          <h3>You've saved {count}kg of CO2 so far.</h3>
          <button id="challbutton3" onClick={resetAmount}>
            Reset Amount
          </button>
        </div>
      </div>
    </main>
  );
};

export default CheckboxTest1;
