import "./App.css";
import React, { useState, useEffect } from "react";

const ShoppingCO2 = () => {
  var userChall = [];
  var userChallFinish = [];
  var shoppingChallFinished = localStorage.getItem("shoppingChallFinished");
  var pledgedChallenges = localStorage.getItem("shoppingChallenges");
  if (pledgedChallenges) {
    userChall = JSON.parse(localStorage.getItem("shoppingChallenges"));
  }
  if (shoppingChallFinished) {
    userChallFinish = JSON.parse(localStorage.getItem("shoppingChallFinished"));
  }

  const initialState = () =>
    Number(window.localStorage.getItem("shoppingCount")) || 0;
  const [shoppingCount, setShoppingCount] = useState(initialState);
  const [shoppingChallenges, setShoppingChallenges] = useState(userChall);
  const [shoppingFinished, setshoppingFinished] = useState(userChallFinish);

  useEffect(() => {
    localStorage.setItem(
      "shoppingChallenges",
      JSON.stringify(shoppingChallenges)
    );
  });

  useEffect(() => {
    window.localStorage.setItem("shoppingCount", shoppingCount);
  }, [shoppingCount]);

  useEffect(() => {
    localStorage.setItem(
      "shoppingChallFinished",
      JSON.stringify(shoppingFinished)
    );
  });

  const addChallenge = (newChallenge, newAmount) => {
    // here update userChall before checking the condition
    if (!userChall.includes(newChallenge)) {
      setShoppingChallenges([...shoppingChallenges, newChallenge]);
      setShoppingCount(shoppingCount + newAmount);
    }
  };

  const resetAmount = () => {
    const msg = "Are you sure you want to reset the amount to 0kg?";
    if (window.confirm(msg)) {
      setshoppingFinished(Object.assign([], userChall));
      setShoppingCount(0);
      setShoppingChallenges([]);
    }
  };

  return (
    <main>
      <div className="text">
        <div>
          <div className="center">
            <button
              id="challbutton1"
              onClick={() => addChallenge("Buy eco products", 50)}
            >
              Buy eco products <br /> <b>50 kg saved per day!</b>
            </button>

            <button
              id="challbutton1"
              onClick={() => addChallenge("Go package free", 100)}
            >
              Go package free <br /> <b>100 kg saved per day!</b>
            </button>
            <button
              id="challbutton1"
              onClick={() => addChallenge("No plastic bags", 150)}
            >
              No plastic bags <br /> <b>150 kg saved per day!</b>
            </button>
            <button
              id="challbutton1"
              onClick={() => addChallenge("Buy from local supplier", 200)}
            >
              Buy from local supplier <br /> <b>200 kg saved per day!</b>
            </button>
          </div>
          <div>
            <h3>
              Congrats! You've saved <span>{shoppingCount}kg of CO2</span>{" "}
              today!
            </h3>
          </div>
          <h3>You've saved {shoppingCount}kg of CO2 so far.</h3>
          <button id="challbutton3" onClick={resetAmount}>
            Reset Amount
          </button>
        </div>
      </div>
    </main>
  );
};

export default ShoppingCO2;
